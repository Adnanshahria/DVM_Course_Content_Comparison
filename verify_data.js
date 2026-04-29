const fs = require('fs');

const tsCode = fs.readFileSync('./advanced-comparison/src/data.ts', 'utf8');

// A crude way to extract the array object string and parse it.
const startIndex = tsCode.indexOf('[');
const endIndex = tsCode.lastIndexOf(']');
const dataStr = tsCode.substring(startIndex, endIndex + 1);

let data;
try {
    data = eval('(' + dataStr + ')');
} catch (e) {
    console.error("Error evaluating data string:", e);
    process.exit(1);
}

const bauText = fs.readFileSync('dvm,bau.txt', 'utf8').toLowerCase();
const gauText = fs.readFileSync('Combine-Course-Content-of-FVMAS-New.txt', 'utf8').toLowerCase();
const sbauText = fs.readFileSync('sbau asvm content.txt', 'utf8').toLowerCase();

const universityTextMap = {
    'bau': bauText,
    'gau': gauText,
    'sbau': sbauText
};

const issues = [];

data.forEach(uni => {
    const text = universityTextMap[uni.id];
    if (!text) {
        issues.push(`Text for ${uni.id} not found`);
        return;
    }
    
    uni.years.forEach((year, yIdx) => {
        year.semesters.forEach((sem, sIdx) => {
            sem.courses.forEach(course => {
                const codeParts = course.code.toLowerCase().split(/[,/&\s]+/).filter(Boolean);
                let codeMatch = false;
                for (let part of codeParts) {
                    if (text.includes(part)) {
                        codeMatch = true;
                        break;
                    }
                }
                
                const normalizedName = course.name.toLowerCase().replace(/[^a-z0-9]/g, ' ');
                const words = normalizedName.split(/\s+/).filter(w => w.length > 3);
                
                let nameMatchCount = 0;
                words.forEach(word => {
                    if (text.includes(word)) nameMatchCount++;
                });
                
                const nameMatch = words.length === 0 || (nameMatchCount / words.length) >= 0.5;
                
                if (!codeMatch && !nameMatch) {
                    issues.push(`[${uni.id}] Missing Course: Code "${course.code}" or Name "${course.name}" not found.`);
                } else if (!codeMatch) {
                    issues.push(`[${uni.id}] Code Not Found: "${course.code}" (Name: "${course.name}")`);
                }
            });
        });
    });
});

console.log(`Found ${issues.length} potential issues.`);
fs.writeFileSync('verification_report.txt', issues.join('\n'));

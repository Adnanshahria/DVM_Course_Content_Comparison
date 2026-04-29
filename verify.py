import re

# Read text files
try:
    with open('dvm,bau.txt', 'r', encoding='utf-8') as f:
        bau_text = f.read().lower()
    with open('Combine-Course-Content-of-FVMAS-New.txt', 'r', encoding='utf-8') as f:
        gau_text = f.read().lower()
    with open('sbau asvm content.txt', 'r', encoding='utf-8') as f:
        sbau_text = f.read().lower()
except Exception as e:
    print(f"Error reading txt files: {e}")
    exit(1)

uni_texts = {
    'bau': bau_text,
    'gau': gau_text,
    'sbau': sbau_text
}

try:
    with open('advanced-comparison/src/data.ts', 'r', encoding='utf-8') as f:
        ts_data = f.read()
except Exception as e:
    print(f"Error reading data.ts: {e}")
    exit(1)

unis = ts_data.split('id: "')
issues = []

for u in unis[1:]:
    uni_id = u.split('"')[0]
    
    # find all courses in this uni block
    courses = re.findall(r'{\s*code:\s*"(.*?)",\s*name:\s*"(.*?)",\s*credit:\s*"(.*?)"\s*}', u)
    text = uni_texts.get(uni_id, "")
    
    if not text:
        issues.append(f"[{uni_id}] Text file empty or not found.")
        continue
    
    for code, name, credit in courses:
        code_lower = code.lower()
        parts = re.split(r'[,/&\s]+', code_lower)
        parts = [p for p in parts if p]
        
        found_code = False
        for p in parts:
            if p in text:
                found_code = True
                break
                
        # name check
        name_clean = re.sub(r'[^a-z0-9]', ' ', name.lower())
        words = [w for w in name_clean.split() if len(w) > 3]
        match_count = sum(1 for w in words if w in text)
        found_name = len(words) == 0 or (match_count / len(words)) >= 0.5
        
        if not found_code and not found_name:
            issues.append(f"[{uni_id}] Missing: Code '{code}' or Name '{name}'")
        elif not found_code:
            issues.append(f"[{uni_id}] Code Not Found: '{code}' (Name matched: '{name}')")

with open('verification_report.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(issues))
print(f"Found {len(issues)} issues. Checked {len([c for u in unis[1:] for c in re.findall(r'code:', u)])} total courses.")

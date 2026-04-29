import fitz
import sys
import glob

def extract_pdf_text(filepath):
    try:
        doc = fitz.open(filepath)
        text = ""
        for page in doc:
            text += page.get_text()
        return text
    except Exception as e:
        return f"Error reading {filepath}: {e}"

pdf_files = glob.glob("*.pdf")
for f in pdf_files:
    text = extract_pdf_text(f)
    out_path = f.replace(".pdf", ".txt")
    with open(out_path, "w", encoding="utf-8") as out:
        out.write(text)
    print(f"Extracted {f} to {out_path}")

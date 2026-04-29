export interface Course {
  code: string;
  name: string;
  credit: string;
}

export interface SemesterData {
  title: string;
  creditTotal: string;
  courses: Course[];
}

export interface YearData {
  yearTitle: string;
  semesters: SemesterData[];
}

export interface UniversityData {
  id: string;
  name: string;
  degree: string;
  duration: string;
  creditSystem: string;
  totalCredits: string;
  internship: string;
  years: YearData[];
}

export const data: UniversityData[] = [
  {
    id: "sbau",
    name: "Sher-e-Bangla Agricultural University (SBAU)",
    degree: "B.Sc. Vet. Sci. & A.H.",
    duration: "5 Years (10 Semesters)",
    creditSystem: "Semester System (Jan & Jul)",
    totalCredits: "228 Credits",
    internship: "L5S-II (21 Credits)",
    years: [
      {
        yearTitle: "Level-1",
        semesters: [
          {
            title: "Semester-I",
            creditTotal: "22",
            courses: [
              { code: "APMA 111/112", name: "Animal Science & Ecology", credit: "2+1" },
              { code: "POSC 113/114", name: "Fundamental Poultry Science", credit: "3+1" },
              { code: "ANGB 115/116", name: "Fundamental Nutrition", credit: "2+1" },
              { code: "MIPA 117/118", name: "General Microbiology", credit: "2+1" },
              { code: "AGRO 119/120", name: "Fodder Production & Management", credit: "1+1" },
              { code: "DEPS 121", name: "Rural Sociology", credit: "2+0" },
              { code: "ENGL 123/124", name: "Advanced English Language Skills", credit: "1+1" },
              { code: "ANHP 125/126", name: "General Anatomy", credit: "2+1" },
            ]
          },
          {
            title: "Semester-II",
            creditTotal: "24",
            courses: [
              { code: "DASC 151/152", name: "Fundamental Dairy Science & Market Milk", credit: "3+1" },
              { code: "ANGB 153/154", name: "Fundamental Genetics", credit: "3+1" },
              { code: "ANHP 155/156", name: "Systematic Anatomy", credit: "3+1" },
              { code: "ANHP 157/158", name: "Histology", credit: "3+1" },
              { code: "ANHP 159/160", name: "General Physiology", credit: "2+1" },
              { code: "BIOC 161/162", name: "Chemistry of Biomolecules", credit: "3+2" },
            ]
          }
        ]
      },
      {
        yearTitle: "Level-2",
        semesters: [
          {
            title: "Semester-I",
            creditTotal: "22",
            courses: [
              { code: "APMA 211/212", name: "Beef Cattle, Draught & Large Animal Production", credit: "2+1" },
              { code: "DASC 213/214", name: "Dairy Chemistry & Microbiology", credit: "2+1" },
              { code: "ANHP 215", name: "Endocrine Physiology", credit: "1+0" },
              { code: "ANHP 217/218", name: "Embryology", credit: "1+1" },
              { code: "MIPA 219/220", name: "Bacteriology", credit: "2+1" },
              { code: "MIPA 221/222", name: "General Parasitology & Malacology", credit: "2+1" },
              { code: "PATH 223/224", name: "General & Nutritional Pathology", credit: "3+1" },
              { code: "AGEC 225", name: "Livestock Economics", credit: "2+0" },
              { code: "ANHP 227", name: "Neuro-Physiology", credit: "1+0" },
            ]
          },
          {
            title: "Semester-II",
            creditTotal: "24",
            courses: [
              { code: "POSC 251/252", name: "Broiler & Layer Production", credit: "2+1" },
              { code: "ANGB 253/254", name: "Poultry Nutrition", credit: "2+1" },
              { code: "ANHP 255/256", name: "Systemic Physiology", credit: "2+1" },
              { code: "MIPA 257/258", name: "Virology", credit: "3+1" },
              { code: "MIPA 259/260", name: "Nemathelminthes & Platihelminthes", credit: "3+1" },
              { code: "PATH 261/262", name: "Systemic & Aquatic Pathology & Oncology", credit: "3+1" },
              { code: "PTOX 263/264", name: "General Pharmacology", credit: "2+1" },
            ]
          }
        ]
      },
      {
        yearTitle: "Level-3",
        semesters: [
          {
            title: "Semester-I",
            creditTotal: "23",
            courses: [
              { code: "POSC 311/312", name: "Duck & Specialized Fowl Production", credit: "1+1" },
              { code: "ANGB 313/314", name: "Livestock & Poultry Breeding", credit: "2+1" },
              { code: "ANHP 316", name: "Comparative & Neuro-Anatomy (Practical)", credit: "0+2" },
              { code: "MIPA 319", name: "Mycology, Mycoplasmology, Rickettsiology & Chlamydiology", credit: "1+0" },
              { code: "MIPA 321/322", name: "Veterinary Entomology & Aquatic Parasitology", credit: "2+1" },
              { code: "PTOX 325/326", name: "Systemic & Aquatic Pharmacology", credit: "2+1" },
              { code: "AGST 327/328", name: "Biostatistics", credit: "2+1" },
              { code: "MEPH 329/330", name: "General & Systemic Medicine", credit: "2+1" },
              { code: "SUTH 331/332", name: "General Surgery", credit: "2+1" },
            ]
          },
          {
            title: "Semester-II",
            creditTotal: "25",
            courses: [
              { code: "APMA 351/352", name: "Goat, Sheep & Small Animal Production", credit: "1+1" },
              { code: "DASC 353/354", name: "Dairy Cattle and Buffalo Production", credit: "1+1" },
              { code: "ANGB 355/356", name: "Livestock Nutrition", credit: "2+1" },
              { code: "MIPA 357/358", name: "Immunology & Serology", credit: "2+1" },
              { code: "MIPA 359/360", name: "Protozoology", credit: "2+1" },
              { code: "PTOX 361/362", name: "Toxicology", credit: "2+1" },
              { code: "PATH 363/364", name: "Pathology of Infectious Diseases & Avian Pathology", credit: "3+1" },
              { code: "MEPH 365/366", name: "Farm Animal Medicine", credit: "2+1" },
              { code: "SUTH 367/368", name: "Anaesthesiology", credit: "1+1" },
            ]
          }
        ]
      },
      {
        yearTitle: "Level-4",
        semesters: [
          {
            title: "Semester-I",
            creditTotal: "23",
            courses: [
              { code: "DASC 411/412", name: "Dairy Food Technology", credit: "1+1" },
              { code: "ANGB 413/414", name: "Feed Processing, Conservation & Feed Industry", credit: "2+1" },
              { code: "MIPA 417", name: "Animal Hygiene, Biosafety & Biosecurity", credit: "2+0" },
              { code: "PTOX 420", name: "Pharmacy & Therapeutics (Practical)", credit: "0+2" },
              { code: "MEPH 423/424", name: "Pet Animal Medicine", credit: "2+1" },
              { code: "SUTH 427/428", name: "Gynaecology", credit: "3+1" },
              { code: "MIPA 429", name: "Molecular Microbiology", credit: "1+0" },
              { code: "MEPH 431/432", name: "Avian Medicine", credit: "2+1" },
              { code: "SUTH 433/434", name: "Farm Animal Surgery", credit: "2+1" },
            ]
          },
          {
            title: "Semester-II",
            creditTotal: "22",
            courses: [
              { code: "APMA 451/452", name: "Wildlife, Zoo, Pet, Lab & Aquatic Animal Management & Conservation", credit: "2+1" },
              { code: "POSC 453/454", name: "Breeder Farm & Hatchery Management", credit: "2+1" },
              { code: "ANGB 455/456", name: "Reproduction of Farm Animals & Biotechnology", credit: "3+1" },
              { code: "MIPA 457", name: "Zoonotic Microbiology", credit: "2+0" },
              { code: "MEPH 461/462", name: "Zoo, Lab, Wild & Aquatic Animal Medicine", credit: "1+1" },
              { code: "SUTH 465/466", name: "Obstetrics", credit: "2+1" },
              { code: "ANHP 470", name: "Clinical Anatomy (Practical)", credit: "0+2" },
              { code: "MEPH 471", name: "Forensic Medicine, Jurisprudence & Ethics", credit: "1+0" },
              { code: "SUTH 474", name: "Radiology, Clinics Surgery & Theriogenology (Practical)", credit: "0+2" },
            ]
          }
        ]
      },
      {
        yearTitle: "Level-5",
        semesters: [
          {
            title: "Semester-I",
            creditTotal: "22",
            courses: [
              { code: "APMA 511/512", name: "Meat Technology & Animal By-product Management", credit: "2+1" },
              { code: "MIPA 513/514", name: "Food Microbiology, Hygiene & Safety", credit: "2+1" },
              { code: "PATH 516", name: "Clinical Pathology & Necropsy (Practical)", credit: "0+2" },
              { code: "MEPH 520", name: "Clinical Medicine (Practical)", credit: "0+2" },
              { code: "MEPH 521", name: "Epidemiology & Preventive Medicine", credit: "1+0" },
              { code: "SUTH 523/524", name: "Pet, Zoo & Aquatic Animal Surgery", credit: "2+1" },
              { code: "SUTH 527/528", name: "Andrology & Clinical Reproductive Technology", credit: "2+1" },
              { code: "AEIS 529/530", name: "Livestock Extension & Information System", credit: "2+1" },
              { code: "MEPH 531/532", name: "Zoonoses & Public Health", credit: "1+1" },
            ]
          },
          {
            title: "Semester-II (Internship)",
            creditTotal: "21",
            courses: [
              { code: "INCP 552", name: "Veterinary Clinical Practices", credit: "0+7" },
              { code: "INFP 554", name: "Farm Management Practices", credit: "0+6" },
              { code: "INLP 556", name: "Laboratory, Development & Extension Practices", credit: "0+5" },
              { code: "INSR 558", name: "Seminar & Report Writing", credit: "0+3" },
            ]
          }
        ]
      }
    ]
  },
  {
    id: "gau",
    name: "Gazipur Agricultural University (GAU)",
    degree: "Doctor of Veterinary Medicine (DVM)",
    duration: "5.5 Years (Trimester + Internship)",
    creditSystem: "Term System (Summer/Autumn/Winter)",
    totalCredits: "Varies",
    internship: "6 Months Clinical Internship",
    years: [
      {
        yearTitle: "Year-1",
        semesters: [
          {
            title: "Term-1 (Summer)",
            creditTotal: "-",
            courses: [
              { code: "ANH 101", name: "Gross Anatomy I", credit: "3+1" },
              { code: "ANH 102", name: "General Histology & Embryology", credit: "3+1" },
              { code: "ASN 101", name: "General Animal Science", credit: "2+1" },
              { code: "MPH 101", name: "Animal Hygiene & Bio-security", credit: "2+1" },
            ]
          },
          {
            title: "Term-2 (Autumn)",
            creditTotal: "-",
            courses: [
              { code: "ANH 131", name: "Gross Anatomy II", credit: "3+1" },
              { code: "ANH 132", name: "Systemic Histology", credit: "3+1" },
              { code: "BMB 131", name: "Biophysics & Chemistry of Biomolecules", credit: "3+1" },
              { code: "DPS 131", name: "General Poultry Science", credit: "2+1" },
            ]
          },
          {
            title: "Term-3 (Winter)",
            creditTotal: "-",
            courses: [
              { code: "ASN 161", name: "Draught & Meat Animal Production & Management", credit: "2+1" },
              { code: "DPS 161", name: "General Dairy Science", credit: "2+1" },
              { code: "MPH 161", name: "General Microbiology", credit: "3+1" },
              { code: "PHP 161", name: "General Physiology", credit: "3+1" },
            ]
          }
        ]
      },
      {
        yearTitle: "Year-2",
        semesters: [
          {
            title: "Term-1 (Summer)",
            creditTotal: "-",
            courses: [
              { code: "ABG 201", name: "Animal Genetics", credit: "3+1" },
              { code: "ASN 201", name: "Fodder Production", credit: "2+1" },
              { code: "AEC 201", name: "Livestock Production Economics", credit: "3+0" },
              { code: "DPS 201", name: "Poultry Production & Management", credit: "3+1" },
              { code: "PHP 201", name: "Systemic Physiology", credit: "3+1" },
            ]
          },
          {
            title: "Term-2 (Autumn)",
            creditTotal: "-",
            courses: [
              { code: "MPH 231", name: "Systemic Bacteriology & Mycology", credit: "3+1" },
              { code: "ASN 231", name: "Wildlife, Zoo, Aquatic & Companion Animal Management", credit: "2+1" },
              { code: "PBL-231", name: "General & Nutritional Pathology", credit: "3+1" },
              { code: "PBL-232", name: "General Parasitology & Entomology", credit: "3+1" },
              { code: "PHP 231", name: "Nutritional Physiology", credit: "2+0" },
            ]
          },
          {
            title: "Term-3 (Winter)",
            creditTotal: "-",
            courses: [
              { code: "ASN 261", name: "Non-Ruminant Nutrition, Feeds & Feeding", credit: "2+1" },
              { code: "ANH 261", name: "Comparative Anatomy & Neuro-anatomy", credit: "0+1" },
              { code: "DPS 261", name: "Dairy Animal Production & Management", credit: "2+1" },
              { code: "MPH 261", name: "Virology", credit: "3+1" },
              { code: "PBL-261", name: "Helminthology & Malacology", credit: "3+1" },
              { code: "PHP 261", name: "General Pharmacology & Therapeutics", credit: "3+1" },
            ]
          }
        ]
      },
      {
        yearTitle: "Year-3",
        semesters: [
          {
            title: "Term-1 (Summer)",
            creditTotal: "-",
            courses: [
              { code: "MPH 301", name: "Immunology, Serology & Molecular Technique", credit: "2+1" },
              { code: "PBL-301", name: "Protozoology", credit: "3+1" },
              { code: "PBL-302", name: "Systemic Pathology & Oncology", credit: "3+1" },
              { code: "PHP 301", name: "Systemic Pharmacology", credit: "3+0" },
            ]
          },
          {
            title: "Term-2 (Autumn)",
            creditTotal: "-",
            courses: [
              { code: "ASN 331", name: "Meat Science, Wool Technology & Byproduct Management", credit: "3+1" },
              { code: "DPS 331", name: "Dairy & Poultry Product Technology", credit: "2+1" },
              { code: "PBL-331", name: "Pathology of Infectious Diseases", credit: "3+0" },
              { code: "PHP 331", name: "Toxicology", credit: "3+1" },
            ]
          },
          {
            title: "Term-3 (Winter)",
            creditTotal: "-",
            courses: [
              { code: "ANH 361", name: "Topographic & Surgical Anatomy", credit: "0+1" },
              { code: "ABG 361", name: "Animal Breeding", credit: "3+1" },
              { code: "ASN 361", name: "Ruminant Nutrition, Feeds & Feeding", credit: "2+1" },
              { code: "MED 361", name: "General Medicine", credit: "3+1" },
              { code: "PBL-361", name: "Avian Pathology", credit: "3+1" },
              { code: "SRA 361", name: "General Surgery", credit: "3+1" },
            ]
          }
        ]
      },
      {
        yearTitle: "Year-4",
        semesters: [
          {
            title: "Term-1 (Summer)",
            creditTotal: "-",
            courses: [
              { code: "DPS 401", name: "Breeder Farm Management & Hatchery Operation", credit: "2+1" },
              { code: "GOR 401", name: "Gynecology & Reproductive Biotechnology", credit: "3+1" },
              { code: "MED 401", name: "Farm Animal Medicine", credit: "3+1" },
              { code: "SRA 401", name: "Anesthesiology", credit: "2+1" },
              { code: "SRA 402", name: "Radiology & Imaging", credit: "2+1" },
            ]
          },
          {
            title: "Term-2 (Autumn)",
            creditTotal: "-",
            courses: [
              { code: "GOR 431", name: "Andrology & Artificial Insemination", credit: "2+1" },
              { code: "MED 431", name: "Epidemiology & Preventive Medicine", credit: "3+1" },
              { code: "MED 432", name: "Avian Medicine", credit: "3+1" },
              { code: "MPH 431", name: "Dairy Microbiology & Food Hygiene", credit: "3+1" },
              { code: "SRA 431", name: "Farm Animal Surgery", credit: "3+1" },
            ]
          },
          {
            title: "Term-3 (Winter)",
            creditTotal: "-",
            courses: [
              { code: "GOR 461", name: "Reproductive Immunology & Obstetrics", credit: "3+1" },
              { code: "GOR 462", name: "Theriogenology of Wildlife, Zoo, Aquatic & Companion Animals", credit: "2+1" },
              { code: "MED 461", name: "Metabolic & Nutritional Diseases of Farm Animals", credit: "2+0" },
              { code: "MED 462", name: "Wildlife, Zoo, Aquatic & Companion Animal Medicine", credit: "3+1" },
              { code: "SRA 461", name: "Wildlife, Zoo, Aquatic & Companion Animal Surgery", credit: "2+1" },
            ]
          }
        ]
      },
      {
        yearTitle: "Year-5",
        semesters: [
          {
            title: "Term-1 (Clinical)",
            creditTotal: "-",
            courses: [
              { code: "GOR 501", name: "Theriogenology (Clinics) (Practical)", credit: "0+2" },
              { code: "MED 501", name: "Forensic Medicine, Jurisprudence & Animal Welfare", credit: "3+0" },
              { code: "MED 502", name: "Medicine (Clinics) (Practical)", credit: "0+2" },
              { code: "MPH 501", name: "Public Health & Zoonoses", credit: "2+0" },
              { code: "PBL-501", name: "Clinical Pathology & Necropsy (Practical)", credit: "0+2" },
              { code: "PHP 501", name: "Clinical Pharmacology & Pharmacy (Practical)", credit: "0+2" },
              { code: "SRA 501", name: "Surgery (Clinics) (Practical)", credit: "0+2" },
            ]
          }
        ]
      }
    ]
  },
  {
    id: "bau",
    name: "Bangladesh Agricultural University (BAU)",
    degree: "Doctor of Veterinary Medicine (DVM)",
    duration: "5 Years",
    creditSystem: "Semester System",
    totalCredits: "187 + 12 (Internship)",
    internship: "L5 S2 (12 Credits)",
    years: [
      {
        yearTitle: "Level-1",
        semesters: [
          {
            title: "Semester-1",
            creditTotal: "19",
            courses: [
              { code: "VAH 111, 112", name: "Anatomy (Osteology, Arthrology, Myology and Angiology)", credit: "3+1" },
              { code: "VAH 114", name: "General Histology and Embryology", credit: "0+1" },
              { code: "VPHY 111, 112", name: "Basic and Circulatory Physiology", credit: "2+1" },
              { code: "BCHEM 111, 112", name: "Biophysics and Chemistry of Biomolecules", credit: "3+1" },
              { code: "AS 115, 116", name: "Animal Science", credit: "3+1" },
              { code: "LAN 111", name: "English Language", credit: "2+0" },
              { code: "CSM 112", name: "Computer Application", credit: "0+1" },
            ]
          },
          {
            title: "Semester-2",
            creditTotal: "22",
            courses: [
              { code: "VAH 121, 122", name: "Anatomy (Splanchnology, Neurology and Aesthesiology)", credit: "3+1" },
              { code: "VAH 123, 124", name: "Systemic Histology", credit: "3+1" },
              { code: "VPHY 121, 122", name: "Integral Physiology", credit: "1+1" },
              { code: "VMH 121, 122", name: "Bacteriology", credit: "3+1" },
              { code: "BCHEM 123, 124", name: "Metabolism of Biomolecules", credit: "3+1" },
              { code: "PS 123, 124", name: "Elementary Poultry Science", credit: "3+1" },
            ]
          }
        ]
      },
      {
        yearTitle: "Level-2",
        semesters: [
          {
            title: "Semester-1",
            creditTotal: "21",
            courses: [
              { code: "VAH 216", name: "Comparative Anatomy and Neuroanatomy", credit: "0+1" },
              { code: "VPHY 211", name: "Nutritional Physiology", credit: "2+0" },
              { code: "VMH 211, 212", name: "Virology", credit: "3+1" },
              { code: "VPAR 211, 212", name: "General Parasitology, Helminthology and Malacolog", credit: "3+1" },
              { code: "AGRON 211, 212", name: "Forage Agronomy", credit: "2+1" },
              { code: "STAT 215, 216", name: "Biostatistics", credit: "2+1" },
              { code: "DS 213, 214", name: "Elementary Dairy Science", credit: "3+1" },
            ]
          },
          {
            title: "Semester-2",
            creditTotal: "21",
            courses: [
              { code: "VPHY 221", name: "Endocrine and Reproductive Physiology", credit: "2+0" },
              { code: "VMH 222", name: "Mycology, Rickettsiology, Mycoplasmology and Chlamydiology", credit: "0+1" },
              { code: "VMH 223, 224", name: "Immunology and Serology", credit: "2+1" },
              { code: "VPAR 221, 222", name: "Entomology", credit: "2+1" },
              { code: "VPATH 221, 222", name: "General Pathology", credit: "3+1" },
              { code: "VPHA 221, 222", name: "General Pharmacology and Chemotherapeutics", credit: "3+1" },
              { code: "AN 223, 224", name: "Animal Nutrition", credit: "3+1" },
            ]
          }
        ]
      },
      {
        yearTitle: "Level-3",
        semesters: [
          {
            title: "Semester-1",
            creditTotal: "21",
            courses: [
              { code: "VAH 318", name: "Applied Anatomy (Topographic and surgical anatomy)", credit: "0+1" },
              { code: "VMH 311, 312", name: "Animal and Poultry Hygiene and Management", credit: "3+1" },
              { code: "VPAR 311, 312", name: "Protozoology", credit: "2+1" },
              { code: "VPHA 311", name: "Systemic Pharmacology", credit: "3+0" },
              { code: "VPATH 311, 312", name: "Systemic Pathology and Oncology", credit: "3+1" },
              { code: "VM 311, 312", name: "Clinical Methodology", credit: "2+1" },
              { code: "AS 311, 312", name: "Animal Waste Management", credit: "2+1" },
            ]
          },
          {
            title: "Semester-2",
            creditTotal: "22",
            courses: [
              { code: "VPATH 321", name: "Pathology of Infectious and Non-Infectious Diseases", credit: "2+0" },
              { code: "VPHA 321, 322", name: "Toxicology", credit: "3+1" },
              { code: "VM 321, 322", name: "Epidemiology and Preventive Medicine", credit: "3+1" },
              { code: "VM 323, 324", name: "Systemic Diseases of Farm Animals", credit: "3+1" },
              { code: "VSO 321, 322", name: "General Surgery", credit: "3+1" },
              { code: "ABG 329, 330", name: "Genetics and Animal Breeding", credit: "3+1" },
            ]
          }
        ]
      },
      {
        yearTitle: "Level-4",
        semesters: [
          {
            title: "Semester-1",
            creditTotal: "24",
            courses: [
              { code: "VPATH 411, 412", name: "Poultry Pathology", credit: "2+1" },
              { code: "VM 411, 412", name: "Small, Zoo and Laboratory Animal Medicine", credit: "3+1" },
              { code: "VM 413", name: "Metabolic and Nutritional Diseases of Farm Animals", credit: "2+0" },
              { code: "VSO 411", name: "Anesthesiology", credit: "3+0" },
              { code: "VSO 413, 414", name: "Obstetrics and Gynaecology", credit: "3+1" },
              { code: "FS 413, 414", name: "Livestock Farm Design and Environment", credit: "3+1" },
              { code: "FPM 4101, 4102", name: "Farm Operation and Management", credit: "3+1" },
            ]
          },
          {
            title: "Semester-2",
            creditTotal: "20",
            courses: [
              { code: "VM 421, 422", name: "Infectious Diseases of Farm Animals", credit: "3+1" },
              { code: "VM 423, 424", name: "Poultry Medicine", credit: "2+1" },
              { code: "VSO 423, 424", name: "Radiology and Soundness", credit: "2+1" },
              { code: "VMH 421, 422", name: "Food Hygiene, Microbiology and Safety", credit: "2+1" },
              { code: "VSO 425, 426", name: "Andrology and Artificial Insemination", credit: "2+1" },
              { code: "AGEXT 423, 424", name: "Agricultural Extension Education", credit: "3+1" },
            ]
          }
        ]
      },
      {
        yearTitle: "Level-5",
        semesters: [
          {
            title: "Semester-1",
            creditTotal: "17",
            courses: [
              { code: "VPHA 512", name: "Clinical Pharmacology and Pharmacy", credit: "0+1" },
              { code: "VPATH 512", name: "Clinical Pathology and Necropsy", credit: "0+1" },
              { code: "VM 512", name: "Clinics (Medicine)", credit: "0+1" },
              { code: "VSO 512", name: "Clinics (Theriogenology)", credit: "0+1" },
              { code: "VSO 514", name: "Clinics (Surgery)", credit: "0+1" },
              { code: "VMH 511", name: "Veterinary Public Health", credit: "2+0" },
              { code: "VM 511", name: "Forensic Medicine, Jurisprudence and Animal Welfare", credit: "2+0" },
              { code: "VSO 517, 518", name: "Operative Surgery", credit: "3+1" },
              { code: "AE 511, 512", name: "Livestock Production Economics", credit: "3+1" },
            ]
          },
          {
            title: "Semester-2",
            creditTotal: "12",
            courses: [
              { code: "INTERN", name: "Internship", credit: "12" },
            ]
          }
        ]
      }
    ]
  }
];

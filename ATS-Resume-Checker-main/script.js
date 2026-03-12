function checkATSScore() {
    let resumeText = document.getElementById("resumeText").value.toLowerCase();

    // ✅ Categories of Important ATS Keywords with Weightage
    let keywordCategories = {
        "Programming Languages": ["JavaScript", "Python", "Java", "C++", "C#", "PHP", "Swift", "Kotlin", "Go", "Ruby", "TypeScript"],
        "Web Development": ["HTML", "CSS", "Bootstrap", "React", "Angular", "Vue.js", "Node.js", "Express.js", "jQuery", "SASS", "LESS"],
        "Backend & Databases": ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "Firebase", "DynamoDB", "GraphQL", "REST API", "SOAP", "Microservices"],
        "DevOps & Tools": ["Docker", "Kubernetes", "Jenkins", "Git", "GitHub", "GitLab", "Bitbucket", "CI/CD", "Terraform", "AWS", "Azure", "GCP"],
        "Data Science & AI": ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "NLP", "Data Analysis", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
        "Cybersecurity": ["Encryption", "Ethical Hacking", "Penetration Testing", "Firewalls", "Cloud Security", "Threat Analysis"],
        "Soft Skills & Management": ["Communication", "Teamwork", "Problem Solving", "Leadership", "Critical Thinking", "Adaptability", "Project Management", "Agile", "Scrum", "Kanban"],
        "Cloud & System Administration": ["Linux", "Windows Server", "Networking", "Virtualization", "VMware", "Shell Scripting", "PowerShell"]
    };

    // ✅ Weightage System for Different Categories
    let categoryWeightage = {
        "Programming Languages": 20,
        "Web Development": 15,
        "Backend & Databases": 15,
        "DevOps & Tools": 10,
        "Data Science & AI": 10,
        "Cybersecurity": 5,
        "Soft Skills & Management": 15,
        "Cloud & System Administration": 10
    };

    let totalWeightage = 0;
    let matchedWeightage = 0;
    let matchedKeywords = [];
    let missingKeywords = [];

    // ✅ Checking Keywords & Assigning Scores
    for (let category in keywordCategories) {
        let categoryKeywords = keywordCategories[category];
        let categoryScore = categoryWeightage[category];

        let categoryMatched = categoryKeywords.filter(keyword => resumeText.includes(keyword.toLowerCase()));

        if (categoryMatched.length > 0) {
            matchedWeightage += categoryScore;
            matchedKeywords.push(...categoryMatched);
        } else {
            missingKeywords.push(...categoryKeywords);
        }

        totalWeightage += categoryScore;
    }

    // ✅ Final ATS Score Calculation
    let score = (matchedWeightage / totalWeightage) * 100;

    // ✅ Display the Score
    document.getElementById("score").innerText = score.toFixed(2) + "%";

    // ✅ Show Missing Keywords
    let missingKeywordsList = document.getElementById("missingKeywords");
    missingKeywordsList.innerHTML = "";
    missingKeywords.forEach(keyword => {
        let listItem = document.createElement("li");
        listItem.innerText = keyword;
        missingKeywordsList.appendChild(listItem);
    });
}
  

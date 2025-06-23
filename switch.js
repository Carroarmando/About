let isEnglish = false;
function switchLanguage() {
    isEnglish = !isEnglish;
    const t = {
    it: {
        title: "Portfolio di Riccardo",
        subtitle: "Il mio viaggio tra studio, progetti e passioni",
        navMaterie: "Materie",
        navHobby: "Hobby",
        navPcto: "PCTO",
        navProgetti: "Progetti",
        navContatti: "Contatti",
        sectionMaterie: "📚 Materie Scolastiche",
        sectionHobby: "🎯 Hobby e Competenze",
        sectionPcto: "🧪 PCTO",
        sectionProgetti: "💼 Progetti",
        sectionContatti: "📞 Contatti",
        infotxt: "Ho imparato linguaggi per sviluppo web, HTML, CSS, PHP, JS e MySQL e per sviluppo app, C, C#, Java, Python, assembly. Ho realizzato gestionali, simulazioni web e giochi.",
        sistemitxt: "Ho imparato a configurare reti, gestirne le comunicazioni con e senza NAT, a configurare server web, DHCP, FTP, posta e DNS.",
        pctotxt: "Attività di sviluppo web, test, debugging e collaborazione in team.",
        proj3: "Scacchi - 2D in C#, grafica fatta con la libreria SFML. Focus sulla funzionalità.",
        proj4: "Plant vs Zombie – Clone 2D sviluppato in C# con logica di spawn, gestione HP e animazioni. Focus sul game loop.",
        proj5: "Gestionale scout - applicazione web sviluppata in gruppo con la classe, con backend in PHP e MySQL.",
        projHack: "Team da 6, progetto di un'app web per facilitare comunicazioni tra scuole, studenti, diplomati e aziende per PCTO, tirocini e lavoro.",
        bike: "Andare in bici",
        basket: "Basket",
        anime: "Anime e manga",
        skills: "Problem solving, lavoro in team, adattabilità.",
        pctotitle: "PCTO presso APRA (Jesi)",
        proj3title: "Terzo anno",
        proj4title: "Quarto anno",
        proj5title: "Quinto anno",
        projhacktitle: "Hackathon 2025 (quinto anno)",
        diricts: "&copy; 2025 Riccardo Portfolio - Tutti i diritti riservati",
        CV: "Scarica CV"
    },
    en: {
        title: "Riccardo's Portfolio",
        subtitle: "My journey through studies, projects and passions",
        navMaterie: "Subjects",
        navHobby: "Hobbies",
        navPcto: "Internships",
        navProgetti: "Projects",
        navContatti: "Contacts",
        sectionMaterie: "📚 School Subjects",
        sectionHobby: "🎯 Hobbies & Skills",
        sectionPcto: "🧪 Internships",
        sectionProgetti: "💼 Projects",
        sectionContatti: "📞 Contacts",
        infotxt: "I learned web development languages (HTML, CSS, PHP, JS, MySQL) and app programming in C, C#, Java, Python, assembly. I built management tools, web simulations, and games.",
        sistemitxt: "I learned to configure networks, manage NAT/no-NAT communications, and set up servers: web, DHCP, FTP, mail, DNS.",
        pctotxt: "Web development, testing, debugging, and teamwork experience.",
        proj3: "Chess - 2D in C# using SFML library. Focused on functionality.",
        proj4: "Plant vs Zombie – 2D clone in C# with spawn logic, HP management and animations. Focused on game loop.",
        proj5: "Scout management system - web app developed in class, backend in PHP and MySQL.",
        projHack: "Team of 6, web app to facilitate communication between schools, students, graduates and companies for internships and jobs.",
        bike: "Cycling",
        basket: "Basketball",
        anime: "Anime and manga",
        skills: "Problem solving, team working, adaptability.", //da tradurre
        pctotitle: "Internship at APRA (Jesi)",
        proj3title: "Third year",
        proj4title: "Fourth year",
        proj5title: "Fifth year",
        projhacktitle: "Hackathon 2025 (fifth year)",
        diricts: "&copy; 2025 Riccardo Portfolio - All rights reserved",
        CV: "Download CV"
    }
    };


    const lang = isEnglish ? t.en : t.it;
    for (let id in lang) {
    const el = document.getElementById(id);
    if (el) el.innerText = lang[id];
    }
}
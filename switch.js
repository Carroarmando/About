let isEnglish = false;
function switchLanguage() {
    isEnglish = !isEnglish;
    const t = {
        it: {
            titolo: "Portfolio di Riccardo",
            sottotitolo: "Il mio viaggio tra studio, progetti e passioni",
            nav_materie: "Materie ▾",
            nav_info: "Informatica",
            nav_ia: "Intelligenza artificiale",
            nav_sis: "Sistemi e reti",
            nav_tpsit: "Tpsit",
            nav_ita: "Italiano",
            nav_storia: "Storia",
            nav_ing: "Inglese",
            nav_mate: "Matematica",
            nav_hobby: "Hobby",
            nav_pcto: "PCTO",
            nav_progetti: "Progetti ▾",
            nav_3: "Progetto 3° anno",
            nav_4: "Progetto 4° anno",
            nav_5: "Progetto 5° anno",
            nav_contatti: "Contatti",
            materie_titolo: "Materie",
            info_titolo: "Informatica",
            ia_titolo: "Intelligenza artificiale",
            sis_titolo: "Sistemi e reti",
            tpsit_titolo: "Tpsit",

            infotxt: "Ho imparato linguaggi per sviluppo web, HTML, CSS, PHP, JS e MySQL e per sviluppo app, C, C#, Java, Python, assembly. Ho realizzato gestionali, simulazioni web e giochi.",
            sistemitxt: "Ho imparato a configurare reti, gestirne le comunicazioni con e senza NAT, a configurare server web, DHCP, FTP, posta e DNS.",
            bike: "Andare in bici",
            basket: "Basket",
            anime: "Anime e manga",
            skills: "Problem solving, lavoro in team, adattabilità.",
            pctotitle: "PCTO presso APRA (Jesi)",
            pctotxt: "Attività di sviluppo web, test, debugging e collaborazione in team.",
            proj3title: "Terzo anno",
            proj3: "Scacchi - 2D in C#, grafica fatta con la libreria SFML. Focus sulla funzionalità.",
            proj4title: "Quarto anno",
            proj4: "Plant vs Zombie – Clone 2D sviluppato in C# con logica di spawn, gestione HP e animazioni. Focus sul game loop.",
            proj5title: "Quinto anno",
            proj5: "Gestionale scout - applicazione web sviluppata in gruppo con la classe, con backend in PHP e MySQL.",
            projhacktitle: "Hackathon 2025 (quinto anno)",
            projHack: "Team da 6, progetto di un'app web per facilitare comunicazioni tra scuole, studenti, diplomati e aziende per PCTO, tirocini e lavoro.",
            diricts: "&copy; 2025 Riccardo Portfolio - Tutti i diritti riservati"
        },
        en: {
            titolo: "Riccardo's Portfolio",
            sottotitolo: "My journey through study, projects and passions",
            nav_materie: "Subjects ▾",
            nav_info: "Computer science",
            nav_ia: "Artificial intelligence",
            nav_sis: "Systems and networks",
            nav_tpsit: "Tpsit",
            nav_ita: "Italian",
            nav_storia: "History",
            nav_ing: "English",
            nav_mate: "Mathematics",
            nav_hobby: "Hobbies",
            nav_pcto: "Internship",
            nav_progetti: "Projects ▾",
            nav_3: "Project 3rd year",
            nav_4: "Project 4th year",
            nav_5: "Project 5th year",
            nav_contatti: "Contacts",
            materie_titolo: "Subjects",
            info_titolo: "Computer science",
            ia_titolo: "Artificial intelligence",
            sis_titolo: "Systems and networks",
            tpsit_titolo: "Tpsit",

            infotxt: "I learned web dev languages like HTML, CSS, PHP, JS, MySQL and app dev ones like C, C#, Java, Python, and assembly. I built management apps, simulations, and games.",
            sistemitxt: "I learned to configure networks, manage communications with/without NAT, and set up web, DHCP, FTP, mail, and DNS servers.",
            bike: "Cycling",
            basket: "Basketball",
            anime: "Anime and manga",
            skills: "Problem solving, teamwork, adaptability.",
            pctotitle: "Internship at APRA (Jesi)",
            pctotxt: "Web development, testing, debugging, and teamwork activities.",
            proj3title: "Third year",
            proj3: "Chess - 2D in C# using SFML for graphics. Focus on functionality.",
            proj4title: "Fourth year",
            proj4: "Plant vs Zombie – 2D clone made in C# with spawn logic, HP management and animations. Focus on game loop.",
            proj5title: "Fifth year",
            proj5: "Scout manager - web app made with the class team, backend in PHP and MySQL.",
            projhacktitle: "Hackathon 2025 (fifth year)",
            projHack: "Team of 6, web app project to connect schools, students, graduates and companies for internships and jobs.",
            diricts: "&copy; 2025 Riccardo Portfolio - All rights reserved"
        }
    };

    const lang = isEnglish ? t.en : t.it;
    for (let id in lang) {
        const el = document.getElementById(id);
        if (el) el.innerHTML = lang[id];
    }
}
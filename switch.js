let isEnglish = true;
switchLanguage();

function switchLanguage() {
    isEnglish = !isEnglish;

    const t = {
        it: {
            titolo: "Portfolio di Riccardo",
            materie_titolo: "Materie Scolastiche",
            info_titolo: "Informatica",
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
            materie_titolo: "Materie scolastiche",
            info_titolo: "Informatica",
            info_text: "Ho imparato linguaggi per sviluppo web, HTML, CSS, PHP, JS e MySQL e per sviluppo app, C, C#, Java, Python, assembly. Ho realizzato gestionali, simulazioni web e giochi.",
            ia_titolo: "Intelligenza artificiale",
            ia_text: "Ho studiato concetti base di intelligenza artificiale, come machine learning e reti neurali. Ho applicato questi concetti in progetti pratici.",
            sis_titolo: "Sistemi e reti",
            sis_text: "Ho imparato a configurare reti, gestirne le comunicazioni con e senza NAT, a configurare server web, DHCP, FTP, posta e DNS.",
            tpsit_titolo: "Tpsit",
            tpsit_text: "Ho approfondito la progettazione del software passando ad android, e usando il Java ho creato delle prime semplici applicazioni.",
            ita_titolo: "Italiano",
            ita_text: "Ho sviluppato capacità di analisi e produzione testuale e studiato autori e movimenti letterari.",
            storia_titolo: "Storia",
            storia_text: "Studio di eventi storici moderni e contemporanei, principalmente guerre mondiali.",
            ing_titolo: "Inglese",
            ing_text: "Miglioramento della comprensione e produzione scritta e orale.",
            mate_titolo: "Matematica",
            mate_text: "Studio di algebra, funzioni, limiti, derivate, integrali, probabilità e statistica.",
            hobby_competenze_titolo: "Hobby e Competenze",
            hobby_titolo: "Hobby",
            hobby_text: "<li>Andare in bici</li><li>Basket</li><li>Anime e manga</li>",
            soft_skills_text: "Problem solving, lavoro in team, comunicazione, adattabilità.",
            pcto_titolo: "PCTO",
            pcto_text: "<h3>PCTO presso APRA (Jesi)</h3><p>Attività di sviluppo web, test, debugging e collaborazione in team.</p>",
            progetti_titolo: "Progetti",
            proj3_titolo: "Terzo anno",
            proj3_text: "Scacchi - 2D in C#, grafica fatta con la libreria SFML. Focus sulla funzionalità.",
            proj4_titolo: "Quarto anno",
            proj4_text: "Plant vs Zombie - Clone 2D sviluppato in C# con logica di spawn, gestione HP e animazioni. Focus sul game loop.",
            proj5_titolo: "Quinto anno",
            proj5_text: "Gestionale scout - applicazione web sviluppata in gruppo con la classe, con backend in PHP e MySQL.",
            projhack_titolo: "Hackathon 2025 (quinto anno)",
            projhack_text: "Team da 6, progetto di un'app web per agevolare e incentivare le comunicazioni tra scuole, studenti (superiori e universitari), diplomati e aziende per esperienze di PCTO, tirocinio e cercare lavoro. Backend in PHP/MySQL e frontend con HTML/CSS/JS.",
            contatti_titolo: "📞 Contatti",
            cv: "Scarica il mio CV",
            diricts: "&copy; 2025 Riccardo Portfolio - Tutti i diritti riservati"
        },
        en: {
            titolo: "Riccardo's portfolio",
            materie_titolo: "School Subjects",
            info_titolo: "Computer Science",
            nav_materie: "School Subjects ▾",
            nav_info: "Computer Science",
            nav_ia: "Artificial Intelligence",
            nav_sis: "Systems and Networks",
            nav_tpsit: "TPSIT",
            nav_ita: "Italian",
            nav_storia: "History",
            nav_ing: "English",
            nav_mate: "Mathematics",
            nav_hobby: "Hobbies",
            nav_pcto: "Internship",
            nav_progetti: "Projects ▾",
            nav_3: "3rd Year Project",
            nav_4: "4th Year Project",
            nav_5: "5th Year Project",
            nav_contatti: "Contact",
            materie_titolo: "School subjects",
            info_titolo: "Computer Science",
            info_text: "I learned web development languages like HTML, CSS, PHP, JS, MySQL and app development with C, C#, Java, Python, assembly. I made management systems, web simulations, and games.",
            ia_titolo: "Artificial Intelligence",
            ia_text: "I studied basic AI concepts like machine learning and neural networks. I applied them in practical projects.",
            sis_titolo: "Systems and Networks",
            sis_text: "I learned to configure networks, manage communication with and without NAT, set up web servers, DHCP, FTP, mail, and DNS.",
            tpsit_titolo: "TPSIT",
            tpsit_text: "I focused on software design using Android and Java to build simple apps.",
            ita_titolo: "Italian",
            ita_text: "I developed analysis and writing skills and studied authors and literary movements.",
            storia_titolo: "History",
            storia_text: "Study of modern and contemporary historical events, mainly world wars.",
            ing_titolo: "English",
            ing_text: "Improved reading, writing, speaking, and listening skills.",
            mate_titolo: "Mathematics",
            mate_text: "I studied algebra, functions, limits, derivatives, integrals, probability, and statistics.",
            hobby_competenze_titolo: "Hobbies and Skills",
            hobby_titolo: "Hobbies",
            hobby_text: "<li>Biking</li><li>Basketball</li><li>Anime and manga</li>",
            soft_skills_text: "Problem solving, teamwork, communication, adaptability.",
            pcto_titolo: "Internship",
            pcto_text: "<h3>Internship at APRA (Jesi)</h3><p>Web development, testing, debugging, and teamwork experience.</p>",
            progetti_titolo: "Projects",
            proj3_titolo: "Third year",
            proj3_text: "Chess - 2D in C#, graphics with SFML library. Focus on functionality.",
            proj4_titolo: "Fourth year",
            proj4_text: "Plant vs Zombie - 2D clone in C# with spawn logic, HP management and animations. Focus on game loop.",
            proj5_titolo: "Fifth year",
            proj5_text: "Scout manager - web app developed as a class team, backend in PHP/MySQL.",
            projhack_titolo: "Hackathon 2025 (fifth year)",
            projhack_text: "Team of 6, created a web app to connect schools, students, graduates and companies for internships and job opportunities.",
            contatti_titolo: "📞 Contact",
            cv: "Download my CV",
            diricts: "&copy; 2025 Riccardo Portfolio - All rights reserved"
        }
    };

    const lang = isEnglish ? t.en : t.it;

    for (let key in lang) {
        const el = document.getElementById(key);
        if (el) {
            if (el.tagName === "UL" || el.innerHTML.includes("<li>") || key.includes("_text")) {
                el.innerHTML = lang[key];
            } else {
                el.textContent = lang[key];
            }
        }
    }
}

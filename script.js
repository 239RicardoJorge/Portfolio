/**
 * ==========================================
 *  PORTFOLIO DATA - EDIT THIS SECTION ONLY
 * ==========================================
 */
const DATA = {
    selectedWorks: [
        {
            title: "LUPUS",
            year: "2013",
            director: "Self & Guilherme Pompeu",
            role: "Creator / Performer",
            img: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?q=80&w=1000",
            award: null,
            gridClass: "" // 1st card
        },
        {
            title: "REORG",
            year: "2015",
            director: "Rodrigo Santos",
            role: "Sound & Light Designer",
            img: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=1000",
            award: "WINNER OF FATAL 2016",
            gridClass: "" // 2nd card
        },
        {
            title: "Cinderela",
            year: "2022",
            director: "Filipe La Féria",
            role: "Light Technician",
            img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1000",
            award: "PUMPKIN AWARDS 2022",
            gridClass: "" // 3rd card
        },
        {
            title: "Os Sapatos",
            year: "2017",
            director: "Margarida Cabral & Cheila Pereira",
            role: "Light Designer",
            img: "https://images.unsplash.com/photo-1509347528160-9a9e33742cd4?q=80&w=1000",
            award: "WINNER OF FATAL 2018",
            gridClass: "" // 4th card
        },
        {
            title: "Caixa Negra",
            year: "2014",
            director: "Paula Diogo",
            role: "Performer / Videographer",
            img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800",
            award: null,
            gridClass: "" // 5th card
        },
        {
            title: "Alba",
            year: "2019",
            director: "Matilde Javier Ciria",
            role: "Producer / Stage Assistant",
            img: "https://images.unsplash.com/photo-1499364615650-ec387c13993e?q=80&w=800",
            award: null,
            gridClass: "" // 6th card
        }
    ],
    courses: [
        { year: "2014/15", img: "https://images.unsplash.com/photo-1503095392233-1789d2742167?q=80&w=600" },
        { year: "2016/17", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600" },
        { year: "2018/19", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600" }
    ],
    archive: [
        { title: "A Bela e o Monstro - O Musical", year: "2024", role: "Light Technician", director: "Filipe La Féria", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800" },
        { title: "Metáforas de um Jardim Singular", year: "2024", role: "Sound & Light Composer", director: "Sara Túbio Costa", img: "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?q=80&w=800" },
        { title: "O Rapto da Rainha Vitória", year: "2024", role: "Audiovisual & Light Designer", director: "José Maria Dias", img: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=800" },
        { title: "Actos de (Sub)servir", year: "2024", role: "Sound & Light Designer", director: "(Sub)servir", img: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=800" },
        { title: "(Re)vulvere", year: "2024", role: "Light Technician", director: "Various", img: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=800" },
        { title: "Noves Fora, Grades Dentro", year: "2024", role: "Audiovisual Technician", director: "Independent", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800" },
        { title: "Os Barrigas e os Magriços", year: "2024", role: "Audiovisual Designer", director: "José Maria Dias", img: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=800" },
        { title: "Barbo, salvar Gaia rumo a Yod", year: "2023", role: "Audiovisual Designer", director: "José Maria Dias", img: "https://images.unsplash.com/photo-1514525253440-b39345208668?q=80&w=800" },
        { title: "Um pequeno exercício de composição", year: "2023", role: "Light Technician", director: "Vera Mantero", img: "https://images.unsplash.com/photo-1551632436-cbf8dd354ca8?q=80&w=800" },
        { title: "As ascensões e quedas...", year: "2023", role: "Light Technician", director: "Bendik Giske", img: "https://images.unsplash.com/photo-1507676184212-d033912996c7?q=80&w=800" },
        { title: "A Revolta do Milho", year: "2023", role: "Light Technician", director: "Fernando José Rodrigues", img: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=800" },
        { title: "FairyTale Session #3", year: "2023", role: "Performer", director: "José Paulo Ribeiro", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800" },
        { title: "Cinderela", year: "2022", role: "Light Operator", director: "Filipe La Féria", img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=800" },
        { title: "Revista é sempre Revista", year: "2022", role: "Light Technician", director: "Filipe La Féria", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800" },
        { title: "Excerto de 4:48 Psicose", year: "2022", role: "Light Designer", director: "Elara Liz Miller", img: "https://images.unsplash.com/photo-1576267423048-15c0040fec78?q=80&w=800" },
        { title: "MIRAGEM", year: "2021", role: "Light Operator", director: "Catarina Santana", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800" },
        { title: "Na Terceira Margem...", year: "2019", role: "Actor / Designer", director: "Daniela Cruz", img: "https://images.unsplash.com/photo-1505373877841-8d43f7166778?q=80&w=800" },
        { title: "E se Repetem", year: "2019", role: "Light Operator", director: "Guilherme Pompeu", img: "https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?q=80&w=800" },
        { title: "Marianische Antiphonen Prolog", year: "2019", role: "Producer / Scenographer", director: "Gabriel", img: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=800" },
        { title: "Alba. E nela é que espelhou o céu", year: "2019", role: "Producer", director: "Matilde Javier Ciria", img: "https://images.unsplash.com/photo-1499364615650-ec387c13993e?q=80&w=800" },
        { title: "SIMBIOX", year: "2018", role: "Actor", director: "Paula Garcia", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800" },
        { title: "DUC (Mascot)", year: "2018", role: "Actor (Mascot)", director: "EUG2018", img: "https://images.unsplash.com/photo-1509347528160-9a9e33742cd4?q=80&w=800" },
        { title: "Curso de Iniciação ao Teatro", year: "2018", role: "Producer", director: "CITAC", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800" },
        { title: "Os Sapatos", year: "2017", role: "Actor / Light Designer", director: "FATAL Winner", img: "https://images.unsplash.com/photo-1509347528160-9a9e33742cd4?q=80&w=800" },
        { title: "Das Covsas - Pequeno Tratado", year: "2017", role: "Sound Operator", director: "Leonor Barata", img: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=800" },
        { title: "IDestillação", year: "2017", role: "Performer", director: "Collective", img: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=800" },
        { title: "Isto Não É Para Gente Feliz", year: "2017", role: "Actor", director: "Nuno Preto", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800" },
        { title: "ORIENTAL", year: "2016", role: "Light Operator", director: "José Geraldo", img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800" },
        { title: "Coisas", year: "2016", role: "Director", director: "Coisas", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800" },
        { title: "REORG", year: "2015", role: "Actor / Sound & Light", director: "Rodrigo Santos", img: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=800" },
        { title: "Vida. Manchas. Amor. Morte.", year: "2015", role: "Actor", director: "Sérgio Pereira", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800" },
        { title: "CUBO", year: "2014", role: "Producer / Operator", director: "Paula Diogo", img: "https://images.unsplash.com/photo-1514924013411-cbf25faa35ad?q=80&w=800" },
        { title: "Caixa Negra", year: "2014", role: "Performer / Videographer", director: "Paula Diogo", img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800" },
        { title: "Curso de Iniciação ao Teatro", year: "2014", role: "Producer", director: "CITAC", img: "https://images.unsplash.com/photo-1503095392233-1789d2742167?q=80&w=800" },
        { title: "KABARETT", year: "2013", role: "Actor / Assistant", director: "Hugo Gama", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800" },
        { title: "Boîte No Ar", year: "2013", role: "Voice Actor", director: "José Geraldo", img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800" },
        { title: "O que é um limite?", year: "2013", role: "Performer", director: "Collective", img: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=800" },
        { title: "AQUÁRIO", year: "2013", role: "Actor / Designer", director: "Catarina Lacerda", img: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?q=80&w=1000" },
        { title: "LUPUS", year: "2013", role: "Creator / Performer", director: "Self", img: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?q=80&w=1000" }
    ]
};

/**
 * ==========================================
 *  LOGIC - DO NOT EDIT BELOW THIS LINE
 * ==========================================
 */

// 1. Render Function
document.addEventListener("DOMContentLoaded", () => {

    // A. Render Selected Works
    const selectedContainer = document.getElementById('selected-container');
    DATA.selectedWorks.forEach(work => {
        const card = document.createElement('div');
        card.className = "card";

        const awardHTML = work.award ? `<div class="award"><span class="award-label">★ ${work.award}</span></div>` : '';

        card.innerHTML = `
           <div class="card-image blur-img">
             <img src="${work.img}" alt="${work.title}">
           </div>
           <div class="card-info">
             <h3>${work.title} <span class="year">(${work.year})</span></h3>
             ${awardHTML}
             <p class="director">Directed by ${work.director}</p>
             <p class="role">${work.role}</p>
           </div>
        `;
        selectedContainer.appendChild(card);
    });

    // B. Render Courses
    const coursesContainer = document.getElementById('courses-container');
    DATA.courses.forEach(course => {
        const div = document.createElement('div');
        div.className = "course-card";
        div.innerHTML = `
           <div class="course-img blur-img">
             <img src="${course.img}" alt="CITAC">
           </div>
           <span class="course-year">${course.year}</span>
        `;
        coursesContainer.appendChild(div);
    });

    // C. Render Archive List
    const archiveContainer = document.getElementById('archive-container');
    DATA.archive.forEach(item => {
        const row = document.createElement('div');
        row.className = "row-item";
        row.setAttribute('data-img', item.img);
        row.setAttribute('data-role', item.role);
        row.setAttribute('data-director', item.director);
        row.textContent = `${item.title} (${item.year})`;
        archiveContainer.appendChild(row);
    });

    // 2. Initialize Archive Hover Logic (After rendering)
    initArchiveHover();
});


function initArchiveHover() {
    const rows = document.querySelectorAll('.row-item');
    const placeholder = document.getElementById('preview-placeholder');
    const content = document.getElementById('preview-content');
    const pImg = document.getElementById('preview-img');
    const pDirector = document.getElementById('preview-director');
    const pRole = document.getElementById('preview-role');

    rows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            const img = row.getAttribute('data-img');
            const role = row.getAttribute('data-role');
            const director = row.getAttribute('data-director');

            if (img) {
                placeholder.style.display = 'none';
                content.classList.remove('hidden');

                pImg.src = img;
                pDirector.textContent = director.includes('Directed') ? director : `Directed by ${director}`;
                pRole.textContent = role;
            }
        });
    });
}

// 3. Navbar Scroll Effect
const nav = document.getElementById('main-nav');
const viewport = document.getElementById('app-viewport');

// Listen to the viewport scroll instead of window
viewport.addEventListener('scroll', () => {
    if (viewport.scrollTop > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 4. Clipboard Functionality
function copyToClipboard(text, btnElement) {
    if (!navigator.clipboard) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            const successful = document.execCommand('copy');
            if (successful) showFeedback(btnElement);
        } catch (err) {
            console.error('Fallback error', err);
        }
        document.body.removeChild(textArea);
        return;
    }

    navigator.clipboard.writeText(text).then(() => {
        showFeedback(btnElement);
    }, (err) => {
        console.error('Async error: ', err);
    });
}

function showFeedback(btnElement) {
    const feedback = btnElement.querySelector('.copy-feedback');
    if (feedback) {
        btnElement.classList.add('show-feedback');
        setTimeout(() => {
            btnElement.classList.remove('show-feedback');
        }, 2000);
    }
}

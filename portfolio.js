const portfolioData = {
    title: "Student Portfolio",
    home: {
        title: "Hello, I'm Jarryl Seth Imperial",
        subtitle: "A 1st Year BSIT Student in Holy Cross of Davao College",
    },
    about: {
        text: "I am a student of Holy Cross of Davao College, currently learning the fundamentals of programming and web development. I am a fast learner and eager to take on new challenges in the tech world. My goal is to become a proficient developer and create meaningful projects that can make a difference."
    },
    journey: [
        {
            year: "Prelims",
            title: "\"First Steps in BSIT\"",
            description: "This is where my BSIT journey began. I was mostly prepared to what's to come, because of my confidence in my advanced studies. As I went through the lessons given to us by our professor, I was confident in my abilities to not get left behind or overwhelmed by other students who are better at coding than I am. During this time, I began to learn HTML and CSS all on my own with the support of my eagerness to learn. My friends gave me the motivation to strive for more knowledge because their praises means alot to me and makes me happy."
        },
        {
            year: "Prelims",
            title: "\"A High Wall\"",
            description: "As my coding journey began it's momentum, I was faced with a high wall that I needed to climb over. This wall was my major downfall towards my goal of being ahead of my classmates. This wall was accademic burnout. 1 Week before the exam I was studying minor subjects instead of coding becuase I was not planning to fail any subjects. However, this lead me to getting sick and was unable to gather new knowledge in coding nor in other minor subjects resulting in me failing one of my minor subjects Rizal. During my encounterment of the High wall, I was shocked to know that some of my classmates were much more knowledgable in coding than me because they have practiced during the time that I had an accademic burnout. This lead to me being demotivated in coding and took a break from coding and started playing games."
        },
        {
            year: "Prelims",
            title: "\"Motivation\"",
            description: "After my encounterment with the high wall, I was demotivated to continue my journey in coding. I was planning to just give up and focus on my minor subjects instead of my major subjects. However, my own ego motivated me to continue my journey in coding. It told me that I can do it and that I should not give up on my dreams. This lead me to start coding again and learning new things. I started to practice coding more and more and started to get better at it. I also started to ask my classmates for help and they were more than willing to help me. This lead me to be more confident in my coding skills and started to enjoy coding again."
        }
        
    ],
    projects: [
        {
            name: "Flappy Bird Game",
            description: "A simple Flappy Bird game. The game is played by pressing the spacebar to make the bird fly and avoid the pipes. The game keeps track of the score and displays the best score at the end of the game.",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://eloof.github.io/FlappyBird/"
        },
        {
            name: "Simple Rock Paper Scissors Game",
            description: "A simple rock paper scissors game that can be played against the computer. The game keeps track of the score and displays the winner at the end of the game.",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://eloof.github.io/RPS-Game/"
        },
        {
            name: "Meme portal",
            description: "A simple web page that displays memes. The memes are about my college friends funny moments that happened during our first year on BSIT",
            tech: ["HTML", "CSS"],
            github: "https://eloof.github.io/Funny-moments/"
        }

    ],
    contact: {
        email: "imperialjarryl@gmail.com",
        facebook: "https://www.facebook.com/jarrylseth.imperial.14?rdid=Ujl7GDAnuPtkPnZf#"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, starting to populate content...');
    function populateContent() {
        const portfolioTitle = document.getElementById('portfolio-title');
        if (portfolioTitle) {
            portfolioTitle.textContent = portfolioData.title;
            console.log('Portfolio title set to:', portfolioData.title);
        } else {
            console.error('Element #portfolio-title not found');
        }

        const homeTitle = document.getElementById('home-title');
        const homeSubtitle = document.getElementById('home-subtitle');
        if (homeTitle) {
            homeTitle.textContent = portfolioData.home.title;
            console.log('Home title set to:', portfolioData.home.title);
        } else {
            console.error('Element #home-title not found');
        }
        if (homeSubtitle) {
            homeSubtitle.textContent = portfolioData.home.subtitle;
            console.log('Home subtitle set to:', portfolioData.home.subtitle);
        } else {
            console.error('Element #home-subtitle not found');
        }

        const aboutText = document.getElementById('about-text');
        if (aboutText) {
            aboutText.textContent = portfolioData.about.text;
            console.log('About text set to:', portfolioData.about.text);
        } else {
            console.error('Element #about-text not found');
        }

        const journeyContainer = document.getElementById('journey-content');
        if (journeyContainer) {
            journeyContainer.innerHTML = ''; 
            console.log('Populating journey section with', portfolioData.journey.length, 'items');
            portfolioData.journey.forEach(item => {
                const html = `
                    <div class="hologram-card p-6 text-center">
                        <h3 class="text-xl font-bold text-cyan-400">${item.year}</h3>
                        <h4 class="text-lg font-semibold mt-2">${item.title}</h4>
                        <p class="mt-2 text-gray-300">${item.description}</p>
                    </div>
                `;
                journeyContainer.innerHTML += html;
            });
            console.log('Journey section populated successfully');
        } else {
            console.error('Element #journey-content not found');
        }

        const projectsGrid = document.getElementById('projects-grid');
        if (projectsGrid) {
            projectsGrid.innerHTML = '';
            console.log('Populating projects section with', portfolioData.projects.length, 'projects');
            portfolioData.projects.forEach(project => {
                const techBadges = project.tech.map(tech => `
                    <span class="inline-block bg-gray-700 text-cyan-300 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2 mb-2">${tech}</span>
                `).join('');

                const cardContent = `
                    <div class="hologram-card p-6 flex flex-col items-start text-left">
                        <h3 class="text-lg font-bold text-cyan-400">${project.name}</h3>
                        <p class="mt-2 text-sm text-gray-300 flex-grow">${project.description}</p>
                        <div class="mt-4 flex flex-wrap">${techBadges}</div>
                    </div>
                `;

                const html = project.github ? `<a href="${project.github}" target="_blank" class="block">${cardContent}</a>` : cardContent;
                projectsGrid.innerHTML += html;
            });
            console.log('Projects section populated successfully');
        } else {
            console.error('Element #projects-grid not found');
        }

        const emailLink = document.getElementById('email-link');
        const linkedinLink = document.getElementById('linkedin-link');
        if (emailLink) {
            emailLink.href = `mailto:${portfolioData.contact.email}`;
            console.log('Email link set to:', emailLink.href);
        } else {
            console.error('Element #email-link not found');
        }
        if (linkedinLink) {
            linkedinLink.href = portfolioData.contact.linkedin;
            console.log('LinkedIn link set to:', linkedinLink.href);
        } else {
            console.error('Element #linkedin-link not found');
        }
    }

    populateContent();
    console.log('Content population completed.');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.href.includes(current)) {
                link.classList.add('active');
            }
        });
    });
});

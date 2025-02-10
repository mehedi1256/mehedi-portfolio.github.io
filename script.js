// Project data
const projects = [
    {
        title: "SOF Portal",
        description: "A comprehensive education management system built with Laravel",
        image: "assets/images/sof-portal.png",
        technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
        link: "https://portal.sof.edu.bd/"
    },
    {
        title: "ClassTune LMS",
        description: "Learning Management System for educational institutions",
        image: "assets/images/classtune-lms.png",
        technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
        link: "https://bd.classtune.com/login"
    },
    {
        title: "SOF Website",
        description: "Official website for School of Future built with CodeIgniter",
        image: "assets/images/sof-website.png",
        technologies: ["CodeIgniter", "PHP", "MySQL", "jQuery"],
        link: "https://sof.edu.bd/"
    },
    {
        title: "ClassTune Payroll",
        description: "Payroll management system for educational institutions",
        image: "assets/images/classtune-payroll.png",
        technologies: ["CodeIgniter", "PHP", "MySQL", "JavaScript"],
        link: "https://payroll.classtune.com/"
    },
    {
        title: "NDC Army Portal",
        description: "Specialized portal for Bangladesh Army",
        image: "assets/images/ndcbde-army.png",
        technologies: ["CodeIgniter", "PHP", "MySQL", "Bootstrap"],
        link: "https://ndcbde4.org/main/login"
    },
    {
        title: "ClassPay",
        description: "Digital payment solution for educational institutions",
        image: "assets/images/classpay.png",
        technologies: ["CodeIgniter", "PHP", "MySQL", "Payment Gateway"],
        link: "https://classpay.com.bd/"
    }
];

// WordPress Project data
const wordpressProjects = [
    {
        title: "SAGC",
        description: "Savar Army Golf Club Website",
        image: "assets/images/sagc.png",
        technologies: ["WordPress", "PHP", "MySQL", "Custom Theme"],
        link: "https://sagc.edu.bd"
    },
    {
        title: "NASCD",
        description: "National Army School College Dhaka",
        image: "assets/images/nascd.png",
        technologies: ["WordPress", "PHP", "MySQL", "Custom Theme"],
        link: "https://nascd.edu.bd"
    },
    {
        title: "BNDEWHS",
        description: "BN DEW High School Website",
        image: "assets/images/bndewhs.png",
        technologies: ["WordPress", "PHP", "MySQL", "Custom Theme"],
        link: "https://bndewhs.edu.bd"
    },
    {
        title: "ESS",
        description: "English Speaking School",
        image: "assets/images/ess.png",
        technologies: ["WordPress", "PHP", "MySQL", "Custom Theme"],
        link: "https://ess.edu.bd"
    },
    {
        title: "Green Gems",
        description: "Green Gems School Website",
        image: "assets/images/greengems.png",
        technologies: ["WordPress", "PHP", "MySQL", "Custom Theme"],
        link: "https://greengems.edu.bd"
    },
    {
        title: "BAGHC",
        description: "Bangladesh Army Golf Club Hostel",
        image: "assets/images/baghc.png",
        technologies: ["WordPress", "PHP", "MySQL", "Custom Theme"],
        link: "https://baghc.edu.bd"
    }
];

// Populate projects
function populateProjects() {
    const projectGrid = document.querySelector('.project-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join(' ')}
                </div>
                <a href="${project.link}" target="_blank">View Project</a>
            </div>
        `;
        
        projectGrid.appendChild(projectCard);
    });
}

// Function to populate WordPress projects
function populateWordPressProjects() {
    const projectGrid = document.querySelector('.wordpress-project-grid');
    
    wordpressProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join(' ')}
                </div>
                <a href="${project.link}" target="_blank">View Project</a>
            </div>
        `;
        
        projectGrid.appendChild(projectCard);
    });
}

// Mobile navigation
function setupMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth scrolling for navigation links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Form handling
function setupContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Message sent successfully!');
        form.reset();
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
    populateWordPressProjects();
    setupMobileNav();
    setupSmoothScroll();
    setupContactForm();
}); 
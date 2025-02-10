// Project data
const projects = [
    {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce platform built with React and Node.js",
        image: "https://source.unsplash.com/random/800x600/?ecommerce",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        link: "#"
    },
    {
        title: "Task Management App",
        description: "A productivity app for managing daily tasks and projects",
        image: "https://source.unsplash.com/random/800x600/?productivity",
        technologies: ["Vue.js", "Firebase", "CSS3"],
        link: "#"
    },
    {
        title: "Weather Dashboard",
        description: "Real-time weather application using weather API",
        image: "https://source.unsplash.com/random/800x600/?weather",
        technologies: ["JavaScript", "API", "Bootstrap"],
        link: "#"
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
    setupMobileNav();
    setupSmoothScroll();
    setupContactForm();
}); 
/**
 * salonX - Main JavaScript
 */

(function() {
    'use strict';

    // ==========================================================================
    // DOM Ready
    // ==========================================================================
    document.addEventListener('DOMContentLoaded', init);

    function init() {
        renderFeatures();
        renderProperties();
        renderProcess();
        initScrollProgress();
        initHeader();
        initNavToggle();
        initRevealAnimations();
        initCounterAnimations();
        initDiagnostic();
        initPropertyFilters();
        initContactForm();
        initLanguageSwitch();
        initSmoothScroll();
        initScrollToTop();
        setCurrentYear();
    }

    // ==========================================================================
    // Render Functions
    // ==========================================================================
    
    function renderFeatures() {
        const grid = document.getElementById('featuresGrid');
        if (!grid || !SALONX_DATA.features) return;

        grid.innerHTML = SALONX_DATA.features.map(feature => `
            <div class="feature-card reveal">
                <div class="feature-icon">${feature.icon}</div>
                <h3 class="feature-title">${feature.title}</h3>
                <p class="feature-desc">${feature.desc}</p>
            </div>
        `).join('');
    }

    function renderProperties() {
        const grid = document.getElementById('propertiesGrid');
        if (!grid || !SALONX_DATA.properties) return;

        grid.innerHTML = SALONX_DATA.properties.map(property => `
            <div class="property-card reveal ${property.sold ? 'sold' : ''}" data-type="${property.type}">
                ${property.sold ? '<div class="sold-ribbon">SOLD</div>' : ''}
                <div class="property-image">
                    <img src="${property.image}" alt="${property.name}" loading="lazy">
                    <span class="property-tag ${property.type}">${property.typeLabel}</span>
                </div>
                <div class="property-content">
                    <div class="property-area">${property.area}</div>
                    <h3 class="property-name">${property.name}</h3>
                    <div class="property-details">
                        <span>${property.size}</span>
                        <span>${property.floor}</span>
                        <span>${property.access}</span>
                    </div>
                    <div class="property-price">
                        <span class="property-price-label">賃料</span>
                        <span class="property-price-value">¥${property.price.toLocaleString()}/月</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    function renderProcess() {
        const list = document.getElementById('processList');
        if (!list || !SALONX_DATA.process) return;

        list.innerHTML = SALONX_DATA.process.map(step => `
            <div class="process-item">
                <div class="process-number">${step.number}</div>
                <div class="process-content">
                    <h3 class="process-title">${step.title}</h3>
                    <p class="process-desc">${step.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // ==========================================================================
    // Scroll Progress
    // ==========================================================================
    
    function initScrollProgress() {
        const progressBar = document.getElementById('scrollProgress');
        if (!progressBar) return;

        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = progress + '%';
        });
    }

    // ==========================================================================
    // Header
    // ==========================================================================
    
    function initHeader() {
        const header = document.getElementById('header');
        if (!header) return;

        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // ==========================================================================
    // Mobile Navigation
    // ==========================================================================
    
    function initNavToggle() {
        const toggle = document.getElementById('navToggle');
        const menu = document.getElementById('navMenu');
        if (!toggle || !menu) return;

        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        });

        // Close menu on link click
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                toggle.classList.remove('active');
            });
        });
    }

    // ==========================================================================
    // Reveal Animations
    // ==========================================================================
    
    function initRevealAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }

    // ==========================================================================
    // Counter Animations
    // ==========================================================================
    
    function initCounterAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
    }

    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 1200;
        const start = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(target * easeOut);
            
            element.textContent = current.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target.toLocaleString();
            }
        }

        requestAnimationFrame(update);
    }

    // ==========================================================================
    // Diagnostic Calculator
    // ==========================================================================
    
    function initDiagnostic() {
        const clientsInput = document.getElementById('clients');
        const priceInput = document.getElementById('price');
        
        if (!clientsInput || !priceInput) return;

        const calculate = () => {
            const clients = parseInt(clientsInput.value) || 0;
            const price = parseInt(priceInput.value) || 0;
            const config = SALONX_DATA.config;
            
            const revenue = clients * price;
            const rent = Math.round(revenue * config.rentRatio);
            const capital = rent * config.capitalMultiplier;

            updateResult('revenue', revenue);
            updateResult('rent', rent);
            updateResult('capital', capital);
        };

        function updateResult(id, value) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = '¥' + value.toLocaleString();
            }
        }

        clientsInput.addEventListener('input', calculate);
        priceInput.addEventListener('input', calculate);
    }

    // ==========================================================================
    // Property Filters
    // ==========================================================================
    
    function initPropertyFilters() {
        const buttons = document.querySelectorAll('.filter-btn');
        const cards = document.querySelectorAll('.property-card');

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Filter cards
                const filter = btn.getAttribute('data-filter');
                cards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-type') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // ==========================================================================
    // Contact Form
    // ==========================================================================
    
    function initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            // For Netlify Forms, let the form submit naturally
            // For custom handling, prevent default and add your logic
            
            // Optional: Add loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = '送信中...';
            }
        });
    }

    // ==========================================================================
    // Language Switch
    // ==========================================================================
    
    function initLanguageSwitch() {
        const buttons = document.querySelectorAll('.lang-switch button');

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const lang = btn.getAttribute('data-lang');
                // TODO: Implement language switching logic
                console.log('Language switched to:', lang);
            });
        });
    }

    // ==========================================================================
    // Smooth Scroll
    // ==========================================================================
    
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('header').offsetHeight + 50;
                    window.scrollTo({
                        top: target.offsetTop - headerHeight,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ==========================================================================
    // Scroll to Top
    // ==========================================================================
    
    function initScrollToTop() {
        const btn = document.getElementById('scrollTop');
        if (!btn) return;

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ==========================================================================
    // Utilities
    // ==========================================================================
    
    function setCurrentYear() {
        const yearElement = document.getElementById('currentYear');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }

})();

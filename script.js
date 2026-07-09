(() => {
    'use strict';

    // Theme
    const btn = document.getElementById('themeBtn');
    const root = document.documentElement;
    const saved = localStorage.getItem('portfolio-theme') || 'dark';
    root.setAttribute('data-theme', saved);

    btn.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('portfolio-theme', next);
    });

    // Reveal
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('on');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.rv').forEach(el => obs.observe(el));

    // Stagger grids
    document.querySelectorAll('.project-grid, .tools-grid').forEach(g => {
        const gObs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    g.querySelectorAll('.rv').forEach((c, i) =>
                        setTimeout(() => c.classList.add('on'), i * 80)
                    );
                    gObs.unobserve(g);
                }
            });
        }, { threshold: 0.1 });
        gObs.observe(g);
    });

    // Mobile menu
    const burger = document.getElementById('burger');
    const mob = document.getElementById('mobMenu');
    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        mob.classList.toggle('open');
        document.body.style.overflow = mob.classList.contains('open') ? 'hidden' : '';
    });
    mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        burger.classList.remove('open');
        mob.classList.remove('open');
        document.body.style.overflow = '';
    }));

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const t = document.querySelector(a.getAttribute('href'));
            if (t) window.scrollTo({ top: t.offsetTop - 72, behavior: 'smooth' });
        });
    });

    // Active nav link
    const links = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');
    const secObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                links.forEach(l => {
                    l.style.color = l.getAttribute('href') === `#${id}` ? 'var(--fg)' : '';
                });
            }
        });
    }, { threshold: 0.3, rootMargin: '-72px 0px -50% 0px' });
    sections.forEach(s => secObs.observe(s));
})();

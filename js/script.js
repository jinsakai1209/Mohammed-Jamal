(() => {
    'use strict';

    // Theme
    const root = document.documentElement;
    const btn = document.getElementById('themeBtn');
    root.setAttribute('data-theme', localStorage.getItem('portfolio-theme') || 'dark');

    if (btn) {
        btn.addEventListener('click', () => {
            const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            root.setAttribute('data-theme', next);
            localStorage.setItem('portfolio-theme', next);
        });
    }

    // Reveal on scroll
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('on');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.rv').forEach(el => obs.observe(el));

    // Stagger children of index-style lists
    document.querySelectorAll('.work-index, .blog-list, .tools-grid, .approach-steps, .stat-row').forEach(group => {
        const kids = group.querySelectorAll('.rv');
        if (!kids.length) return;
        const gObs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    kids.forEach((c, i) => setTimeout(() => c.classList.add('on'), i * 90));
                    gObs.unobserve(group);
                }
            });
        }, { threshold: 0.1 });
        gObs.observe(group);
    });

    // Mobile menu
    const burger = document.getElementById('burger');
    const mob = document.getElementById('mobMenu');
    if (burger && mob) {
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
    }

    // Nav collapse on scroll
    const navEl = document.querySelector('nav');
    if (navEl) {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                navEl.classList.toggle('nav-collapsed', window.scrollY > 40);
                ticking = false;
            });
        }, { passive: true });
    }

    // Smooth scroll for in-page anchors
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        const href = a.getAttribute('href');
        if (href === '#') return;
        a.addEventListener('click', e => {
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        });
    });

    // Active nav link
    const links = document.querySelectorAll('.nav-links a[href^="#"]');
    if (links.length) {
        const sections = document.querySelectorAll('section[id]');
        const visible = new Set();
        const secObs = new IntersectionObserver(entries => {
            entries.forEach(e => e.isIntersecting ? visible.add(e.target) : visible.delete(e.target));
            // Highest section still in view wins, so the order never depends on callback order.
            const top = [...visible].sort((a, b) => a.offsetTop - b.offsetTop)[0];
            links.forEach(l => l.classList.toggle(
                'is-active', !!top && l.getAttribute('href') === `#${top.id}`
            ));
        }, { threshold: 0.25, rootMargin: '-80px 0px -50% 0px' });
        sections.forEach(s => secObs.observe(s));
    }
})();

/* ============================================
   Rise Up Kings - Landing Page Scripts
   ============================================ */

(function () {
    'use strict';

    /* ------------------------------------------
       Smooth scroll for CTA buttons
       ------------------------------------------ */
    document.querySelectorAll('a[href="#apply"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.getElementById('apply');
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* ------------------------------------------
       Counter animation for stat bar numbers
       ------------------------------------------ */
    var statNumbers = document.querySelectorAll('.stat-number[data-target]');
    var animated = false;

    function formatNumber(n) {
        if (n >= 1000) {
            return n.toLocaleString();
        }
        return n.toString();
    }

    function animateCounters() {
        statNumbers.forEach(function (el) {
            var target = parseInt(el.getAttribute('data-target'), 10);
            var isDollar = el.classList.contains('stat-dollar');
            var duration = 2000;
            var startTime = null;

            function easeOutCubic(t) {
                return 1 - Math.pow(1 - t, 3);
            }

            function step(timestamp) {
                if (!startTime) startTime = timestamp;
                var progress = Math.min((timestamp - startTime) / duration, 1);
                var easedProgress = easeOutCubic(progress);
                var current = Math.floor(easedProgress * target);

                if (isDollar) {
                    el.textContent = '$' + formatNumber(current);
                } else {
                    el.textContent = formatNumber(current);
                }

                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    if (isDollar) {
                        el.textContent = '$' + formatNumber(target);
                    } else {
                        el.textContent = formatNumber(target);
                    }
                }
            }

            requestAnimationFrame(step);
        });
    }

    /* ------------------------------------------
       Intersection Observer for stat bar
       ------------------------------------------ */
    if (statNumbers.length > 0 && 'IntersectionObserver' in window) {
        var statBar = document.querySelector('.stat-bar');
        if (statBar) {
            var observer = new IntersectionObserver(
                function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting && !animated) {
                            animated = true;
                            animateCounters();
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.3 }
            );
            observer.observe(statBar);
        }
    } else if (statNumbers.length > 0) {
        // Fallback: just set the numbers directly
        statNumbers.forEach(function (el) {
            var target = parseInt(el.getAttribute('data-target'), 10);
            var isDollar = el.classList.contains('stat-dollar');
            el.textContent = isDollar ? '$' + formatNumber(target) : formatNumber(target);
        });
    }
})();

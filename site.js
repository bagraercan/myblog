// Highlights the section you are reading in the section nav (.toc).
// The page works without it: every section is a plain #anchor.
(function () {
    var links = document.querySelectorAll('.toc a[href^="#"]');
    if (!links.length || !('IntersectionObserver' in window)) return;
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            links.forEach(function (a) { a.classList.remove('active'); });
            var link = byId[entry.target.id];
            if (link) {
                link.classList.add('active');
                link.parentElement.scrollLeft = link.offsetLeft - 16;
            }
        });
    }, { rootMargin: '-140px 0px -60% 0px' });
    Object.keys(byId).forEach(function (id) {
        var section = document.getElementById(id);
        if (section) observer.observe(section);
    });
})();

(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.catnav a'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);
  var track = document.querySelector('.catnav-track');
  var toTop = document.getElementById('toTop');
  var current = null;

  function setActive(id) {
    if (id === current) return;
    current = id;
    links.forEach(function (a) {
      var on = a.getAttribute('href') === '#' + id;
      a.classList.toggle('is-active', on);
      if (on && track) {
        var left = a.offsetLeft - track.clientWidth / 2 + a.clientWidth / 2;
        track.scrollTo({ left: Math.max(left, 0), behavior: 'smooth' });
      }
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    var visible = {};
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
        for (var i = 0; i < sections.length; i++) {
          if (visible[sections[i].id]) { setActive(sections[i].id); break; }
        }
      },
      { rootMargin: '-140px 0px -65% 0px', threshold: 0 }
    );
    sections.forEach(function (s) { io.observe(s); });
  }

  function onScroll() {
    if (!toTop) return;
    toTop.classList.toggle('is-visible', window.scrollY > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();

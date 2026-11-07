(function () {
  // Gel electrophoresis hero: bands run down once on page load.
  var gel = document.getElementById('gel');
  if (gel) {
    var lanes = 7, ladder = [14, 26, 38, 50, 62, 74, 86];
    var seed = 7, rnd = function () { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    for (var i = 0; i < lanes; i++) {
      var lane = document.createElement('div');
      lane.className = 'lane' + (i === 0 ? ' ladder' : '');
      var positions = i === 0 ? ladder : [20 + rnd() * 20, 45 + rnd() * 20, 70 + rnd() * 20].slice(0, 1 + Math.floor(rnd() * 3));
      positions.forEach(function (y) {
        var b = document.createElement('span');
        b.className = 'band';
        b.style.setProperty('--y', y.toFixed(1) + '%');
        lane.appendChild(b);
      });
      gel.appendChild(lane);
    }
    gel.classList.add('pre');
    requestAnimationFrame(function () { requestAnimationFrame(function () { gel.classList.remove('pre'); }); });
  }
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

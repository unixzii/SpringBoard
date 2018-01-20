define(function () {
  return (function (from, to, duration, cb) {
    const delta = to - from;
    const startTime = +Date.now();
    function _tick() {
      const elapsedTime = (+Date.now()) - startTime;
      if (elapsedTime >= duration) {
        cb(to);
        return;
      }
      const progress = elapsedTime / duration;
      cb(from + delta * progress);
      requestAnimationFrame(_tick);
    }
    _tick();
  });
});
(function () {
    var metaEl = document.createElement('meta');
    var scale = devicePixelRatio;
    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute('content', 'initial-scale=' + (1 / scale) + ', maximum-scale=' + (1 / scale) + ', minimum-scale=' + (1 / scale) + ', user-scalable=no');
    document.documentElement.firstElementChild.appendChild(metaEl);
})();
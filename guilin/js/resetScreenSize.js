function resetScreenSize() {

    function init() {
        var _el = document.getElementById('app'),
            w = parseInt(_el.offsetWidth),
            h = parseInt(_el.offsetHeight),
            wScale = window.innerWidth / w,
            hScale = window.innerHeight / h;
        console.log(window.innerHeight, window.innerWidth)

        _el.style.transform = 'scaleX(' + wScale + ') scaleY(' + hScale + ')'
        _el.style.marginLeft = -((w - window.innerWidth) / 2) + 'px'
        _el.style.marginTop = -((h - window.innerHeight) / 2) + 'px'
    }

    var lazyFun;

    window.onresize = function() {
        clearTimeout(lazyFun);
        lazyFun = setTimeout(function() {
            init()
        }, 100)
    }
    init()
}
$(function(){
    $('#app').show();
    resetScreenSize()
})


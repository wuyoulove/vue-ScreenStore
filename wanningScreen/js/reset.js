function resetScreenSize (dw, dh) {
  function init() {
    var _el = document.getElementById('app');
    var hScale = window.innerHeight / (dh || 768);
    var wScale = window.innerWidth  / ( dw || 1366 );
    console.log(window.innerHeight, window.innerWidth)
    _el.style.transform = 'scaleX(' + wScale +') scaleY(' + hScale + ')'
  }
  var lazyFun;
  window.onresize =function(){
    clearTimeout(lazyFun);
    lazyFun = setTimeout(function() {
      init()
    }, 600)
  }
  init()
}

// export default resetScreenSize;
/* jshint esnext: true, browser: true, easy: true */
(function(window) {
'use strict';
//screen.mozLockOrientation("landscape");
// Prefetch it to cache, then change location.
var iframe = document.createElement('iframe');
iframe.setAttribute('src', 'http://getpocket.com/login');
iframe.classList.add('hidden');
iframe.addEventListener('load', function() {
  document.location = 'http://getpocket.com/login';
});
document.body.appendChild(iframe);
})(this)

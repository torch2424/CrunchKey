'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

console.log('\'Allo \'Allo! Event Page for Browser Action');
//# sourceMappingURL=background.js.map

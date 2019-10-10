const consoleEl = document.querySelector('#console')

if (navigator.serviceWorker) {
  consoleEl.innerText = 'Supported serviceWorker!'
  navigator.serviceWorker.register('sw.js')
  .then(function(registration) {
    console.log('Registered events at scope: ', registration.scope);
  });
} else {
  consoleEl.innerText = 'serviceWorker NOT supported!'
}

fetch('./data.json')

const statusEl = document.querySelector('#network-status')

window.addEventListener('online', () => {
  statusEl.classList = ['is-online']
  statusEl.innerText = 'Online'
});
window.addEventListener('offline', () => {
  statusEl.classList = ['is-offline']
  statusEl.innerText = 'Offline'
});
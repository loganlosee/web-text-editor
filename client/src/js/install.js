const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// install pwa
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  showInstallButton(); 
});

// event handler for the install
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // show prompt
    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    deferredPrompt = null;
    hideInstallButton();
  }
});

window.addEventListener('appinstalled', (event) => {
  console.log('App installed');
});

function showInstallButton() {
  butInstall.style.display = 'block';
}

function hideInstallButton() {
  butInstall.style.display = 'none';
}
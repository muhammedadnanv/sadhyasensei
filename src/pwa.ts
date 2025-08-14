import { Workbox } from 'workbox-window';

if ('serviceWorker' in navigator) {
  const wb = new Workbox('/sw.js');

  wb.addEventListener('waiting', () => {
    if (confirm('New content available, reload?')) {
      wb.messageSkipWaiting();
    }
  });

  wb.addEventListener('controlling', () => {
    console.log('App ready to work offline');
  });

  wb.register();
}
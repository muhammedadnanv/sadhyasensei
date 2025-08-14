import { registerSW } from 'workbox-window';

if ('serviceWorker' in navigator) {
  const wb = registerSW('/sw.js', {
    onNeedRefresh() {
      if (confirm('New content available, reload?')) {
        wb.messageSkipWaiting();
      }
    },
    onOfflineReady() {
      console.log('App ready to work offline');
    },
  });
}
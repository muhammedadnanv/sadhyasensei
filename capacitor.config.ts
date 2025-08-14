import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.354613294e854f2abe3621ad4cb71b8f',
  appName: 'sadhya-sensei-planner',
  webDir: 'dist',
  server: {
    url: 'https://35461329-4e85-4f2a-be36-21ad4cb71b8f.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#FEF3C7',
      showSpinner: false
    }
  }
};

export default config;
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'identity.dictionary',
  appName: 'identity-dictionary',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;

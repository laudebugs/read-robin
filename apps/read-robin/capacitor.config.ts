import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'read-robin',
  webDir: '../../dist/apps/read-robin',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;

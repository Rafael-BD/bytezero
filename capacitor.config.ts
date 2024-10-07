import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.bytezero",
  appName: "ByteZero",
  webDir: "out",
  server: {
    androidScheme: "https",
  },
};

export default config;

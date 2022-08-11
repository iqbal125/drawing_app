declare global {
    namespace NodeJS {
      interface ProcessEnv {
        AUTH_TOKEN_SECRET: string;
        NODE_ENV: 'development' | 'production';
        PORT?: string;
      }
    }
  }

export {};  
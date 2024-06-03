declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    PORT: number;

    ADMIN_NAME: string;
    ADMIN_PASSWORD: string;
  }
}

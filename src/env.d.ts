declare namespace NodeJS {
    interface ProcessEnv {
        readonly API_URL: string;
        readonly API_KEY: string;
    }
}

declare const process: {
    env: NodeJS.ProcessEnv;
};

declare module '*.css';

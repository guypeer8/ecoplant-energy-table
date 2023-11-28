import path from 'path';
import dotenv from 'dotenv';    

export const loadEnvVars = () => {
    if (process.env.NODE_ENV !== 'production') {
        dotenv.config({ path: path.join(__dirname, '..', '..', '.env.dev') });
    } else {
        dotenv.config({ path: path.join(__dirname, '..', '..', '.env.prod') });
    }
};
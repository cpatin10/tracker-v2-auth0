import { ENV } from './../core/env.config';

interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: '7D5xAg8qi3i9qYB6NLXQKHZIyTEXUfKG',
    CLIENT_DOMAIN: 'agudelotmateo.auth0.com',
    AUDIENCE: 'http://localhost:8083/api/',
    REDIRECT: `${ENV.BASE_URI}/callback`,
    SCOPE: 'openid profile'
};

require('dotenv').config();

const { env } = process;

module.exports = {
    IS_DEV: env.NODE_ENV === 'development',
    PORT: env.PORT,
    LOG_LEVEL: env.LOG_LEVEL,
    MONGO_URI: env.MONGO_URI,
    MONGO_POOL_SIZE: env.MONGO_POOL_SIZE,
    KAKAO_CLIENT_ID: env.KAKAO_CLIENT_ID,
    KAKAO_CLIENT_SECRET: env.KAKAO_CLIENT_SECRET,
    KAKAO_REROUTING_URL: env.KAKAO_REROUTING_URL,
    MAIL_SERVICE: env.MAIL_SERVICE,
    MAIL_HOST: env.MAIL_HOST,
    MAIL_USER: env.MAIL_USER,
    MAIL_PASS: env.MAIL_PASS,
    MAIL_FROM: env.MAIL_FROM,
    SESSION_KEY: env.SESSION_KEY,
};


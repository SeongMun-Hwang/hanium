require('dotenv').config();

const { env } = process;

module.exports = {
    IS_DEV: env.NODE_ENV === 'development',
    PORT: env.PORT,
    LOG_LEVEL: env.LOG_LEVEL,
    MONGO_URI: env.MONGO_URI,
    MONGO_POOL_SIZE: env.MONGO_POOL_SIZE,
};

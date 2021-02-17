// Heroku to Directus mappings
module.exports = {
  DB_CONNECTION_STRING:
    process.env.DB_CONNECTION_STRING || process.env.DATABASE_URL,
  RATE_LIMITER_REDIS: process.env.RATE_LIMITER_REDIS || process.env.REDIS_URL,
  CACHE_REDIS: process.env.CACHE_REDIS || process.env.REDIS_URL,
  EMAIL_FROM: process.env.EMAIL_FROM || process.env.MAILGUN_SMTP_LOGIN,
  EMAIL_SMTP_HOST:
    process.env.EMAIL_SMTP_HOST || process.env.MAILGUN_SMTP_SERVER,
  EMAIL_SMTP_PORT: process.env.EMAIL_SMTP_PORT || process.env.MAILGUN_SMTP_PORT,
  EMAIL_SMTP_USER:
    process.env.EMAIL_SMTP_USER || process.env.MAILGUN_SMTP_LOGIN,
  EMAIL_SMTP_PASSWORD:
    process.env.EMAIL_SMTP_PASSWORD || process.env.MAILGUN_SMTP_PASSWORD,
};

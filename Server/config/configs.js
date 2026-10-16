
export const config = {
    REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY,
    ACCES_TOKEN_EXPIRY: process.env.ACCES_TOKEN_EXPIRY,

    SECRET_KEY:process.env.SECRET_KEY,

    MONGODB_URI:process.env.MONGODB_URI,
    PORT: process.env.PORT || 4000,

}
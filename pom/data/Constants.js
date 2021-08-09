import dotenv from 'dotenv'
dotenv.config()

export const URL = {
    SUT_URL: process.env.BASE_URL
}

export const CREDENTIALS = {
    VALID_USER:{
        MAIL: process.env.VALID_MAIL,
        PASSWORD: process.env.VALID_PASSWORD
    },
    INVALID_USER:{
        MAIL: "wrongemail@mailto.com",
        PASSWORD: "wrongpass123",
        NULL_FIELD: null
    }
}

export const ERROR_MESSAGE = {
    WRONG_CREDENTIALS: "Wrong email or password.",
    MISSING_PASSWORD: "Blank password.",
    INVALID_EMAIL: "Invalid email address."
}

export const TASK_NUMBER = {
    SINGLE: 1,
    MULTIPLE: 10
}
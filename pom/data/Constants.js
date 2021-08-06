import dotenv from 'dotenv'
dotenv.config()

export const URL = {
    SUT_URL = process.env.BASE_URL
}

export const CREDENTIALS = {
    VALID_USER:{
        MAIL: process.env.USER.URL,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER:{
        MAIL: "wrongemail@mailto.com",
        PASSWORD: "wrongpass123"
    }
}

export const ERROR_MESSAGE = {
    WRONG_CREDENTIALS: "Wrong emailor password",
    MISSING_PASSWORD: "Blank password",
    INVALID_EMAIL: "Invalid email adress"
}

export const TASK_NUMBER = {
    SINGLE: 1,
    MULTIPLE: 10
}
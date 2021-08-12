import dotenv from 'dotenv'
dotenv.config()

export const URL = {
    SUT_URL: process.env.BASE_URL
}

export const CREDENTIALS = {
    VALID_USER: {
        MAIL: process.env.VALID_MAIL,
        PASSWORD: process.env.VALID_PASSWORD
    },
    INVALID_USER: {
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

export const TASK = {
    SINGLE: {
        NUMBER: 1,
        DUE: {
            TODAY: "Today",
            TOMORROW: "Tomorrow"
        },
        NAME: "SINGLE TASK"
    },
    MULTIPLE: {
        NUMBER: 10,
        DUE: {
            TODAY: "Today"
        },
        NAME: "MULTIPLE TASK"
    }
}

export const PROJECT = {
    NAME: "Test project",
    COLOR: {
        BERRY_RED: 
        {
            NAME: "Berry Red",
            RGB: "rgb(184, 37, 95)"
        },
        RED: "rgb(219, 64, 53)",
        ORANGE: "rgb(255, 153, 51)",
        YELLOW: "rgb(250, 208, 0)",
        OLIVE_GREEN: "rgb(175, 184, 59)"
    }
}
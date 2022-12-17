export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const AUTHENTICATE = 'AUTHENTICATE'

export const login = () => ({
    type: LOG_IN
})

export const logout = () => ({
    type: LOG_OUT
})


export const authenticate = (email, password) => ({
    type: AUTHENTICATE, payload: {email, password}
})

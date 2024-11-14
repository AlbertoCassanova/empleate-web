export type userType = {
    id: string,
    email: string,
    role: string
}

export type sessionType = {
    acces_token: string,
    user: userType
}

export type authType = {
    user: userType,
    session: sessionType
}
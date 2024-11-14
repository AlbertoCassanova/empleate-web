import { Session, User } from "@supabase/supabase-js";

export const logIn = (user: User, session: Session) : void => {
    localStorage.setItem('token', session.access_token);
    localStorage.setItem('email', user.email);
    window.location.href = '/home';
}

export const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    window.location.href = '/';
}
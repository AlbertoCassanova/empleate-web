import { FC, useState } from "react";
import { AuthViewSetterType } from "../../models/UI.models";

// Components
import Input from "../ui/Input";
import supabase from "../../utils/supabase";
import { logIn } from "../../utils/auth";

const SignIn : FC<AuthViewSetterType> = ({setAuthView}) : JSX.Element => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleSignIn = async() => {
        if (email == '' || password == '') {
            alert("Debe rellenar todos los campos")
        }
        else {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })
            if (error) {
                console.log(error);
                
            }
            if (data) {
                logIn(data.user, data.session)
            }
        }
    }
    return (
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
            <h1 className="text-2xl font-semibold mb-4 text-blue-500">Empleate</h1>
            <h1 className="text-2xl font-semibold mb-4">Iniciar sesión</h1>
            <form method="POST">
                <Input
                    type="text"
                    label="Correo Electronico"
                    onChange={(e :any) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    label="Contraseña"
                    onChange={(e :any) => setPassword(e.target.value)}
                />
                <div className="mb-4 flex items-center">
                    <input type="checkbox" id="remember" name="remember" className="text-red-500" />
                    <label className="text-green-900 ml-2">Recordar contraseña</label>
                </div>
                <div className="mb-6 text-blue-500">
                    <a href="#" className="hover:underline">¿Olvidaste la contraseña?</a>
                </div>
                <button type="button" className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full" onClick={handleSignIn}>Entrar</button>
            </form>
            <div className="mt-6 text-green-500 text-center">
                <a onClick={() => setAuthView('signUp')} className="hover:underline">Registrate aquí</a>
            </div>
        </div>
    )
}

export default SignIn
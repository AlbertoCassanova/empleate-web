import { FC, useState } from "react";
import { AuthViewSetterType } from "../../models/UI.models";

// Components
import Input from "../ui/Input";
import supabase from "../../utils/supabase";

const SignUp: FC<AuthViewSetterType> = ({ setAuthView }): JSX.Element => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const handleSignUp = async () => {
        if (firstName == '' || lastName == '' || email == '' || password == '' || confirmPassword == '') {
            alert("Rellene todos los datos");
        }
        else {
            if (password != confirmPassword) {
                alert("La confirmacion de la contraseña no coincide")
            }
            else {
                const { data, error } = await supabase.auth.signUp({
                    email,
                    password,
                });
                console.log(data.user.id);
                console.log(error);
                if (data) {
                    await supabase.from('profiles').insert([
                        {
                            first_name: firstName,
                            last_name: lastName,
                            id: data.user.id
                        }
                    ])
                    alert("Se ha creado el usuario, revise su correo para confirmar");
                    setAuthView('signIn');
                }
            }
        }
    }
    return (
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
            <h1 className="text-2xl font-semibold mb-4 text-blue-500">Empleate</h1>
            <h1 className="text-2xl font-semibold mb-4">Registrarse</h1>
            <form>
                <Input
                    type="text"
                    label="Nombre"
                    onChange={(e: any) => setFirstName(e.target.value)}
                />
                <Input
                    type="text"
                    label="Apellido"
                    onChange={(e: any) => setLastName(e.target.value)}
                />
                <Input
                    type="text"
                    label="Correo Electronico"
                    onChange={(e: any) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    label="Contraseña"
                    onChange={(e: any) => setPassword(e.target.value)}
                />
                <Input
                    type="password"
                    label="Confirmar ontraseña"
                    onChange={(e: any) => setConfirmPassword(e.target.value)}
                />
                <div className="mb-4 flex items-center">
                    <input type="checkbox" id="remember" name="remember" className="text-red-500" />
                    <label className="text-green-900 ml-2">Recordar contraseña</label>
                </div>
                <div className="mb-6 text-blue-500">
                    <a href="#" className="hover:underline">¿Olvidaste la contraseña?</a>
                </div>
                <button type="button" onClick={handleSignUp} className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Entrar</button>
            </form>
            <div className="mt-6 text-green-500 text-center">
                <a onClick={() => setAuthView('signIn')} className="hover:underline">Inicia sesión</a>
            </div>
        </div>
    )
}

export default SignUp
import { useFormFields } from "../../hooks"

function SignIn() {
    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: "",
    });
    return (

        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
            <h1 className="text-2xl font-semibold mb-4 text-blue-500">Empleate</h1>
            <h1 className="text-2xl font-semibold mb-4">Iniciar sesión</h1>
            <form method="POST">
                <div className="mb-4 bg-sky-100">
                    <label className="block text-gray-600">Correo Electrónico</label>
                    <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-800">Contraseña</label>
                    <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
                </div>
                <div className="mb-4 flex items-center">
                    <input type="checkbox" id="remember" name="remember" className="text-red-500" />
                    <label className="text-green-900 ml-2">Recordar contraseña</label>
                </div>
                <div className="mb-6 text-blue-500">
                    <a href="#" className="hover:underline">¿Olvidaste la contraseña?</a>
                </div>
                <button type="submit" className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Entrar</button>
            </form>
            <div className="mt-6 text-green-500 text-center">
                <a href="#" className="hover:underline">Registrate aquí</a>
            </div>
        </div>
    )
}

export default SignIn
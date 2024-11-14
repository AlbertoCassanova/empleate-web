import { logOut } from "../utils/auth"

const Navbar = () => {
    return (
        <div className="flex justify-between p-4">
            <div>
                <span>Empleate</span>
            </div>
            <div>
                <span onClick={logOut}>Cerrar sesión</span>
            </div>
        </div>
    )
}

export default Navbar
// React
import { useState } from "react"

// Components
import SignIn from "../components/auth/SignIn"
import SignUp from "../components/auth/SignUp"

function Login() : JSX.Element {
  const [authView, setAuthView] = useState<'signIn' | 'signUp'>('signIn')
  return (
    <div className="bg-sky-100 flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826" alt="Placeholder Image" className="object-cover w-full h-full"/>
    </div>
    {
      authView == 'signIn' ? <SignIn setAuthView={setAuthView} /> : <SignUp setAuthView={setAuthView} />
    }
  </div>
  )
}

export default Login
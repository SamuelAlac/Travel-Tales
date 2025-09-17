import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  return (
    <form action="" className="min-h-120 p-5 md:rounded-4xl flex flex-col justify-center bg-neutral-50/30">
        <legend className="text-green-700 text-5xl text-center mb-7">Travel Tales</legend>
            <label className="text-black mb-2">Email
            <input className="input text-neutral-50 rounded-4xl" type="email" required placeholder="name@example.com"
            title="Email should like like name@example.com" />
            </label>

            <label className="text-black my-3">Password
            <input type="password" className="input text-neutral-50 rounded-4xl" required placeholder="Password"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
            </label>
        <Link to='/' className="text-blue-600 text-end mb-5 hover:underline">Forgot password?</Link>
        <button className="btn btn-soft rounded-4xl mb-5">Login</button>
        <p className="text-black text-center mb-5">Or Login with</p>
        <div className="text-black flex justify-center gap-5 mb-2 md:mb-8">
            <FaFacebook size={35} role="button"/>
            <FaGoogle size={35} role="button"/>
            <FaGithub size={35} role="button"/>
        </div>

        <p className="text-black text-center">Don't have an account?
            <Link to='/Register' className="text-blue-600 underline ms-2">Sign Up</Link>
        </p>
    </form>
  )
}

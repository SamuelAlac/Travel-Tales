import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
  return (
    <form action="" className="min-h-120 p-5 md:rounded-4xl flex flex-col justify-center bg-neutral-50/30">
        <legend className="text-green-700 text-4xl text-center mb-7">Create Account</legend>

            <label className="text-black mb-2 text-sm">Username
            <input type="text" className="input text-neutral-50 rounded-4xl" required placeholder="Username" 
            title="Username should only have letters and numbers" />
            </label>

            <label className="text-black mb-2 text-sm">Email
            <input className="input text-neutral-50 rounded-4xl" type="email" required placeholder="name@example.com"
            title="Email should like like name@example.com" />
            </label>

            <label className="text-black my-3 text-sm">Password
            <input type="password" className="input text-neutral-50 rounded-4xl" required placeholder="Confirm Password"
            title="Password Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
            </label>

            <label className="text-black my-3 text-sm">Confirm Password
            <input type="password" className="input text-neutral-50 rounded-4xl" required placeholder="Password"
            title="Password Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
            </label>
        <button className="btn btn-soft rounded-4xl my-5">Sign Up</button>
        <p className="text-black text-center mb-5">Or Sign Up with</p>
        <div className="text-black flex justify-center gap-5 mb-2 md:mb-8">
            <FaFacebook size={35} role="button"/>
            <FaGoogle size={35} role="button"/>
            <FaGithub size={35} role="button"/>
        </div>

        <p className="text-black text-center">Already have an account?
            <Link to='/Login' className="text-blue-600 underline ms-2">Sign In</Link>
        </p>
    </form>
  )
}

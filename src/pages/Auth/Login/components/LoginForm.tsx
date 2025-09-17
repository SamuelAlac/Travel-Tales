import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useForm, type SubmitHandler } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../../../libs/firebase";

type FormFields = {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<FormFields>({})
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormFields> = async (formData) =>{
    try {
      const { email, password } = formData;
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/Profile')
    } catch (err) {
      setError('root',{
        message: 'Account not found'
      })
    }
  }

  const signInWithGoogle = async () =>{
    try {
      await signInWithPopup(auth, googleProvider)
      alert('Signed in successfully with Google')
      navigate('/Profile')
    } catch (err) {
      console.log(`Error signing in with google: ${err}`)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="min-h-120 p-5 md:rounded-4xl flex flex-col justify-center bg-neutral-50/30">
        <legend className="text-green-700 text-4xl text-center mb-7">Welcome Back</legend>

            <label className="text-black mb-2">Email
            <input {...register('email')} className="input text-neutral-50 rounded-4xl" type="email" required placeholder="name@example.com"
            title="Email should like like name@example.com" />
            {errors.email && <div className="text-red-900">{errors.email.message}</div>}
            </label>

            <label className="text-black my-3">Password
            <input {...register('password')} type="password" className="input text-neutral-50 rounded-4xl" required placeholder="Password"
            title="Password Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
            {errors.password && <div className="text-red-900">{errors.password.message}</div>}
            </label>

        <Link to='/' className="text-blue-600 text-end mb-5 hover:underline">Forgot password?</Link>
        <button className="btn btn-soft rounded-4xl">Sign In</button>
        {errors.root && <div className="text-red-900 text-center">{errors.root.message}</div>}
        <p className="text-black text-center my-5">Or Sign In with</p>
        <div className="text-black flex justify-center gap-5 mb-2 md:mb-8">
            <FaFacebook size={35} role="button"/>
            <FaGoogle size={35} role="button" onClick={signInWithGoogle}/>
            <FaGithub size={35} role="button"/>
        </div>

        <p className="text-black text-center">Don't have an account?
            <Link to='/Register' className="text-blue-600 underline ms-2">Sign Up</Link>
        </p>
    </form>
  )
}

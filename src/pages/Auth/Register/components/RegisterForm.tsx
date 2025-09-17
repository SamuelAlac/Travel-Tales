import { createUserWithEmailAndPassword, reload, signInWithPopup, updateProfile } from "firebase/auth";
import { useForm, type SubmitHandler } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../../../libs/firebase";
import { useDispatch } from "react-redux";
import { saveUser } from "../../../../state/auth/authSlice";

type FormFields = {
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
}

export const RegisterForm = () => {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<FormFields>({})
  const navigate = useNavigate();
   const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormFields> = async (formData) =>{
    try {
      const { username, email, password } = formData;
      const userCredential =  await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(userCredential.user,{
        displayName: username || 'Guest',
        photoURL: ''
      })
      await reload(userCredential.user);

      dispatch(saveUser({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: userCredential.user.displayName,
        photoURL: userCredential.user.photoURL,
        refreshToken: userCredential.user.refreshToken,
      }))

      navigate('/Login')
    } catch (err) {
      setError('root',{
        message: 'Account already exist'
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
        <legend className="text-green-700 text-4xl text-center mb-7">Create Account</legend>

            <label className="text-black mb-2 text-sm">Username
            <input {...register('username')} type="text" className="input text-neutral-50 rounded-4xl" required placeholder="Username" 
            title="Username should only have letters and numbers" />
            {errors.username && <div className="text-red-900">{errors.username.message}</div>}
            </label>

            <label className="text-black mb-2 text-sm">Email
            <input {...register('email')} className="input text-neutral-50 rounded-4xl" type="email" required placeholder="name@example.com"
            title="Email should like like name@example.com" />
            {errors.email && <div className="text-red-900">{errors.email.message}</div>}
            </label>

            <label className="text-black my-3 text-sm">Password
            <input {...register('password')} type="password" className="input text-neutral-50 rounded-4xl" required placeholder="Confirm Password"
            title="Password Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
            {errors.password && <div className="text-red-900">{errors.password.message}</div>}
            </label>

            <label className="text-black my-3 text-sm">Confirm Password
            <input {...register('confirmpassword')} type="password" className="input text-neutral-50 rounded-4xl" required placeholder="Password"
            title="Password Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
            {errors.confirmpassword && <div className="text-red-900">{errors.confirmpassword.message}</div>}
            </label>

        <button className="btn btn-soft rounded-4xl mt-5">{isSubmitting ? 'loading...' : 'Submit'}</button>
        {errors.root && <div className="text-red-900 text-center">{errors.root.message}</div>}
        <p className="text-black text-center my-3">Or Sign Up with</p>
        <div className="text-black flex justify-center gap-5 mb-2 md:mb-8">
            <FaFacebook size={35} role="button"/>
            <FaGoogle size={35} role="button" onClick={signInWithGoogle}/>
            <FaGithub size={35} role="button"/>
        </div>

        <p className="text-black text-center">Already have an account?
            <Link to='/Login' className="text-blue-600 underline ms-2">Sign In</Link>
        </p>
    </form>
  )
}

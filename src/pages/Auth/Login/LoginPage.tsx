import { LoginForm } from "./components/LoginForm";
import { LoginHero } from "./components/LoginHero";

const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between min-h-screen pt-20 md:pt-15">
      <LoginHero/>
      <div className="grow flex flex-col justify-center items-center 
      bg-black/50 bg-blend-overlay bg-[url('/travel_login_image.webp')] bg-cover bg-center md:bg-white">
        <LoginForm/>
      </div>
    </div>
  )
}

export default LoginPage
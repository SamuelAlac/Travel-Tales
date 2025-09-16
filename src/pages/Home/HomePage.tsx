import { FeaturedBlogs } from "./components/FeaturedBlogs"
import { Hero } from "./components/Hero"

const HomePage = () => {
  return (
    <div className="space-y-5">
      <Hero/>
      <FeaturedBlogs/>
    </div>
  )
}

export default HomePage
import { BlogsCard } from "../../../components/BlogsCard"

export const FeaturedBlogs = () => {
  return (
    <div className="flex flex-col items-center min-h-screen space-y-8">
        <h1 className="text-green-700 text-3xl">Featured Tales</h1>
        <div className="grid grid-col-1 md:grid-cols-4 gap-10 px-5">
            <BlogsCard tale={''}/>
            <BlogsCard tale={''}/>
            <BlogsCard tale={''}/>
            <BlogsCard tale={''}/>
            <BlogsCard tale={''}/>
            <BlogsCard tale={''}/>
            <BlogsCard tale={''}/>
        </div>

        <div className="bg-green-900 w-50 h-10 flex justify-center rounded-4xl mb-3">
          <button className="text-green-50 hover:text-green-300">See More</button>
        </div>
    </div>
  )
}

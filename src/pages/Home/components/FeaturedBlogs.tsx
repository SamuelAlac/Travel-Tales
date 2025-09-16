import { BlogsCard } from "../../../components/BlogsCard"

export const FeaturedBlogs = () => {
  return (
    <div className="flex flex-col items-center min-h-screen space-y-10">
        <h1 className="text-green-700 text-3xl">Featured Blog Posts</h1>
        <div className="grid grid-col-1 md:grid-cols-4 gap-10">
            <BlogsCard/>
            <BlogsCard/>
            <BlogsCard/>
            <BlogsCard/>
            <BlogsCard/>
            <BlogsCard/>
            <BlogsCard/>
        </div>
    </div>
  )
}

import { BlogsCard } from "../../../components/BlogsCard"
import { IoIosSearch } from "react-icons/io";

export const Blogs = () => {
  return (
    <div className="flex flex-col items-center min-h-screen space-y-8 mb-5">
        <h1 className="text-green-700 text-3xl">Travel Tales Blogs</h1>

          <label className="w-75 md:min-w-125 rounded-2xl bg-transparent input input-neutral">
            <IoIosSearch className="text-neutral-900"/>
            <input type="text" placeholder="Type here" className="grow" />
          </label>

        <div className="grid grid-col-1 md:grid-cols-4 gap-10">
            <BlogsCard/>
            <BlogsCard/>
            <BlogsCard/>
            <BlogsCard/>
            <BlogsCard/>
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

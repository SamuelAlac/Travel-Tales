import { BlogsCard } from "../../../components/BlogsCard"
import { Searchbar } from "../../../components/Searchbar";
import { IoIosAdd } from "react-icons/io";

export const Tales = () => {
  return (
    <div className="flex flex-col items-center min-h-screen space-y-8 mb-5">
        <h1 className="text-green-700 text-3xl">Journey Tales</h1>

          <div className="flex flex-col space-y-5">
          <div className="flex justify-between">
            <button className="btn btn-soft"><span><IoIosAdd/></span>Add Your Story</button>
            <Searchbar/>
          </div>

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
    </div>
  )
}

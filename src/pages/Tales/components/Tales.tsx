import { Link } from "react-router-dom";
import { BlogsCard } from "../../../components/BlogsCard"
import { Searchbar } from "../../../components/Searchbar";
import { IoIosAdd } from "react-icons/io";
import { useTalesQuery } from "../../../hooks/useTalesQuery";

export const Tales = () => {

  const { data: tales, isError, isLoading } = useTalesQuery();

  return (
    <div className="flex flex-col items-center min-h-screen space-y-8 mb-5">
        <h1 className="text-green-700 text-3xl">Journey Tales</h1>

          <div className="flex flex-col space-y-5">
          <div className="flex justify-between">
            <Link to='/Tales/AddTale' className="btn btn-soft"><span><IoIosAdd/></span>Add Your Tale</Link>
            <Searchbar/>
          </div>

          <div className="grid grid-col-1 md:grid-cols-4 gap-8 px-5">
            {tales?.map((tale, index) =>(
              <BlogsCard key={index} tale={tale}/>
            ))}
        </div>
          </div>
    </div>
  )
}

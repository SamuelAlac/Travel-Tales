import { useParams } from "react-router-dom"
import { useTaleIDQuery } from "../../../hooks/useTaleIDQuery";
import type { TaleProp } from "../../../types/tales";

const TaleDetailPage = () => {
    const { taleID } = useParams<TaleProp>();
    if(!taleID) throw new Error("taleID is missing");
    const { data: tale, isError, isLoading  } = useTaleIDQuery({taleID})

  return (
    <div className="min-h-screen pt-20 md:pt-15">
        <div className="text-black flex flex-col space-y-7">
            <h1>{tale?.Title}</h1>
        </div>
    </div>
  )
}

export default TaleDetailPage
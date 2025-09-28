import { useParams } from "react-router-dom"
import { useTaleIDQuery } from "../../../hooks/useTaleIDQuery";
import type { TaleProp } from "../../../types/tales";

const TaleDetailPage = () => {
    const { taleID } = useParams<TaleProp>();
    if(!taleID) throw new Error("taleID is missing");
    const { data: tale, isError, isLoading  } = useTaleIDQuery({taleID})
    const stories = tale?.Story
    console.log(stories)

  return (
    <div className="min-h-screen pt-20 md:pt-15">
        <div className="flex flex-col space-y-7">
            <div className="text-center mt-5 space-y-3">
                <h1 className="text-black text-2xl md:text-4xl">{tale?.Title}</h1>
                <p className="text-black">By: {tale?.Author}</p>
            </div>

            <figure className="max-w-150 mx-auto space-y-3">
                <img src={'/placeholder_image.webp'} alt="Image Placeholder" className="rounded-sm" />
                <p className="text-black text-center">
                {tale?.Description}
                </p>

            </figure>
            {stories?.map((story: any, index: any) => (
              <div key={index} className="text-center">
                <h2 className="text-black text-3xl">{story.Topic}</h2>
                <p className="text-black text-center">{story.Message}</p>
              </div>
            ))}
        </div>
    </div>
  )
}

export default TaleDetailPage
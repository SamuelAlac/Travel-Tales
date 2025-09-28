import { FaHeart } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth } from "../libs/firebase";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDeleteTaleMutation } from "../hooks/useDeleteTaleMutation";

export const BlogsCard = ({tale}: { tale: any }) => {
  const userID = auth.currentUser?.uid;
  const { mutateAsync } = useDeleteTaleMutation()

  const deleteTale = async (taleID: string) =>{
    try {
      await mutateAsync({ taleID: taleID })
    } catch (err) {
      console.log(`Error deleting tale: ${err}`)
    }
  }

  return (
    <div className="card bg-green-700 w-full min-h-110 transition ease-in-out hover:scale-105 relative group">
        <figure className="max-h-45">
            <img
            src="/Baguio.webp"
            alt="Baguio" />
        </figure>
        <div className="card-body">
            <h2 className="card-title text-xl">{tale?.Title}</h2>
            <h3 className="text-sm">{tale?.Author}</h3>
            <p className="text-sm">{tale?.Description}</p>
            <div className="card-actions items-center gap-2 justify-between">
            <div className="flex gap-2 items-center">
              <div className="flex items-center gap-1.5">
                <FaRegEye/>
                <span className="hover:underline" role="button">100</span>
              </div>
              <div className="flex items-center gap-1.5">
                <IoChatbox/>
                <span className="hover:underline" role="button">100</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaHeart/>
                <span className="hover:underline" role="button">100</span>
              </div>
            </div>

              <div>
              <Link to={`${tale?.TaleID}`} className="btn btn-soft">Read Me</Link>
              </div>
            </div>
        </div>
        {tale?.AuthorID === userID && (
          <>
          <Link to={`${tale?.TaleID}/UpdateTale`} className="btn btn-soft btn-sm absolute right-3 top-3 opacity-80 md:opacity-0 group-hover:opacity-80"><FaRegEdit/></Link>
          <button onClick={() => (deleteTale(tale?.TaleID))} className="btn btn-soft btn-sm absolute right-3 top-12 opacity-80 md:opacity-0 group-hover:opacity-80"><FaRegTrashCan/></button>  
          </>
        )}
    </div>
  )
}

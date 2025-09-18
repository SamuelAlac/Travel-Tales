import { FaHeart } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

export const BlogsCard = ({tale}: { tale: any }) => {
  return (
    <div className="card bg-green-700 max-w-75 min-h-110 transition ease-in-out hover:scale-105">
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

            <Link to={`${tale?.TaleID}`} className="btn btn-soft">Read Me</Link>
            </div>
        </div>
    </div>
  )
}

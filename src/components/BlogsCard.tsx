export const BlogsCard = () => {
  return (
    <div className="card bg-green-700 w-75 h-100 mb-5">
        <figure>
            <img
            src="/Baguio.webp"
            alt="Baguio" />
        </figure>
        <div className="card-body">
            <h2 className="card-title text-xl">This is Baguio</h2>
            <h3 className="text-sm">By: Samuel Alac</h3>
            <p className="text-lg">A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-end">
            <button className="btn btn-soft">Read Me</button>
            </div>
        </div>
    </div>
  )
}

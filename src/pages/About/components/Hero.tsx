import { Carousel } from '../../../components/ui/Carousel'

export const Hero = () => {
  return (
    <div className="hero min-h-screen mt-10 md:mt-0">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Carousel images={["/Baguio.webp","/Baguio.webp","/Baguio.webp"]}/>
        <div className='text-center md:text-start'>
          <h1 className="text-5xl font-bold text-green-700">About</h1>
          <div className="max-w-175">
            <p className="py-6 text-green-500">
              Welcome to <span className="font-semibold">Travel Tales</span>, your ultimate travel storytelling hub.
              We're passionate about helping travelers, writers, and creators share their journeys with the world.
            </p>
          </div>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

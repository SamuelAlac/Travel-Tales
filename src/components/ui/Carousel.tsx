import { useCallback, useEffect, useRef, useState } from "react"

export const Carousel = ({ images }: { images: string[] }) => {  
  const carouselImages = images;
  const [carouselActiveItem, setCarouselActiveItem] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const scrollItem = () =>{
    setCarouselActiveItem(prev =>{
      if(carouselImages.length-1 > prev){
        return prev + 1;
      }else{
        return 0;
      }
    })
  }

  const autoPlay = useCallback(() => setInterval(scrollItem, 5000), [])

  useEffect(() =>{
    const play = autoPlay();
    return () => clearInterval(play)
  },[autoPlay])

  useEffect(() => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: carouselActiveItem * width,
        behavior: "smooth",
      });
    }
  },[carouselActiveItem]);

  return (
    <div ref={carouselRef} className="carousel w-full overflow-x-hidden">
        {carouselImages.map((src, index) =>(
        <div key={index} className="carousel-item relative w-full">
            <img src={src} className="w-full" />

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button className="btn btn-circle" onClick={() =>
                setCarouselActiveItem(prev =>
                prev === 0 ? carouselImages.length - 1 : prev - 1
                )
            }>❮</button>
            <button className="btn btn-circle" onClick={() =>
                setCarouselActiveItem(prev => prev + 1 % carouselImages.length)
            }>❯</button>
            </div>
        </div>
        ))}
    </div>
  )
}

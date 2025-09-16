export const Hero = () => {
  return (
    <div className="bg-black/50 bg-blend-overlay bg-[url('/hero.webp')] bg-cover bg-center min-h-screen">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col justify-center items-center max-w-200 max-h-40 gap-4 md:gap-8">
          <h1 className="font-bold text-lg md:text-5xl text-neutral-50">Find Beauty in Every Journey</h1>
          <h1 className="text-sm md:text-2xl text-neutral-50/80 animate-pulse">Your Next Adventure Starts Here</h1>
        </div>
      </div>
    </div>
  )
}

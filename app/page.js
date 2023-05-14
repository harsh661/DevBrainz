import Navbar from "@components/Navbar"

const Home = () => {
  return (
    <section>
      <Navbar />
      <main className="w-full max-w-7xl mx-auto my-10 sm:my-20 flex flex-col z-10">
        <header className="p-5 sm:p-10 flex flex-col gap-5">
          <h1 className="head_text text-5xl sm:text-7xl">
            Welcome to the ultimate platform <br/> to share and explore new ideas.
          </h1>
          <h3 className="sm:text-lg font-light">
            At DevBrainz, we believe that the most groundbreaking ideas often come from the wildest imaginations.<br/> Join our community and discover what can be achieved when creativity meets collaboration.
          </h3>
          <div className="py-3 px-8 my-3 bg-black text-white rounded-md cursor-pointer w-max">
            Get Started
          </div>
          {/* Vector image for hero section */}
          <div className="flex w-full justify-center">
            <img src="g1671.svg" alt="Developers discussing their ideas" className="hidden lg:flex" />
          </div>
        </header>
      </main>
    </section>
  )
}

export default Home
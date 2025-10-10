import Image from "next/image";

export default function Hero() {
  return (
    <section id="home">
      <div className="bg-[url('/images/bg1.jpg')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen">
        <div className=" bg-black/75 text-white gap-30  flex flex-col md:flex-row  items-center justify-between h-200">

          {/* Left Content */}
          <div className="max-w-lg ml-auto">
           <h1>I&apos;m Tanuja Gurav</h1>

            <p className="text-white text-2xl mb-6">
              I develop 3D visuals, user
              interfaces and Fullstack web applications
            </p>
            <button className="bg-#87CEEB hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition">
              Download Resume
            </button>


          </div>

          {/* Right Profile Image */}
          <div className=" mr-auto md:mt-0">
            <Image
              src="/images/profile1.jpg"
              alt="Profile"
              width={300}
              height={300}
              className="object-cover rounded-[5vw] bounce"
            />
          </div>
        </div>
      </div>
    </section>

  );
}
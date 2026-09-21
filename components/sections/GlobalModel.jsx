import Image from 'next/image';

export default function FlagshipModel() {
  return (
    <section className="w-full pd-0 md:pb-8 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      {/* <div className="text-center mb-6">
        <h1 className="text-3xl xs:text-3xl md:text-5xl font-[heading-1]">
          Global <span className="text-[#23aa5d]">Flagship</span> Model
        </h1>
      </div> */}
      
      {/* Image Container */}
      <div className="w-full max-w-7xl mx-auto mb-0 md:mb-10">
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[550px]">
          <Image
            src="/assets/globaltable.png" // Replace with your image path
            alt="Global Flagship Model"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
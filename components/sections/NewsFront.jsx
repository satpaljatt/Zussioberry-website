import React from 'react'

const NewsFront = () => {
  return (
    <>
    <section
      className="relative bg-cover bg-center text-white min-h-[60vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/assets/careerBanner.png')",
      }}
    >

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h2 className="text-3xl md:text-6xl font-[heading-1] mb-4">
          Zussioberry News
        </h2>
        <p className="text-sm md:text-lg text-gray-200 mb-6 leading-relaxed font-[para]">
          Stay updated with the freshest juice trends,
          events and healthy lifestyle tips.
        </p>
      </div>
    </section>
    </>
  )
}

export default NewsFront
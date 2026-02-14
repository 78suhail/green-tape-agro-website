import React from "react";
import Image from "next/image";

const AgricultureGallery = () => {
  return (
    <div className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Left Big Image */}
        <div className="rounded-lg overflow-hidden flex items-center justify-center">
          <Image
            src="/img5.png"
            alt="Agriculture Image 1"
            width={600}
            height={500}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Right Side Images */}
        <div className="grid grid-rows-2 gap-6">

          {/* Top Right */}
          <div className="rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src="/img6.png"
              alt="Agriculture Image 2"
              width={500}
              height={250}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          {/* Bottom Right */}
          <div className="rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src="/img4.png"
              alt="Agriculture Image 3"
              width={500}
              height={250}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default AgricultureGallery;

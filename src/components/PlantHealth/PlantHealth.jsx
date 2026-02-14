import React from "react";
import Image from "next/image";

const PlantHealthPage = () => {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-10">
          Promote Plant Health
        </h2>

        {/* Main Layout */}
        <div className="grid md:grid-cols-3 gap-6 items-center">

          {/* LEFT SECTION */}
          <div className="space-y-10">

            {[
              { label: "N", text: "Fixes atmospheric Nitrogen" },
              { label: "P", text: "Releases unavailable Phosphorous (PSB)" },
              { label: "K", text: "Releases unavailable Potassium (KSB)" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-full border-2 border-green-700 flex items-center justify-center font-bold text-green-800 text-lg">
                  {item.label}
                </div>
                <p className="text-green-800 font-medium">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/beautiful-biophilic-scene.jpg"
              alt="Plant Health"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          {/* RIGHT SECTION */}
          <div className="space-y-10">

            {[
              {
                label: "Fe",
                text: "Mobilizes available Iron, Calcium, Zinc and Magnesium"
              },
              {
                label: "GH",
                text: "Produce plant-growth promoting hormones that reduce abiotic Stress"
              },
              {
                label: "pH",
                text: "Neutralizes pH to improve nutrient availability"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-full border-2 border-green-700 flex items-center justify-center font-bold text-green-800 text-base">
                  {item.label}
                </div>
                <p className="text-green-800 font-medium">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* Bottom Text */}
        <div className="text-center mt-10">
          <p className="text-green-900 font-semibold">
            Our microbes perform these functions to increase yield,
            improve crop growth and plant health
          </p>
        </div>

      </div>
    </div>
  );
};

export default PlantHealthPage;

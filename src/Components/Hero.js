import React from "react";
import { Carousel } from "flowbite-react";

function Hero() {
  return (
    <div className="h-56 sm:h-64 xl:h-[600px] 2xl:h-[700px]">
      <Carousel
        theme={{
          item: {
            base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 rounded-none",
          },
          scrollContainer: {
            base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
          },
        }}
        onSlideChange={(index) => console.log("onSlideChange()", index)}
      >
        <div
          className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
          style={{
            backgroundImage: 'url("./../img/3.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-white text-8xl">SMK TI BAZMA</h2>
          <br />
          <p className="text-white">Merajut Asa, Menjejak & Menebar Manfaat</p>
        </div>
        <div
          className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
          style={{
            backgroundImage: 'url("./../img/2.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-white text-8xl">SMK TI BAZMA</h2>
          <br />
          <p className="text-white">Merajut Asa, Menjejak & Menebar Manfaat</p>
        </div>
        <div
          className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
          style={{
            backgroundImage: 'url("./../img/1.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-white text-8xl">SMK TI BAZMA</h2>
          <br />
          <p className="text-white">Merajut Asa, Menjejak & Menebar Manfaat</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Hero;

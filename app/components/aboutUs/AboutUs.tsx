"use client";

import Image from "next/image";

import Container from "../Container";

const AboutUs = () => {
  return (
    <section className="my-4 xl:my-20 md:my-10 sm:my-2">
      <Container>
        <div className="h-full flex flex-col gap-y-4 md:flex-row-reverse md:gap-x-4">
          {/* images */}
          <div className="w-full relative flex items-center justify-center md:w-1/2">
            <div className="relative top-0 left-0">
              <Image
                className="rounded-[10px] shadow-2xl"
                src={"/images/home_2.jpg"}
                alt=""
                width={500}
                height={500}
              />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image
                className="border-solid border-4 border-[#fff] rounded-[10px] shadow-lg"
                src={"/images/home_1.jpg"}
                alt=""
                width={250}
                height={250}
              />
            </div>
          </div>

          {/* text */}
          <div className="py-4 flex flex-col justify-evenly md:w-1/2">
            <small className="uppercase text-[#978667] tracking-[3px] font-semibold">
              about us
            </small>
            <h2 className="font-bold text-[#333] tracking-[-.03em] leading-[1.3] text-[2.375em]">
              Tailored services and the experience of unique holidays
            </h2>
            <p className="text-[1.25rem] font-light leading-[1.6] text-[#333]">
              Vivamus volutpt eros pulvinar velit laoreet, sit amet egestas erat
              dignissim.
            </p>
            <p className="text-[0.9375rem] leading-[1.6] text-[#333]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p className="text-[2rem] text-[#555] leading-[1.6]">
              <em>Arellano Family...the Owners</em>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;

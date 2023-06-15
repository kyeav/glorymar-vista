"use client";

import Container from "../Container";

import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const OurRooms = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="my-4 xl:my-20 md:my-10 sm:my-2">
      <Container>
        <div className="h-full flex flex-col gap-y-4 md:flex-row md:gap-x-4">
          {/* text */}
          <div className="py-4 flex flex-col justify-evenly md:w-1/2">
            <small className="uppercase text-[#978667] tracking-[3px] font-semibold">
              glorymar vista resort
            </small>
            <h2 className="font-bold text-[#333] tracking-[-.03em] leading-[1.3] text-[2.375em]">
              Our Rooms
            </h2>
            <p className="text-[1.25rem] font-light leading-[1.6] text-[#333]">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo <strong>minus id quod maxime</strong> placeat
              facere possimus.
            </p>
            <Button
              leftIcon={
                isHovered ? <AiOutlineArrowRight /> : <IoIosArrowForward />
              }
              _hover={{ bg: "#978667", color: "#fff" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-1/3 bg-[#978667] rounded-3xl font-semibold transition-all duration-[0.45s] ease-in-out-circle text-[#333]"
            >
              Book Now
            </Button>
          </div>

          {/* images */}
          <div className="py-4 h-full relative flex items-center justify-center md:w-1/2">
            {/* carousel */}
            <Card className="relative top-0 left-0" variant={"outline"}>
              <CardBody>
                <Text>
                  View a summary of all your customers over the last month. View
                  a summary of all your customers over the last month. View a
                  summary of all your customers over the last month. View a
                  summary of all your customers over the last month.
                </Text>
              </CardBody>
            </Card>

            {/* info */}
            <Card className="absolute w-3/4 top-[90%] rounded-none">
              <CardHeader>
                <small className="text-[#978667] uppercase font-semibold tracking-[2px] text-[0.875rem]">
                  From $150/night
                </small>
                <h2 className="text-[#333] tracking-[-.03em] leading-[1.3] font-semibold text-[1.875rem]">
                  Double Room
                </h2>
              </CardHeader>
              <CardBody>
                <p>
                  Beautiful design with modern furnishings including a glamorous
                  bay window with your own private view of Lucerne.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurRooms;

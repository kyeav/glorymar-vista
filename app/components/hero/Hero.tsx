"use client";

import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineCalendar,
} from "react-icons/ai";

const Hero = () => {
  return (
    <div className="h-screen w-full fixed">
      <video className="absolute" autoPlay muted loop>
        <source src="./video/hero.mp4" type="video/mp4" />
      </video>

      <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <div className="flex flex-col items-center text-center gap-y-2">
          <div>
            <small className="text-[#ebd7b2] font-semibold uppercase tracking-[3px]">
              luxury hotel experience
            </small>
          </div>
          <div>
            <h3 className="text-white uppercase font-bold">
              a unique experience
              <br />
              where to stay
            </h3>
          </div>

          <div className="flex flex-col w-full gap-y-2">
            <InputGroup>
              <Input placeholder="Check in / Check out" />
              <InputRightElement>
                <AiOutlineCalendar />
              </InputRightElement>
            </InputGroup>

            <div className="sm:flex sm:flex-row sm:gap-x-2 gap-y-2">
              <InputGroup>
                <Input placeholder="Adults" />
                <InputRightElement>
                  <AiFillPlusCircle />
                  <AiFillMinusCircle />
                </InputRightElement>
              </InputGroup>

              <InputGroup>
                <Input placeholder="Children" />
                <InputRightElement>
                  <AiFillPlusCircle />
                  <AiFillMinusCircle />
                </InputRightElement>
              </InputGroup>
            </div>
          </div>

          <div>
            <Button className="bg-[#333] hover:bg-[#978667] border-none text-white w-full">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

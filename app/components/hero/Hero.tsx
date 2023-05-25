"use client";

import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineCalendar,
} from "react-icons/ai";

const Hero = () => {
  return (
    <div className="h-screen w-full fixed bg-[#978667]">
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

          <div className="w-full flex flex-col gap-y-2">
            <InputGroup>
              <Input
                border={"none"}
                bg={"#FFF"}
                _hover={{ bg: "#FFF" }}
                _focus={{ bg: "#FFF" }}
                variant={"filled"}
                _placeholder={{ opacity: 1, color: "#6c757d" }}
                placeholder="Check in / Check out"
              />
              <InputRightElement>
                <AiOutlineCalendar className="text-[#978667]" />
              </InputRightElement>
            </InputGroup>

            <div className="sm:flex sm:flex-row sm:gap-x-2 flex flex-col gap-y-2">
              <InputGroup>
                <Input
                  border={"none"}
                  bg={"#FFF"}
                  _hover={{ bg: "#FFF" }}
                  _focus={{ bg: "#FFF" }}
                  variant={"filled"}
                  _placeholder={{ opacity: 1, color: "#6c757d" }}
                  placeholder="Adults"
                />
                <InputRightElement>
                  <AiFillPlusCircle className="text-[#978667]" />
                  <AiFillMinusCircle className="text-[#978667]" />
                </InputRightElement>
              </InputGroup>

              <InputGroup>
                <Input
                  border={"none"}
                  bg={"#FFF"}
                  _hover={{ bg: "#FFF" }}
                  _focus={{ bg: "#FFF" }}
                  variant={"filled"}
                  _placeholder={{ opacity: 1, color: "#6c757d" }}
                  placeholder="Children"
                />
                <InputRightElement>
                  <AiFillPlusCircle className="text-[#978667]" />
                  <AiFillMinusCircle className="text-[#978667]" />
                </InputRightElement>
              </InputGroup>
            </div>
          </div>

          <div className="w-full">
            <Button className="bg-[#333] hover:bg-[#ebd7b2] border-none text-white hover:text-black w-full">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

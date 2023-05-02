"use client";

import Avatar from "../Avatar";
import { AiOutlineMenu } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import MenuItem from "./MenuItem";
import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";

const UserMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onOpen}
          className="p-4 md:px-2 flex flex-row items-center gap-3 rounded-full cursor-pointer"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>

        <Drawer
          size={{ sm: "full", md: "xs" }}
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
        >
          <DrawerOverlay />

          <DrawerContent>
            <DrawerCloseButton color={"#ccc"} _hover={{ color: "#333" }} />

            <DrawerHeader bg={"#faf8f5"} className="text-center border-b-[1px]">
              GloryMar Vista Resort
            </DrawerHeader>

            <DrawerBody className="flex flex-col justify-evenly">
              <MenuItem onClick={() => {}} label="ROOMS" />
              <MenuItem onClick={() => {}} label="ABOUT" />
              <MenuItem onClick={() => {}} label="ACTIVITIES" />
              <MenuItem onClick={() => {}} label="CONTACT" />
            </DrawerBody>

            <Divider />

            <DrawerFooter>
              <a
                className="w-full flex items-center justify-start gap-3"
                href="tel://+63 0915 602 0190"
              >
                <BsTelephone className="text-[#978667]" />
                <div className="no-underline tracking-[2px] uppercase text-[#333] font-medium ">
                  Info and bookings
                  <div className="text-[#978667] font-semibold">
                    +63 0915 602 0190
                  </div>
                </div>
              </a>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default UserMenu;

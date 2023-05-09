"use client";

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
import { AiOutlineMenu } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { signOut } from "next-auth/react";

import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { User } from "@prisma/client";

interface UserMenuProps {
  currentUser?: User | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onOpen}
          className="p-4 md:px-2 flex flex-row items-center gap-3 rounded-full cursor-pointer"
        >
          <AiOutlineMenu />
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
              {currentUser ? (
                <>
                  <MenuItem onClick={() => {}} label="my trips" />
                  <MenuItem onClick={() => {}} label="my favorites" />
                  <MenuItem onClick={() => {}} label="my reservations" />
                  <MenuItem onClick={() => {}} label="my properties" />
                  <MenuItem
                    onClick={() => {
                      signOut();
                    }}
                    label="logout"
                  />
                </>
              ) : (
                <>
                  <MenuItem onClick={loginModal.onOpen} label="login" />
                  <MenuItem onClick={registerModal.onOpen} label="sign up" />
                </>
              )}

              <MenuItem onClick={() => {}} label="rooms" />
              <MenuItem onClick={() => {}} label="about" />
              <MenuItem onClick={() => {}} label="activities" />
              <MenuItem onClick={() => {}} label="contact" />
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

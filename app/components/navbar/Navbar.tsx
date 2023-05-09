"use client";

import { User } from "@prisma/client";
import Avatar from "../Avatar";
import Container from "../Container";
import BookNow from "./BookNow";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <div className="flex items-center gap-3">
              <BookNow />
              <UserMenu currentUser={currentUser} />
              <div className="hidden md:block">
                <Avatar />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;

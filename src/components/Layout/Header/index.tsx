import React, { useState } from "react";
import { HeaderHamburger } from "./headerHamburger";
import { HeaderLogo } from "./headerLogo";
import { HeaderMobileNavigation } from "./headerMobileNavigation";
import { HeaderNavigation } from "./headerNavigation";
import MaxWithBgColorContainer from "../Layout/MaxWithBgColorContainer";

const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  return (
    <MaxWithBgColorContainer>
      <header className="flex items-center justify-between w-full h-28 px-24">
        <HeaderLogo />
        <HeaderNavigation />
        <HeaderHamburger
          isMobileNavOpen={isMobileNavOpen}
          setIsMobileNavOpen={setIsMobileNavOpen}
        />
        {isMobileNavOpen && <HeaderMobileNavigation />}
      </header>
    </MaxWithBgColorContainer>
  );
};

export default Header;

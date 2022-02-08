import React, { useState } from "react";
import { HeaderHamburger } from "./headerHamburger";
import { HeaderLogo } from "./headerLogo";
import { HeaderMobileNavigation } from "./headerMobileNavigation";
import { HeaderNavigation } from "./headerNavigation";

export const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  return (
    <header className="flex items-center justify-between w-full h-40 px-8">
      <HeaderLogo />
      <HeaderNavigation />
      <HeaderHamburger
        isMobileNavOpen={isMobileNavOpen}
        setIsMobileNavOpen={setIsMobileNavOpen}
      />
      {isMobileNavOpen && <HeaderMobileNavigation />}
    </header>
  );
};

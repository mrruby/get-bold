import React from "react";

interface Props {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderHamburger: React.FC<Props> = ({
  isMobileNavOpen,
  setIsMobileNavOpen,
}) => {
  const hamburgerMenuToggle = () => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    } else {
      setIsMobileNavOpen(true);
    }
  };

  return (
    <nav className="lg:hidden z-30">
      <button onClick={() => hamburgerMenuToggle()} aria-label="Otwórz menu nawigacyjne">
        {isMobileNavOpen ? (
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
    </nav>
  );
};

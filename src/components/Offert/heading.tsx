import React from "react";

export const HeadingOffert = () => {
  return (
    <main className="p-8 -mt-40 pt-64 -z-10 flex flex-col items-center text-center">
      <h2 className="text-xl font-bebas text-[#EF6278] mb-[22px] lg:w-[1024px]">
        OFERTA
      </h2>
      <h3 className="text-3xl lg:text-5xl lg:w-[1024px] leading-snug text-[#1F2957] font-medium mb-[30px]">
        Docieramy do Twoich klientów <br />{" "}
        <span className="font-bold">najlepszą możliwą drogą.</span>
      </h3>
      <p className="text-lg lg:text-xl font-medium">
        A Ty zawsze wiesz, jak nam idzie. Jak dokładnie wygląda współpraca z
        nami?
      </p>
    </main>
  );
};

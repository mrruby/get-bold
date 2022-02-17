import React from "react";

export const HeadingAbout = () => {
  return (
    <main className="p-8 -mt-40 pt-64 -z-10 flex flex-col items-center text-center">
      <h2 className="text-xl font-bebas text-[#EF6278] mb-[22px] lg:w-[1024px]">
        O NAS
      </h2>
      <h3 className="text-3xl lg:text-4xl lg:w-[1024px] text-[#1F2957] font-bold mb-[30px]">
        Poznajmy się!
      </h3>
      <p className="text-base font-medium lg:w-[777px]">
        GetBold to ekipa osób, które po latach pracy w agencjach marketingowych
        poszły na swoje. Mieliśmy okazję zobaczyć wiele sukcesów, ale i porażek,
        i wyciągnąć z nich to, co modnie nazywa się{" "}
        <span className="font-bold">know-how</span>.
      </p>

      <div className="lg:max-w-[1176px] lg:max-h-[372px] mt-32 bg-white py-6 lg:py-[64px] px-8 lg:px-[123px] rounded-lg shadow-[0_-81px_50px_#0000000D]">
        <p className="font-medium lg:text-base">
          Znamy się na marketingu, w social mediach czujemy się jak ryby w
          wodzie, a aplikacje mobilne nie mają przed nami tajemnic. Jak się w
          tym odnajdujemy? To proste – sami korzystamy ze wszystkiego na co
          dzień. <br />
          <br /> Przed popadnięciem w rutynę ratują nas podróże, które pozwalają
          nam tworzyć dla Ciebie świeży i kreatywny content. Jeśli potrzebujesz
          czegoś, co naprawdę wyróżni Twoją markę, będziemy zachwyceni, mogąc
          działać nad tym wspólnie z Tobą!
        </p>
      </div>
    </main>
  );
};

import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="2xl:px-[21rem] px-8 xl:px-[150px] py-24 lg:py-40 relative">
      <div className="absolute bottom-0 left-0 h-full w-full bg-image-home-footer -z-10"></div>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 mb-20 lg:m-0">
          <StaticImage
            src="../../images/logo-footer.svg"
            alt="logo"
            className="mb-[3.5rem]"
          />
          <nav>
            <ul className="space-y-4 text-getbold-btn-pink font-bold mb-[3.5rem]">
              <li>Home</li>
              <li>Marketing</li>
              <li>O Nas</li>
              <li>Proces</li>
              <li>Opinie</li>
            </ul>
          </nav>
          <div className="flex space-x-8 items-center">
            <StaticImage src="../../images/facebook.svg" alt="facebook" />
            <StaticImage src="../../images/linkedin.svg" alt="linkedin" />
            <StaticImage src="../../images/email.svg" alt="email" />
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <p className="tracking-[4px] text-xl font-bebas text-getbold-pink mb-4">
            Potrzebujesz wsparcia?
          </p>
          <h4 className="font-bold text-5xl mb-[54px] ">
            Daj znać, oddzwonimy!
          </h4>
          <form>
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-x-8 sm:space-y-0">
              <input
                type="text"
                placeholder="Imię i nazwisko"
                className="border-0 border-b-2 border-getbold-blue text-[#233176] placeholder:text-[#233176] focus:ring-0 focus:border-getbold-blue p-0 py-4 w-full text-sm bg-transparent"
              />
              <input
                type="text"
                placeholder="Nazwa firmy"
                className="border-0 border-b-2 border-getbold-blue text-[#233176] placeholder:text-[#233176] focus:ring-0 focus:border-getbold-blue p-0 py-4 w-full text-sm bg-transparent"
              />
              <select className="text-sm border-0 border-b-2 border-getbold-blue text-[#233176] placeholder:text-[#233176] focus:ring-0 focus:border-getbold-blue p-0 py-4 w-full bg-transparent">
                <option value="" selected disabled hidden>
                  Co Cię interesuje?
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
            <div>
              <textarea
                name=""
                id=""
                rows={8}
                placeholder="Twoja wiadomość"
                className="w-full resize-none border-0 border-b-2 border-getbold-blue text-[#233176] placeholder:text-[#233176] focus:ring-0 focus:border-getbold-blue p-0 mt-[54px] text-sm bg-transparent"
              ></textarea>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start mt-[38px]">
              <div className="flex sm:justify-between items-start space-x-4 sm:w-1/2 w-full mb-12 sm:m-0">
                <input
                  className="mt-0.5 text-[#EF6278] bg-[#FFA3B1] w-[18px] h-[18px] outline-none border-2 border-[#EF6278] rounded-none focus:ring-0"
                  type="checkbox"
                />
                <p className="sm:w-[22rem] w-full text-xs">
                  Facilis voluptates tempora rerum quis exercitationem omnis
                  dolorum illum culpa. Sequi error voluptatem veniam qui
                  temporibus in alias fugit. Sunt est eos eligendi et quia
                  deleniti tempora. Qui qui sed esse.
                </p>
              </div>
              <button className="rounded-3xl bg-getbold-blue w-1/2 sm:ml-8 py-3 text-white font-semibold pointer">
                Wyślij wiadomość!
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full h-[5.125rem] mt-[87px] bg-[#FFAAB7] absolute left-0">
        <nav className="2xl:px-[21rem] px-8 xl:px-[150px] h-full">
          <ul className="flex items-center space-x-12 text-getbold-btn-pink h-full">
            <li>Polityka Prywatności</li>
            <li>Polityka ochrony danych osobowych</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

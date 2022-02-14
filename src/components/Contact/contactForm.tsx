import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const ContactForm: React.FC = () => {
  return (
    <main className="flex flex-col items-center mx-8">
      <div className="lg:max-w-[1176px] mt-32 bg-white pt-6 lg:pt-0 px-8 lg:px-[123px] rounded-lg shadow-[0_-81px_50px_#0000000D] flex flex-col space-y-16 md:flex-col md:space-x-20 md:space-y-0">
        <div className="w-full md:w-1/2 flex flex-col items-end">
          <StaticImage src="../../images/contact-img.svg" alt="Kontakt" />
          <p className="text-lg text-right font-medium">
            Skontaktuj się z nami, jeśli wiesz dobrze, czego chcesz lub…
            kompletnie nie masz pojęcia, czego potrzebujesz. W końcu jesteśmy tu
            po to, by przeprowadzić Cię przez marketingową i technologiczną
            dżunglę.
          </p>
          <ul className="flex text-2xl items-center justify-center space-x-8 mt-10">
            <a href="https://facebook.com/">
              <li>
                <FaFacebookF />
              </li>
            </a>
            <a href="https://linkedin.com/">
              <li>
                <FaLinkedinIn />
              </li>
            </a>
            <a href="mailto:kontakt@getbold.agency/">
              <li>
                <IoMdMail />
              </li>
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:pt-[82px]">
          <h3 className="font-bold text-3xl mb-8">Formularz Kontaktowy</h3>
          <form>
            <div className="flex flex-col items-center space-y-8">
              <input
                type="text"
                placeholder="Imię i nazwisko"
                className="border-0 border-b-2 border-getbold-blue text-[#233176] placeholder:text-[#233176] focus:ring-0 focus:border-getbold-blue p-0 py-4 w-full text-sm bg-transparent"
              />
              <input
                type="text"
                placeholder="Adres E-mail"
                className="border-0 border-b-2 border-getbold-blue text-[#233176] placeholder:text-[#233176] focus:ring-0 focus:border-getbold-blue p-0 py-4 w-full text-sm bg-transparent"
              />
              <input
                type="text"
                placeholder="Strona www firmy (opcjonalnie)"
                className="border-0 border-b-2 border-getbold-blue text-[#233176] placeholder:text-[#233176] focus:ring-0 focus:border-getbold-blue p-0 py-4 w-full text-sm bg-transparent"
              />
              <input
                type="text"
                placeholder="Kilka słów o projekcie (opcjonalnie)"
                className="border-0 border-b-2 border-getbold-blue text-[#233176] placeholder:text-[#233176] focus:ring-0 focus:border-getbold-blue p-0 py-4 w-full text-sm bg-transparent"
              />
              <textarea
                name=""
                id=""
                rows={8}
                placeholder="Twoja wiadomość"
                className="w-full resize-none border-0 border-b-2 border-getbold-blue text-[#233176] placeholder:text-[#233176] focus:ring-0 focus:border-getbold-blue p-0 mt-[54px] text-sm bg-transparent"
              ></textarea>
              <div className="flex items-start space-x-8 w-full mb-12">
                <input
                  className="mt-0.5 text-[#EF6278] bg-[#FFA3B1] w-[18px] h-[18px] outline-none border-2 border-[#EF6278] rounded-none focus:ring-0"
                  type="checkbox"
                />
                <p className="sm:w-[22rem] w-full text-xs font-medium">
                  Facilis voluptates tempora rerum quis exercitationem omnis
                  dolorum illum culpa. Sequi error voluptatem veniam qui
                  temporibus in alias fugit. Sunt est eos eligendi et quia
                  deleniti tempora. Qui qui sed esse.
                </p>
              </div>
              <button className="rounded-3xl bg-getbold-blue w-full py-3 text-white font-semibold pointer">
                Wyślij wiadomość!
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
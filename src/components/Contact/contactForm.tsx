import { StaticImage } from "gatsby-plugin-image";
import ReCAPTCHA from "react-google-recaptcha";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Button } from "../../helpers/Button";

export const ContactForm: React.FC = () => {
  return (
    <main className="flex flex-col items-center mx-8">
      <div className="lg:max-w-[1176px] mt-32 bg-white pt-6 lg:pt-0 px-8 lg:px-[123px] rounded-lg shadow-[0_-81px_50px_#0000000D] flex flex-col space-y-16 md:flex-row md:space-x-20 md:space-y-0">
        <div className="w-full md:w-1/2 flex flex-col items-end">
          <StaticImage placeholder="none" src="../../images/contact-img.svg" alt="Kontakt" />
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
          <form
            method="POST"
            data-netlify="true"
            name="contact-page"
            data-netlify-recaptcha="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact-page" />
            <div className="flex flex-col items-center space-y-8">
              <input
                required
                type="text"
                name="name"
                placeholder="Imię i nazwisko"
                className="border-0 border-b-2 border-getbold-blue text-[#233176] placeholder:text-[#233176] focus:ring-0 focus:border-getbold-blue p-0 py-4 w-full text-sm bg-transparent"
              />
              <input
                required
                type="text"
                name="e-mail"
                placeholder="Adres E-mail"
                className="border-0 border-b-2 border-getbold-blue text-[#233176] placeholder:text-[#233176] focus:ring-0 focus:border-getbold-blue p-0 py-4 w-full text-sm bg-transparent"
              />
              <input
                type="text"
                name="www"
                placeholder="Strona www firmy (opcjonalnie)"
                className="border-0 border-b-2 border-getbold-blue text-[#233176] placeholder:text-[#233176] focus:ring-0 focus:border-getbold-blue p-0 py-4 w-full text-sm bg-transparent"
              />
              <input
                type="text"
                name="project"
                placeholder="Kilka słów o projekcie (opcjonalnie)"
                className="border-0 border-b-2 border-getbold-blue text-[#233176] placeholder:text-[#233176] focus:ring-0 focus:border-getbold-blue p-0 py-4 w-full text-sm bg-transparent"
              />
              <textarea
                required
                name="message"
                rows={8}
                placeholder="Twoja wiadomość"
                className="w-full resize-none border-0 border-b-2 border-getbold-blue text-[#233176] placeholder:text-[#233176] focus:ring-0 focus:border-getbold-blue p-0 mt-[54px] text-sm bg-transparent"
              ></textarea>
              <div className="flex items-start space-x-8 w-full mb-12">
                <input
                  required
                  className="mt-0.5 text-[#EF6278] bg-[#FFA3B1] w-[18px] h-[18px] outline-none border-2 border-[#EF6278] rounded-none focus:ring-0"
                  type="checkbox"
                />
                <p className="sm:w-[22rem] w-full text-xs font-medium">
                  Wyrazam zgode na przetwarzanie moich danych osobowych zgodnie
                  z ustawą o ochronie danych osobowych w celu (np wysyłania
                  informacji handlowei). Podanie danych osobowych jest
                  dobrowolne. Zostałem poinformowany, ze przysługuje mi prawo
                  dostepu do swoich danych, mozliwosci ich poprawiania, zadania
                  zaprzestania ich przetwarzania. Administratorem danych jest
                  GetBold Agency z siedzibą w 41-500 Chorzów ul. Żołnierzy
                  Września 79/6.
                </p>
              </div>
              <ReCAPTCHA sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY} />
              <Button
                type={"submit"}
                color={"blue"}
                text={"Wyślij wiadomość!"}
                isWFull={true}
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

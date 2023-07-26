import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import ReCAPTCHA from "react-google-recaptcha";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { LeftCloud, RightCloud } from "../../../helpers/LayoutElements";

interface Props {
  isWhiteBg: boolean;
  isContactPage: boolean;
}

const Footer: React.FC<Props> = ({ isWhiteBg, isContactPage }) => {
  if (isContactPage)
    return (
      <div className="w-full h-[5.125rem] mt-[87px] bg-[#FFAAB7]">
        <nav className="2xl:px-[21rem] px-8 xl:px-[150px] h-full">
          <ul className="flex flex-col md:flex-row justify-center md:justify-start items-start md:items-center space-y-2 md:space-y-0 md:space-x-12 text-getbold-btn-pink text-xs h-full">
            <li>
              <Link to="/polityka-prywatnosci">Polityka prywatności & plików cookie</Link>
            </li>
          </ul>
        </nav>
      </div>
    );

  return (
    <footer className="2xl:px-[21rem] px-8 xl:px-[150px] py-12 lg:py-14 relative bg-[#FFB9C4]">
      <div className="flex flex-col lg:flex-row mb-8 bg-contact">
        <div className="w-full lg:w-2/3 z-30 flex flex-col items-center m-auto">
          <h4 className="font-bold text-4xl mb-[36px]">Zostaw kontakt, odezwiemy się!</h4>
          <form
            method="POST"
            data-netlify-recaptcha="true"
            data-netlify="true"
            name="contact-main"
            netlify-honeypot="bot-field"
          >
            <div className="flex flex-col gap-y-3 lg:gap-y-4 items-center m-auto lg:ml-0 w-11/12 lg:max-w-[387px]">
              <label className="lg:text-getBoldBase">Imię i nazwisko</label>
              <input
                type="text"
                name="name"
                required
                className="border-0 bg-getbold-pink-input rounded-input shadow-div focus:ring-0 focus:border-getbold-blue px-4 py-5 w-full text-sm mb-[20px]"
              />
            </div>
            <div className="flex flex-col gap-y-3 lg:gap-y-4 items-center m-auto lg:ml-0 w-11/12 lg:max-w-[387px]">
              <label className="lg:text-getBoldBase">Adres e-mail</label>
              <input
                type="email"
                name="mail"
                required
                className="border-0 bg-getbold-pink-input rounded-input shadow-div focus:ring-0 focus:border-getbold-blue px-4 py-5 w-full text-sm mb-[20px]"
              />
            </div>
            <div className="flex flex-col lg:flex-row w-full">
              <div className="flex flex-col gap-y-3 lg:gap-y-4 items-center w-11/12 lg:w-[387px] mx-auto mt-6 flex-auto mb-6">
                <label className="lg:text-getBoldBase">Czego potrzebujesz?</label>
                <textarea
                  required
                  name="text"
                  rows={8}
                  className="border-0 bg-getbold-pink-input rounded-input shadow-div focus:ring-0 focus:border-getbold-blue px-4 py-5 w-full text-sm"
                ></textarea>
              </div>
              <div className="flex flex-col justify-end flex-none pl-6">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact-main" />
                <div className="flow-root">
                  <ReCAPTCHA sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY} />
                  <button className="mt-4 lg:text-getBoldBase rounded-3xl bg-getbold-dark-pink px-6 py-3 text-white pointer hover:shadow-lg hover:bg-getbold-btn-light-pink transition-all">
                    Wysyłam
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-start my-[28px] lg:max-w-[660px]">
              <input
                className="mb-2 text-[#EF6278] bg-getbold-pink-input w-[18px] h-[18px] outline-none border-4 border-[#EF6278] rounded-full focus:ring-0"
                required
                type="checkbox"
              />
              <p className="text-[14px] w-full text-xs leading-normal">
                Wyrazam zgode na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie
                danych osobowych w celu (np wysyłania informacji handlowei). Podanie danych
                osobowych jest dobrowolne. Zostałem poinformowany, ze przysługuje mi prawo dostepu
                do swoich danych, mozliwosci ich poprawiania, zadania zaprzestania ich
                przetwarzania. Administratorem danych jest GetBold Agency z siedzibą w 41-500
                Chorzów ul. Żołnierzy Września 79/6.
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="w-full h-[5.125rem] mt-[87px] bg-[#FFAAB7] absolute left-0 bottom-0">
        <nav className="2xl:px-[21rem] px-8 xl:px-[150px] h-full">
          <ul className="flex flex-col md:flex-row justify-center md:justify-end items-start md:items-center space-y-2 md:space-y-0 md:space-x-12 text-getbold-blue text-xs h-full">
            <li>
              <Link to="/polityka-prywatnosci">Polityka prywatności & plików cookie</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* white bg */}
      {isWhiteBg && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2814.801"
          height="895.874"
          className="absolute -top-[800px] lg:-top-[770px] -left-[450px] z-10"
          viewBox="0 0 2814.801 895.874"
        >
          <path
            id="Path_4472"
            data-name="Path 4472"
            d="M388.7,158.531,2233.4,34l547.685,102.629L2814.8,656.623,2616.09,683.547l-152.7,162.182-1080.17,34.926L619.231,929.873,438.964,880.655,0,739.529Z"
            transform="translate(0 -34)"
            fill="#fff"
          />
        </svg>
      )}
    </footer>
  );
};

export default Footer;

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Parallax } from "react-scroll-parallax";

interface Props {
  isWhiteBg: boolean;
}

const Footer: React.FC<Props> = ({ isWhiteBg }) => {
  return (
    <footer className="2xl:px-[21rem] px-8 xl:px-[150px] py-24 lg:py-40 relative w-full bg-[#FFB9C4]">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 mb-20 lg:m-0 z-30">
          <StaticImage
            src="../../../images/logo-footer.svg"
            alt="logo"
            className="mb-[3.5rem]"
          />
          <nav>
            <ul className="space-y-4 text-getbold-btn-pink font-bold mb-[3.5rem]">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/oferta">Oferta</Link>
              </li>
              <li>
                <Link to="/o-nas">O Nas</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </nav>
          <ul className="flex text-2xl items-center space-x-8 mt-10">
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
        <div className="w-full lg:w-2/3 z-30">
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
              <button className="rounded-3xl bg-getbold-blue w-full md:w-1/2 sm:ml-8 py-3 text-white font-semibold pointer hover:shadow-lg hover:bg-[#2d3786] transition-all">
                Wyślij wiadomość!
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full h-[5.125rem] mt-[87px] bg-[#FFAAB7] absolute left-0">
        <nav className="2xl:px-[21rem] px-8 xl:px-[150px] h-full">
          <ul className="flex items-center space-x-12 text-getbold-btn-pink h-full">
            <li>
              <Link to="/polityka-prywatnosci">Polityka Prywatności</Link>
            </li>
            <li>
              <Link to="/polityka-ochrony-danych-osobowych">
                Polityka ochrony danych osobowych
              </Link>
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

      {/* right cloud */}
      <Parallax
        speed={10}
        className="absolute top-8 md:top-0 -right-24 md:-right-40 z-10 w-[250px] md:w-[400px] h-auto"
      >
        <img src="../../../../footer-cloud-right.svg" alt="cloud" />
      </Parallax>

      {/* left cloud */}
      <Parallax
        speed={-20}
        className="absolute top-[500px] -left-24 md:-left-40 z-10 w-[250px] md:w-[400px] h-auto"
      >
        <img src="../../../../footer-cloud-left.svg" alt="cloud2" />
      </Parallax>
    </footer>
  );
};

export default Footer;

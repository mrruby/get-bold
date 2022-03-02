import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Layout from "../components/Layout/Layout";
import { PageHeading } from "../helpers/PageHeading";

export const PrivacyPolicyPage = () => {
  return (
    <ParallaxProvider>
      <Layout
        title={"Polityka Prywatności - GetBold"}
        yellowCircle={false}
        yellowCircle2={false}
        orangeHex={false}
        grayTriangle={false}
        pinkTriangle={false}
        blueHex={false}
        redCircle={false}
        yellowSquare={false}
        blueSquare={false}
        heroBG={true}
        firstMidBG={false}
        secMidBG={false}
        isSubPage={true}
        cube={false}
        graph={false}
        card={false}
        leftCloud={true}
        rightCloud={true}
        flower={true}
        coin={false}
        chat={false}
        ball={false}
        pinkChart={false}
        blueCube={false}
        isContactPage={false}
        footerWhiteBg={true}
      >
        <div className="flex flex-col items-center w-full">
          <PageHeading pageName="Polityka Prywatności" />
          <div className="lg:max-w-[1176px] bg-white py-6 lg:py-[64px] px-8 lg:px-[123px] rounded-lg shadow-[0_-81px_50px_#0000000D]">
            <h2 className="text-3xl font-bold mb-8">Polityka prywatności </h2>
            <h3 className="text-lg font-bold mb-2">1. Informacje ogólne</h3>
            <p className="mb-8">
              Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod
              adresem url: getbold.agency Operatorem serwisu oraz
              Administratorem danych osobowych jest: Dawid Urbas Get Bold ul.
              Żołnierzy Września 79/ 6, 41-500 Chorzów Adres kontaktowy poczty
              elektronicznej operatora: dawid@getbold.agency Operator jest
              Administratorem Twoich danych osobowych w odniesieniu do danych
              podanych dobrowolnie w Serwisie. Serwis wykorzystuje dane osobowe
              w następujących celach:
              <ul className="list-disc pl-4 py-2">
                <li>Obsługa zapytań przez formularz</li>
                <li>Prezentacja oferty lub informacji</li>
              </ul>
              Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i
              ich zachowaniu w następujący sposób:
              <ul className="list-disc pl-4 py-2">
                <li>
                  Poprzez dobrowolnie wprowadzone w formularzach dane, które
                  zostają wprowadzone do systemów Operatora.
                </li>
                <li>
                  Poprzez zapisywanie w urządzeniach końcowych plików cookie
                  (tzw. „ciasteczka”).
                </li>
              </ul>
            </p>

            <h3 className="text-lg font-bold mb-2">
              2. Wybrane metody ochrony danych stosowane przez Operatora
            </h3>
            <p className="mb-8">
              Miejsca logowania i wprowadzania danych osobowych są chronione w
              warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i
              dane logowania wprowadzone na stronie, zostają zaszyfrowane w
              komputerze użytkownika i mogą być odczytane jedynie na docelowym
              serwerze.
            </p>

            <h3 className="text-lg font-bold mb-2">3. Hosting</h3>
            <p className="mb-8">
              Serwis jest hostowany (technicznie utrzymywany) na serwerach
              operatora: OVH
            </p>

            <h3 className="text-lg font-bold mb-2">
              4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania
              danych
            </h3>
            <p className="mb-8">
              W niektórych sytuacjach Administrator ma prawo przekazywać Twoje
              dane osobowe innym odbiorcom, jeśli będzie to niezbędne do
              wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków
              ciążących na Administratorze. Dotyczy to takich grup odbiorców:
              <ul className="list-disc pl-4 py-2">
                <li>firma hostingowa na zasadzie powierzenia</li>
                <li>operatorzy pocztowi</li>
                <li>
                  upoważnieni pracownicy i współpracownicy, którzy korzystają z
                  danych w celu realizacji celu działania strony
                </li>
                <li>
                  firmy, świadczące usługi marketingu na rzecz Administratora
                </li>
              </ul>
              Twoje dane osobowe przetwarzane przez Administratora nie dłużej,
              niż jest to konieczne do wykonania związanych z nimi czynności
              określonych osobnymi przepisami (np. o prowadzeniu rachunkowości).
              W odniesieniu do danych marketingowych dane nie będą przetwarzane
              dłużej niż przez 3 lata. <br /> Przysługuje Ci prawo żądania od
              Administratora:
              <ul className="list-disc pl-4 py-2">
                <li>dostępu do danych osobowych Ciebie dotyczących,</li>
                <li>ich sprostowania,</li>
                <li>usunięcia,</li>
                <li>ograniczenia przetwarzania,</li>
                <li>oraz przenoszenia danych.</li>
              </ul>
              Przysługuje Ci prawo do złożenia sprzeciwu w zakresie
              przetwarzania wskazanego w pkt 3.3 c) wobec przetwarzania danych
              osobowych w celu wykonania prawnie uzasadnionych interesów
              realizowanych przez Administratora, w tym profilowania, przy czym
              prawo sprzeciwu nie będzie mogło być wykonane w przypadku
              istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania,
              nadrzędnych wobec Ciebie interesów, praw i wolności, w
              szczególności ustalenia, dochodzenia lub obrony roszczeń. <br />
              Na działania Administratora przysługuje skarga do Prezesa Urzędu
              Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa. <br />
              Podanie danych osobowych jest dobrowolne, lecz niezbędne do
              obsługi Serwisu. <br />
              W stosunku do Ciebie mogą być podejmowane czynności polegające na
              zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu
              świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia
              przez Administratora marketingu bezpośredniego. <br />
              Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu
              przepisów o ochronie danych osobowych. Oznacza to, że nie
              przesyłamy ich poza teren Unii Europejskiej.
            </p>

            <h3 className="text-lg font-bold mb-2">
              5. Informacje w formularzach
            </h3>
            <p className="mb-8">
              Serwis zbiera informacje podane dobrowolnie przez użytkownika, w
              tym dane osobowe, o ile zostaną one podane. <br />
              Serwis może zapisać informacje o parametrach połączenia
              (oznaczenie czasu, adres IP). <br />
              Serwis, w niektórych wypadkach, może zapisać informację
              ułatwiającą powiązanie danych w formularzu z adresem e-mail
              użytkownika wypełniającego formularz. W takim wypadku adres e-mail
              użytkownika pojawia się wewnątrz adresu url strony zawierającej
              formularz. <br />
              Dane podane w formularzu są przetwarzane w celu wynikającym z
              funkcji konkretnego formularza, np. w celu dokonania procesu
              obsługi zgłoszenia serwisowego lub kontaktu handlowego,
              rejestracji usług itp. Każdorazowo kontekst i opis formularza w
              czytelny sposób informuje, do czego on służy.
            </p>

            <h3 className="text-lg font-bold mb-2">6. Logi Administratora</h3>
            <p className="mb-8">
              Informacje zachowaniu użytkowników w serwisie mogą podlegać
              logowaniu. Dane te są wykorzystywane w celu administrowania
              serwisem.
            </p>

            <h3 className="text-lg font-bold mb-2">
              7. Istotne techniki marketingowe
            </h3>
            <p className="mb-8">
              Operator stosuje analizę statystyczną ruchu na stronie, poprzez
              Google Analytics (Google Inc. z siedzibą w USA). Operator nie
              przekazuje do operatora tej usługi danych osobowych, a jedynie
              zanonimizowane informacje. Usługa bazuje na wykorzystaniu
              ciasteczek w urządzeniu końcowym użytkownika. W zakresie
              informacji o preferencjach użytkownika gromadzonych przez sieć
              reklamową Google użytkownik może przeglądać i edytować informacje
              wynikające z plików cookies przy pomocy narzędzia:
              https://www.google.com/ads/preferences/ <br />
              Operator korzysta z piksela Facebooka. Ta technologia powoduje, że
              serwis Facebook (Facebook Inc. z siedzibą w USA) wie, że dana
              osoba w nim zarejestrowana korzysta z Serwisu. Bazuje w tym
              wypadku na danych, wobec których sam jest administratorem,
              Operator nie przekazuje od siebie żadnych dodatkowych danych
              osobowych serwisowi Facebook. Usługa bazuje na wykorzystaniu
              ciasteczek w urządzeniu końcowym użytkownika.
            </p>

            <h3 className="text-lg font-bold mb-2">
              8. Informacja o plikach cookies
            </h3>
            <p className="mb-8">
              Serwis korzysta z plików cookies. <br />
              Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w
              szczególności pliki tekstowe, które przechowywane są w urządzeniu
              końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze
              stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę
              strony internetowej, z której pochodzą, czas przechowywania ich na
              urządzeniu końcowym oraz unikalny numer. <br />
              Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika
              Serwisu pliki cookies oraz uzyskującym do nich dostęp jest
              operator Serwisu. <br />
              Pliki cookies wykorzystywane są w następujących celach:
              <ul className="list-disc pl-4 py-2">
                <li>
                  utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki
                  której użytkownik nie musi na każdej podstronie Serwisu
                  ponownie wpisywać loginu i hasła;
                </li>
                <li>
                  realizacji celów określonych powyżej w części "Istotne
                  techniki marketingowe";
                </li>
              </ul>
              W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików
              cookies: „sesyjne” (session cookies) oraz „stałe” (persistent
              cookies). Cookies „sesyjne” są plikami tymczasowymi, które
              przechowywane są w urządzeniu końcowym Użytkownika do czasu
              wylogowania, opuszczenia strony internetowej lub wyłączenia
              oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies
              przechowywane są w urządzeniu końcowym Użytkownika przez czas
              określony w parametrach plików cookies lub do czasu ich usunięcia
              przez Użytkownika. <br />
              Oprogramowanie do przeglądania stron internetowych (przeglądarka
              internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików
              cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu
              mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka
              internetowa umożliwia usunięcie plików cookies. Możliwe jest także
              automatyczne blokowanie plików cookies. Szczegółowe informacje na
              ten temat zawiera pomoc lub dokumentacja przeglądarki
              internetowej. <br />
              Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre
              funkcjonalności dostępne na stronach internetowych Serwisu. <br />
              Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika
              Serwisu wykorzystywane mogą być również przez współpracujące z
              operatorem Serwisu podmioty, w szczególności dotyczy to firm:
              Google (Google Inc. z siedzibą w USA), Facebook (Facebook Inc. z
              siedzibą w USA), Twitter (Twitter Inc. z siedzibą w USA).
            </p>

            <h3 className="text-lg font-bold mb-2">
              9. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać
              zgodę?
            </h3>
            <p className="mb-8">
              Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić
              ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików
              cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa,
              utrzymania preferencji użytkownika może utrudnić, a w skrajnych
              przypadkach może uniemożliwić korzystanie ze stron www. <br />W
              celu zarządzania ustawienia cookies wybierz z listy poniżej
              przeglądarkę internetową, której używasz i postępuj zgodnie z
              instrukcjami:
              <ul className="list-disc pl-4 py-2">
                <li>Edge</li>
                <li>Internet Explorer</li>
                <li>Chrome</li>
                <li>Safari</li>
                <li>Firefox</li>
                <li>Opera</li>
              </ul>
              Urządzenia mobilne:
              <ul className="list-disc pl-4 py-2">
                <li>Android</li>
                <li>Safari (iOS)</li>
                <li>Windows Phone</li>
              </ul>
            </p>
          </div>
        </div>
      </Layout>
    </ParallaxProvider>
  );
};

export default PrivacyPolicyPage;

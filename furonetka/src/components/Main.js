import commisionImage from "../images/illustration-features-partner-01.svg";
import affiliativeImage from "../images/illustration-features-partner-02.svg";
import regularIncomeImage from "../images/illustration-features-partner-03.svg";

export const Main = () => {
  return (
    <>
      <main className="main">
        <div className="main__content">
          <div className="profits">
            <div className="profits__container">
              <h3>Co zyskujesz zostając partnerem?</h3>
            </div>
            <div className="profits__content">
              <div className="profits__box">
                <img
                  className="profits__image"
                  src={commisionImage}
                  alt="Stała prowizja"
                />
                <p>
                  <b>Stała prowizja procentowa</b> od kazdej dostarczonej
                  przesyłki. Zarabiaj nawet 2zł na przesyłce.
                </p>
              </div>
              <div className="profits__box">
                <img
                  className="profits__image"
                  src={affiliativeImage}
                  alt="Prosty i przejrzysty program partnerski"
                />
                <p>
                  <b>Prosty i przejrzysty program partnerski,</b> dzięki któremu
                  wiesz, ile zarobisz.
                </p>
              </div>
              <div className="profits__box">
                <img
                  className="profits__image"
                  src={regularIncomeImage}
                  alt="Stały dochód"
                />
                <p>
                  Raz pozyskany klient, który <b>przynosi Ci stały dochód.</b>
                </p>
              </div>
            </div>
          </div>
          <div className="main__content about-furgonetka">cyferki</div>
          <div className="main__content footer">Stopka</div>
        </div>
      </main>
    </>
  );
};

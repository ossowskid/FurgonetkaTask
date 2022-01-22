import commisionImage from "../images/illustration-features-partner-01.svg";
import affiliativeImage from "../images/illustration-features-partner-02.svg";
import regularIncomeImage from "../images/illustration-features-partner-03.svg";
import experienceImage from "../images/ic-experience-bg.svg";
import satisfiedImage from "../images/ic-satisfied-clients-bg.svg";
import reviewImage from "../images/ic-reviews-bg.svg";
import parcelImage from "../images/ic-parcels-bg.svg";

export const Main = () => {
  return (
    <>
      <main className="main">
        <div className="main__content">
          <div className="profits">
            <div className="profits__container">
              <p style={{ fontSize: "20px" }}>
                Co zyskujesz zostając partnerem?
              </p>
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
          <div className="experience">
            <div className="experience__content">
              <div className="experience__box">
                <img
                  className="experience__image"
                  src={experienceImage}
                  alt="długość doświadczenia"
                />
                <h4>9</h4>
                <p>lat doświadczenia</p>
              </div>
              <div className="experience__box">
                <img
                  className="experience__image"
                  src={satisfiedImage}
                  alt="ilość zadowolonych klientów"
                />
                <h4>870 000</h4>
                <p>zadowolonych klientów</p>
              </div>
              <div className="experience__box">
                <img
                  className="experience__image"
                  src={reviewImage}
                  alt="ilość pozytywnych opinii na Opineo.pl"
                />
                <h4>55 000</h4>
                <p>pozytywnych opinii na Opineo.pl</p>
              </div>
              <div className="experience__box">
                <img
                  className="experience__image"
                  src={parcelImage}
                  alt="ilość nadanych przesyłek"
                />
                <h4>25 000 000</h4>
                <p>nadanych przesyłek</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

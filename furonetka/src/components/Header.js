import { useState } from "react";
import "../index.css";

export const Header = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (event) => {
    console.log(event.target);
  };

  return (
    <>
      <header className="header__background">
        <div className="container">
          <div className="information">
            <h2>Furgonetka</h2>
            <p style={{ fontSize: "18px" }}>
              Zarejestruj się i zostań naszym partnerem VIP
            </p>
            <p>
              Przesyłki dla Twoich klientów juz <b>od 8zł</b>
            </p>
            <p style={{ color: "#228cc5" }}>
              Udostępnij najlepszą ofertę na rynku i dodatkowo zarabiaj
            </p>
            <form className="form">
              <p>Zacznij zarabiać w 5 minut</p>
              <p style={{ fontSize: "12px" }}>
                Zarejestruj się w minutę i sprawdź, jak to działa
              </p>
              <input
                type="text"
                name="email"
                placeholder="jan.kowalski@gmail.com"
                value={formValues.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Hasło"
                value={formValues.password}
                onChange={handleChange}
                required
              />
              <p style={{ color: "#919191", fontSize: "9px" }}>
                Uzyj od 6 do 24 znaków. Nie uzywaj łatwych sekwencji, np.
                "123456"
              </p>
              <button type="submit" className="btn__submit">
                Załóz darmowe konto
              </button>
            </form>
          </div>
        </div>
      </header>
    </>
  );
};

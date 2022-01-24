import { useState, useEffect } from "react";
import "../index.css";
import FurgonetkaLogo from "../images/Furgonetka_Logo_RGB.svg";

export const Header = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const refresh = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "To pole nie moze być puste! Proszę podać adres e-mail";
    } else if (!regex.test(values.email)) {
      errors.email = "Nieprawidłowy format!";
    }
    if (!values.password) {
      errors.password = "To pole nie moze być puste! Proszę podać hasło";
    } else if (values.password.length < 4) {
      errors.password = "Hasło musi zawierać conajmniej 4 znaki!";
    }
    return errors;
  };

  return (
    <>
      <header className="header__background">
        <div className="container">
          {Object.keys(formErrors).length === 0 && isSubmit ? refresh() : null}
          <div className="information">
            <div className="header__logo">
              <img src={FurgonetkaLogo} alt="Logo Furgonetka.pl" />
            </div>
            <p>Zarejestruj się i zostań naszym partnerem VIP</p>
            <p>
              Przesyłki dla Twoich klientów już <b>od 8zł</b>
            </p>
            <p style={{ color: "#228cc5" }}>
              Udostępnij najlepszą ofertę na rynku i dodatkowo zarabiaj
            </p>
            <div className="form">
              <div className="form__content">
                <p>Zacznij zarabiać w 5 minut</p>
                <p style={{ fontSize: "12px" }}>
                  Zarejestruj się w minutę i sprawdź, jak to działa
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form__box">
                  <div className="form__inputs">
                    <input
                      type="text"
                      name="email"
                      placeholder="jan.kowalski@gmail.com"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                    <p className="form__error">{formErrors.email}</p>
                  </div>
                  <div className="form__inputs">
                    <input
                      type="password"
                      name="password"
                      placeholder="Hasło"
                      value={formValues.password}
                      onChange={handleChange}
                    />
                    <p style={{ color: "#919191", fontSize: "9px" }}>
                      Uzyj od 6 do 24 znaków. Nie uzywaj łatwych sekwencji, np.
                      "123456"
                    </p>
                    <p className="form__error">{formErrors.password}</p>
                  </div>
                  <button type="submit" className="btn__submit">
                    Załóż darmowe konto
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

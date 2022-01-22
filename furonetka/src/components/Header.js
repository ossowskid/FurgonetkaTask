import { useState, useEffect } from "react";
import "../index.css";

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

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[%\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "To pole nie moze być puste! Proszę podać adres e-mail";
    }
    if (!values.password) {
      errors.password = "To pole nie moze być puste! Proszę podać hasło";
    }
    return errors;
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
            {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
          </div>
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
                  Załóz darmowe konto
                </button>
              </div>
            </form>
          </div>
        </div>
      </header>
    </>
  );
};

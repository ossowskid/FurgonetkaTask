import "../index.css";

export const Header = () => {
  return (
    <>
      <header class="header__background">
        <div class="container">
          <div class="information">
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
            <form class="form">
              <p>Zacznij zarabiać w 5 minut</p>
              <p style={{ fontSize: "12px" }}>
                Zarejestruj się w minutę i sprawdź, jak to działa
              </p>
              <label for="email" />
              <input
                type="text"
                name="email"
                id="name"
                placeholder="jan.kowalski@gmail.com"
                required
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Hasło"
                required
              />
              <p style={{ color: "#919191", fontSize: "9px" }}>
                Uzyj od 6 do 24 znaków. Nie uzywaj łatwych sekwencji, np.
                "123456"
              </p>
              <button type="submit" class="btn__submit">
                Załóz darmowe konto
              </button>
            </form>
          </div>
        </div>
      </header>
    </>
  );
};

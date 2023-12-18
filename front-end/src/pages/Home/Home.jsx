import React from "react";

const Home = () => {
  return (
    <React.StrictMode>
      <main className="homeContent">
        <section className="welcomeElmts">
          <h2>
            Bonjour <span>Thomas</span>
          </h2>
          <br />
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
        <section className="dataContainer">
          <div className="lColumn">
            <div className="row top">Bonjour</div>
            <div className="row bot">
              <div>BLC1</div>
              <div>BLC2</div>
              <div>BLC3</div>
            </div>
          </div>
          <div className="rColumn">Mr</div>
        </section>
      </main>
    </React.StrictMode>
  );
};

export default Home;

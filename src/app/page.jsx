export default function Home() {
  return (
    <div>
      <main>
        <div className="back-picture">
          <img className="picture" src="/eglise-face.jpg" />
          <div className="back-content">
            <h1>NOTRE EGLISE SAINT PIERRE</h1>
             <span className="red-bar"></span>
            <p>L'église Saint-Pierre de Voiron ou église Saint-Pierre de Sermorens, est un édifice religieux situé à Voiron en Isère en région Auvergne-Rhône-Alpes. Positionnée au cœur du quartier ancien de Sermorens, cette église est l’un des plus vieux monuments de la ville de Voiron avec la tour Barral, dernier vestige de l'ancien château médiéval. L'église est rattachée à la paroisse Notre-Dame de Vouise, elle-même rattachée au diocèse de Grenoble-Vienne.</p>
            <button className="more">En savoir + </button>
          </div>
        </div>
        <section className="cards-container">
          <div className="card"><h2>Eglise Saint Pierre</h2>
           <span className="red-bar"></span>
            <ul><li>52 rue Sermorens, VOIRON (38500 ) </li>
              <li>N°09 65 20 29 48 </li></ul>
            <a><button className="button">Nous contacter</button></a>
          </div>
          <div className="card"><h2>Période d'ouverture</h2>  <span className="red-bar"></span><ul><li>Lundi : 9H-19H30</li><li>Lundi : 9H-19H30</li><li>Lundi : 9H-19H30</li><li>Lundi : 9H-19H30</li><li>Lundi : 9H-19H30</li><li>Lundi : 9H-19H30</li><li>Lundi : 9H-19H30</li></ul></div>
          <div className="card"><h2>Caractéristique</h2>  <span className="red-bar"></span><p>Tarif : Gratuit <br></br>Animaux refusés </p></div>
        </section>

        <div className="map-info-container">
          <div className="carte"><img src="/carte.jpg"></img></div>
          <div className="info-box">
            <h2>ACCÈS</h2>
            <div className="info-section">
              <span className="red-bar"></span>
              <p>Tramway A et B arrêt Saint Bruno</p>
              <p><strong>Latitude :</strong> 45.186722<br></br>
                <strong>Longitude :</strong> 5.714025</p>
            </div>

            <h2>ENVIRONNEMENT</h2>
            <div className="info-section">
              <span className="red-bar"></span>
              <p>En ville</p>
              <p>Arrêt de transport en commun à moins de 500 m<br></br>
                Station de tram à moins de 500 m</p>
            </div>

            <button className="map-button">Voir la carte interactive</button>
          </div>
        </div>

      </main>
      <footer >

      </footer>
    </div>
  );
}

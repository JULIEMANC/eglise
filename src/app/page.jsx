export default function Home() {
  return (
    <div>
      <main>
        <div className="back-picture">
          <img className="picture" src="/ext-eglise.jpg" />
          <div className="back-content">
            <h1>NOTRE ÉGLISE SAINT-PIERRE</h1>
            <span className="red-bar"></span>
            <p>L'église Saint-Pierre de Voiron ou église Saint-Pierre de Sermorens, est un édifice religieux situé à Voiron en Isère en région Auvergne-Rhône-Alpes. Positionnée au cœur du quartier ancien de Sermorens, cette église est l’un des plus vieux monuments de la ville de Voiron avec la tour Barral, dernier vestige de l'ancien château médiéval. L'église est rattachée à la paroisse Notre-Dame de Vouise, elle-même rattachée au diocèse de Grenoble-Vienne.</p>
            <a href="https://fr.wikipedia.org/wiki/%C3%89glise_Saint-Pierre_de_Voiron">  <button className="more">En savoir + </button></a>
          </div>
        </div>

        <section className="cards-container">
          <div className="card">
            <h2>Église Saint Pierre</h2>
            <span className="red-bar"></span>
            <ul>
              <li>52 rue Sermorens, VOIRON (38500)</li>
              <li>N°09 65 20 29 48</li>
              <li>E-mail :eglise@example.com </li>
            </ul>
            <a><button className="button">Nous contacter</button></a>
          </div>

          <div className="card">
            <h2>Période d'ouverture</h2>
            <span className="red-bar"></span>
            <ul>
              <li>Lundi : 9H-19H30</li>
              <li>Mardi : 9H-19H30</li>
              <li>Mercredi : 9H-19H30</li>
              <li>Jeudi : 9H-19H30</li>
              <li>Vendredi : 9H-19H30</li>
              <li>Samedi : 9H-19H30</li>
              <li>Dimanche : 9H-19H30</li>
            </ul>
          </div>

          <div className="card">
            <h2>Caractéristique</h2>
            <span className="red-bar"></span>
            <p>Tarif : Gratuit <br />Animaux refusés</p>
          </div>
        </section>

        <section id="gallery-section">
          <div className="gallery-grid">
            <div className="gallery-card">
              <img src="/dieu (1).avif" alt="Église 1" />
            </div>
            <div className="gallery-card">
              <img src="/back-eglise.jpg" alt="Église 2" />
            </div>
            <div className="gallery-card">
              <img src="/dieu (1).webp" alt="Saint 1" />
            </div>
            <div className="gallery-card">
              <img src="/interieur-eglise.jpg" alt="Saint 2" />
            </div>
            <div className="gallery-card">
              <img src="/dieu (2).avif" alt="Statue" />
            </div>
            <div className="gallery-card">
              <img src="/eglise-face.jpg" alt="Vitrail" />
            </div>

          </div>
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

        <div id="messes-table-container">
          <h2>Messes de Juin 2025</h2>
          <span className="red-bar"></span>
          <table className="messes-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Heure</th>
                <th>Lieu</th>
                <th>Célébrant</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dimanche 2 Juin</td>
                <td>10h30</td>
                <td>Église Saint-Michel</td>
                <td>Abbé Jean Dupont</td>
              </tr>
              <tr>
                <td>Mercredi 5 Juin</td>
                <td>18h00</td>
                <td>Chapelle Sainte-Anne</td>
                <td>Père Luc Martin</td>
              </tr>
              <tr>
                <td>Dimanche 9 Juin</td>
                <td>10h30</td>
                <td>Église Saint-Michel</td>
                <td>Abbé Jean Dupont</td>
              </tr>
              <tr>
                <td>Dimanche 2 Juin</td>
                <td>10h30</td>
                <td>Église Saint-Michel</td>
                <td>Abbé Jean Dupont</td>
              </tr>
              <tr>
                <td>Dimanche 2 Juin</td>
                <td>10h30</td>
                <td>Église Saint-Michel</td>
                <td>Abbé Jean Dupont</td>
              </tr>
            </tbody>
          </table>
        </div>
        <section id="clerge-section">
          <h2 className="clerge-title">Le Clergé</h2>
          <span className="red-bar"></span>
          <div className="clerge-cards">
            <div className="clerge-card">
              <div className="image-wrapper">
                <img src="/clergé.jpg" alt="Mgr Jean-Marc Eychenne" />
              </div>
              <h3>Mgr Jean-Marc Eychenne</h3>
              <span className="bar"></span>
              <p className="titre">Diocèse de Grenoble-Vienne</p>
              <p className="description">Évêque du diocèse</p>
            </div>

            <div className="clerge-card">
              <div className="image-wrapper">
                <img src="/clergé.jpg" alt="Père Patrick Gaso" />
              </div>
              <h3>Père Patrick Gaso</h3>
              <span className="bar"></span>
              <p className="titre">Diocèse de Grenoble-Vienne</p>
              <p className="description">Curé de la paroisse Notre-Dame de l’espérance</p>
            </div>

            <div className="clerge-card">
              <div className="image-wrapper">
                <img src="/clergé.jpg" alt="Père Patrick Faure" />
              </div>
              <h3>Père Patrick Faure</h3>
              <span className="bar"></span>
              <p className="titre">Diocèse de Grenoble-Vienne</p>
              <p className="description">
                Chapelain de la collégiale St André<br />
                Vicaire de la paroisse Notre-Dame de l’espérance
              </p>
            </div>
            <div className="clerge-card">
              <div className="image-wrapper">
                <img src="/clergé.jpg" alt="Père Patrick Faure" />
              </div>
              <h3>Père Patrick Faure</h3>
              <span className="bar"></span>
              <p className="titre">Diocèse de Grenoble-Vienne</p>
              <p className="description">
                Chapelain de la collégiale St André<br />
                Vicaire de la paroisse Notre-Dame de l’espérance
              </p>
            </div>
          </div>
        </section>

        <section id="contact-section">
          <div className="underline">
            <h2 className="contact-title">Contact</h2>
            <span className="red-bar"> </span>
          </div>
          <div className="contact-layout">
            <div className="contact-card contact-logo-card">
              <img src="/logo - Copie.png" alt="Logo de l'Église" className="logo-grand" />
            </div>

            <div className="contact-card contact-infos-card">
              <h3>Informations</h3>
              <p><strong>Adresse :</strong><br />52 rue Sermorens, 38500 VOIRON</p>
              <p><strong>Téléphone :</strong><br />09 65 20 29 48</p>
              <p><strong>Email :</strong><br />paroisse@example.com</p>
              <p><strong>Horaire : </strong><br />Du lundi au vendredi <br></br>6h30 /20h</p>
            </div>

            <div className="contact-card contact-form-card">
              <h3>Envoyer un message</h3>
              <form>
                <input type="text" name="name" placeholder="Votre nom" required />
                <input type="text" name="firstname" placeholder="Votre prénom" required />
                <input type="email" name="email" placeholder="Votre email" required />
                <textarea name="message" placeholder="Votre message" rows="5" required></textarea>
                <button type="submit" className="button">Envoyer</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer >
        <footer className="site-footer">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/logo - Copie.png" alt="Logo Église" />
              <p>Église Saint-Pierre de Voiron<br />Paroisse Notre-Dame de Vouise</p>
            </div>

            <div className="footer-menu">
              <h4>Menu</h4>
              <ul>
                <li><a href="#gallery-section">Carte</a></li>
                <li><a href="#messes-table-container">Agenda</a></li>
                <li><a href="#contact-section">Contact</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Informations</h4>
              <ul>
                <li>52 rue Sermorens, Voiron</li>
                <li>09 65 20 29 48</li>
                <li>eglise@example.com</li>
              </ul>
            </div>

            <div className="footer-mentions">
              <h4>Ressources</h4>
              <ul>
                <li><a href="/mentions-legales">Mentions légales</a></li>
                <li><a href="/confidentialite">Politique de confidentialité</a></li>
                <li><a href="/plan-site">Plan du site</a></li>
              </ul>
            </div>

          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Église Saint-Pierre de Voiron — Tous droits réservés.</p>
          </div>
        </footer>

      </footer>
    </div>
  );
}

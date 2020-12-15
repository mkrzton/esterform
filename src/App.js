import logo from'../src/logoester.png'
import './App.css';

function App() {
  return (
   
    <div className="App">
      
      <header className="App-header">
          
          <img src={logo} alt="Esterform Polska"/>
          <a href="https://www.esterform.com/">
          <div className="Title">
              Esterform Polska
          </div>   
          </a>
          <p>Największy producent preform i pojemników PET</p>    
      </header>
      <div class="article-container">
          <div className="article">
              <a href="https://www.esterform.com/">
              <h3>Produkty</h3>
              </a>
              
              <a href="https://www.esterform.com/">
              <button className="btn-primary"> Obejrzyj Nasze Produkty</button>
              </a>
              <p>Przejdź do strony z produktami</p>
              <div className="break"></div>
          </div>
          <div className="article">
              <h3>Kontakt</h3>
              <p>Esterform Polska sp. z o.o.</p>
              <p> tel: +48 604 524 496</p>
              <a href={`mailto:${"jacek.maziopa@esterform.com"}`}>info@esterformpolska.pl</a> 
              <p> KRS:
          0000604978,  NIP: 7822611242,  REGON: 363829668</p>
          </div>
          <div className="article">
              <h3>Zakład Produkcyjny</h3>
              <p>ul. Wróblewskiego 2, 14-300 Morąg</p>
              
          </div>
          <div className="article">
              <h3>Biuro</h3>
              <p>Abpa Antoniego Baraniaka 88E, 61-131 Poznań, PL</p>    
          </div>
          </div>
          <footer>
          ©Esterform Polska 2020
          </footer>
      </div>
    
  );
}

export default App;

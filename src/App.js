import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyFooter from "./components/MyFooterComponent";
import Welcome from "./components/WelcomeComponent";
import MyNav from "./components/MyNav";
import Film from "./components/Film";

function App() {
  return (
    <div className="App bg-dark">
      <header>
        <MyNav />
      </header>
      <main>
        {/* SONO TALEMNTE ESPERTO CON LE SERIE TV E FILM CHE HO DOVUTO GOOGLARE PER TROVARNE ALTRE DUE XD */}
        {/* SO CHE NON è NESSUNA GIUSTIFICAZIONE (Né VUOLE ESSERLA) MA CI TENGO A FARLO PRESENTE, UNA PERSONA MI HA CHIESTO UNA MANO, 
        ENTRO IN CHIAMATA ED ERANO IN 2 COSì HO DEDICATO VOLENTIERI UN'ORETTA PER DARGLI UNA MANO QUANTO MENO A FAR PARTIRE LA FETCH*/}
        <Welcome></Welcome>
        <Film h1="Trending Now" endpoint="StarWars" />
        <Film h1="Watch it Again" endpoint="The Lord Of The Rings" />
        <Film h1="New Releases" endpoint="Harry Potter" />
        <Film h1="Others" endpoint="Friends" />
        <Film endpoint="Instinct" />
      </main>
      <MyFooter />
    </div>
  );
}

export default App;

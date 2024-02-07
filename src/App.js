import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyFooter from "./components/MyFooterComponent";
import Welcome from "./components/WelcomeComponent";
import MyNav from "./components/MyNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShows from "./components/TVShows";
import NotFound from "./components/NotFound";
import Home from "./components/PaginaIniziale";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-dark d-flex flex-column vh-100">
        <header>
          <MyNav />
        </header>
        <main className="flex-grow-1 bg-dark">
          <Welcome></Welcome>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<TVShows />} path="/tvshow" />
            <Route element={<NotFound />} path="*" />
            <Route element={<MovieDetails />} path="/movie-details/:movieId" />
          </Routes>
        </main>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;

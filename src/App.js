import { useState } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Work from "./Components/Work";
import HomePage from "./Pages/HomePage";
import ProjectPage from "./Pages/Projects/ProjectPage";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={`app ${darkMode && "dark"}`}>
      <BrowserRouter>
        <Header darkModeOnClick={() => setDarkMode((preValue) => !preValue)} />

        <Switch>
          <Route path="/projects/:id">
            <ProjectPage />
          </Route>

          <Route exact path="/projects">
            <ProjectPage />
          </Route>

          <Route exact path="/">
            <HomePage />
            <Work />
          </Route>

          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

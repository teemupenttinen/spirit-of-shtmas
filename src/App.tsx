import React, { useEffect, useState } from "react";
import "./App.scss";
import LandingPage from "./components/LandingPage";
import Guide from "./components/Guide";
import Settings from "./components/Settings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import jingleUrl from "./assets/sounds/jingle.mp3";

const history = createBrowserHistory();

function App() {
  const [music, setMusic] = useState(false);
  const [sound, setSound] = useState(false);

  const musicSettingsHandler: React.ChangeEvent<HTMLInputElement> = (event) => {
    setMusic(event.target.checked);
    localStorage.setItem(
      event.target.getAttribute("name"),
      event.target.checked
    );
  };

  const soundSettingsHandler: React.ChangeEvent<HTMLInputElement> = (event) => {
    setSound(event.target.checked);
    localStorage.setItem(
      event.target.getAttribute("name"),
      event.target.checked
    );
  };

  useEffect(() => {
    const s = localStorage.getItem("sound");
    const m = localStorage.getItem("music");

    if(s && s === 'true') {
      setSound(true);
    }

    if(m && m === 'true') {
      setMusic(true);
    }
    console.log(s);
  }, []);
  
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/guide">
            <Guide />
          </Route>
          <Route path="/settings">
            <Settings
              musicSettingsHandler={musicSettingsHandler}
              soundSettingsHandler={soundSettingsHandler}
              music={music}
              sound={sound}
            />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
      <audio src={jingleUrl} loop controls autoPlay={music}></audio>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.scss";
import LandingPage from "./components/LandingPage";
import Guide from "./components/Guide";
import Settings from "./components/Settings";
import Game from "./components/Guide/Game";
import Rules from "./components/Guide/Rules";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import jingleUrl from "./assets/sounds/jingle.mp3";

const history = createBrowserHistory();

function App() {
  const [music, setMusic] = useState(true);
  const [sound, setSound] = useState(true);

  const audioPlayerRef = React.createRef();

  const musicSettingsHandler = (event) => {
    const isChecked = event.target.checked;

    setMusic(isChecked);
    localStorage.setItem(event.target.getAttribute("name"), isChecked);

    isChecked ? audioPlayerRef.current.play() : audioPlayerRef.current.pause();
  };

  const soundSettingsHandler = (event) => {
    const isChecked = event.target.checked;

    setSound(isChecked);
    localStorage.setItem(event.target.getAttribute("name"), isChecked);
  };

  useEffect(() => {
    if (localStorage.getItem("sound") === "false") {
      setSound(false);
    }

    if (localStorage.getItem("music") === "false") {
      setMusic(false);
    }
  }, []);

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/guide">
            <Guide />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/rules">
            <Rules />
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
      <audio src={jingleUrl} ref={audioPlayerRef} loop autoPlay={music}></audio>
    </div>
  );
}

export default App;

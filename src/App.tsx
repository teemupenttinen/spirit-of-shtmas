import React, { useEffect, useState } from "react";
import "./App.scss";
import LandingPage from "./components/LandingPage";
import Guide from "./components/Guide";
import Settings from "./components/Settings";
import GameGuide from "./components/Guide/GameGuide";
import Rules from "./components/Guide/Rules";
import NewGame from "./components/NewGame";
import Game from "./components/Game";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import jingleUrl from "./assets/sounds/jingle.mp3";
import {
  GameContext,
  GameSettings,
  Player,
  SettingsType,
} from "./components/gameContext";

const history = createBrowserHistory();

function App() {
  const [music, setMusic] = useState(true);
  const [sound, setSound] = useState(true);
  const [gameSettings, setGameSettings] = useState({});
  const [players, setPlayers] = useState([]);

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

  function setPlayersHandler(players: Player[]) {
    setPlayers(players);
    console.log(players);
  }

  const setSettingsHandler = (settings: SettingsType) => {};

  const setGameSettingsHandler = (g: GameSettings) => {
    console.log(g)
    setGameSettings(g)
  };

  return (
    <GameContext.Provider
      value={{
        settings: {
          music: music,
          sound: sound,
        },
        gameSettings: gameSettings,
        players: players,
        setPlayers: setPlayersHandler,
        setSettings: setSettingsHandler,
        setGameSettings: setGameSettingsHandler,
      }}
    >
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route path="/newgame">
              <NewGame />
            </Route>
            <Route path="/guide">
              <Guide />
            </Route>
            <Route path="/gameguide">
              <GameGuide />
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
        <audio
          src={jingleUrl}
          ref={audioPlayerRef}
          loop
          autoPlay={music}
        ></audio>
      </div>
    </GameContext.Provider>
  );
}

export default App;

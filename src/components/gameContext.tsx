import { createContext, useContext } from "react";

export type Player = {
  name: string;
};

export type SettingsType = {
  music: boolean;
  sound: boolean;
};

export type GameSettings = {
  lifelines: boolean;
};

export interface GameContext {
  settings: SettingsType;
  gameSettings: GameSettings;
  players: Player[];
  setPlayers: (players: Player[]) => void
  setSettings: (settings: SettingsType) => void
  setGameSettings: (gameSettings: GameSettings) => void
  startGame: (start: boolean) => void
}

export const GameContext = createContext<GameContext>({
  settings: {
    music: true,
    sound: true
  },
  gameSettings: {
    lifelines: true
  },
  players: [],
  setPlayers: (players: Player[]) => {},
  setSettings: () => {},
  setGameSettings: () => {},
});

export const useGameContext = () => {
  return useContext(GameContext);
};

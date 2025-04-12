import { browser } from "$app/environment";
import { writable, type Writable } from "svelte/store";

export interface GameState {
  balance: number;
  bunny: number;
  grass: number;
  flower: number;
}

export const gameState: Writable<GameState | null> = writable(null);

if (browser) {
  const storedState = localStorage.getItem("state");
  if (storedState !== null) {
    gameState.set(JSON.parse(storedState));
  }
}

gameState.subscribe((value) => {
  if (!browser) return;
  if (value === null) {
    localStorage.removeItem("state");
  } else {
    localStorage.setItem("state", JSON.stringify(value));
  }
});

export function newGame() {
  gameState.set({
    balance: 0,
    bunny: 0,
    grass: 0,
    flower: 0,
  });
}

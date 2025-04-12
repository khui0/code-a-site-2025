import { browser } from "$app/environment";
import { get, writable, type Writable } from "svelte/store";

export interface GameState {
  balance: number;
  bunny: number;
  grass: number;
  flower: number;
  tree: number;
}

const DEFAULT_STATE = {
  balance: 0,
  bunny: 1,
  grass: 0,
  flower: 0,
  tree: 0,
};

export const gameState: Writable<GameState | null> = writable(null);

export const moneyPerSecond: Writable<number> = writable(10);

if (browser) {
  const storedState = localStorage.getItem("state");
  if (storedState !== null) {
    gameState.set(Object.assign(DEFAULT_STATE, JSON.parse(storedState)));
  }
}

gameState.subscribe((value) => {
  if (!browser) return;
  try {
    if (value === null) {
      localStorage.removeItem("state");
    } else {
      moneyPerSecond.set(calculateRate());
      localStorage.setItem("state", JSON.stringify(value));
    }
  } catch (e) {
    console.error(e);
  }
});

export function calculateRate(): number {
  const state = get(gameState);
  if (state === null) return 0;

  let rate = 10;
  rate += state.grass * 5;
  rate += state.flower * 15;
  rate *= 1.1 * state.tree;

  return rate;
}

export function newGame() {
  gameState.set(DEFAULT_STATE);
  moneyPerSecond.set(10);
}

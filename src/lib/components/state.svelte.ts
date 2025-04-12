import { browser } from "$app/environment";

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

export const gameTickInterval: { current: number } = $state({ current: 0 });

export const gameState: { current: GameState | null } = $state({
  current: Object.assign({}, DEFAULT_STATE),
});
export const moneyPerSecond: { current: number } = $state({ current: 1 });

if (browser) {
  const storedState = localStorage.getItem("state");
  if (storedState !== null) {
    gameState.current = Object.assign({}, JSON.parse(storedState));
  }
}

export function calculateRate(state: GameState): number {
  if (state === null) return 0;

  let rate = 1;
  rate += state.grass * 1;
  rate += state.flower * 5;
  rate *= 1.1 ** state.tree;

  return rate;
}

export function newGame() {
  gameState.current = Object.assign({}, DEFAULT_STATE);
  console.log(DEFAULT_STATE);
  localStorage.setItem("state", JSON.stringify(DEFAULT_STATE));
  moneyPerSecond.current = 10;
}

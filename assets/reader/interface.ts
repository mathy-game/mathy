export interface FunctionUnit {
  fn: (x: number) => number
  duration: number
}

export interface GameData {
  name: string,
  level: number,
  author: string,
  fns: FunctionUnit[]
}

export function defineGame(data: GameData) {
  return data
}
export interface FunctionUnit {
  fn: (x: number) => number
  duration: number
}

export interface Note {
  type: 'tap' | 'hold' | 'catch'
  isOff: boolean
  duration?: number
  x: number
}

export interface GameData {
  name: string
  level: number
  author: string
  fns: FunctionUnit[]
  notes: Note[]
}

export function defineGame(data: GameData) {
  return data
}
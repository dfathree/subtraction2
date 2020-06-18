export interface RootState {
  visibility: boolean
  seed: number
  digit: number
  col: number
  row: number
}

export interface RandomNumbers {
  [index: number]: {
    [index: number]: {
      [index: number]: number
    }
  }
}

import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators'
import store from './index'
import { RandomNumbers } from './types'

@Module({
  dynamic: true,
  store,
  name: 'RandomModule',
  namespaced: true,
})
class RandomModule extends VuexModule {
  seed = 1
  digit = 4
  col = 4
  row = 5

  @Mutation
  public setSeed(payload: number): void {
    if (1 <= payload && payload < 10 ** 25) {
      this.seed = payload
    }
  }

  @Mutation
  public setDigit(payload: number): void {
    if (1 <= payload && payload <= 6) {
      this.digit = payload
    }
  }

  @Mutation
  public setCol(payload: number): void {
    if (1 <= payload && payload <= 5) {
      this.col = payload
    }
  }

  @Mutation
  public setRow(payload: number): void {
    if (1 <= payload && payload <= 6) {
      this.row = payload
    }
  }

  get randomNumbers(): RandomNumbers {
    const min = 10 ** (this.digit - 1)
    const max = 10 ** this.digit - 1
    let [w, x, y, z] = [this.seed, 123456789, 362436069, 521288629]

    const random = () => {
      const t = x ^ (x << 11)
      x = y
      y = z
      z = w
      w = w ^ (w >>> 19) ^ (t ^ (t >>> 8))
      const r = Math.abs(w)
      return min + (r % (max + 1 - min))
    }

    return [...Array(this.row)].map(() => [...Array(this.col)].map(() => [random(), random()].sort().reverse()))
  }
}

export default getModule(RandomModule)

import { Module, VuexModule, Mutation, getModule } from 'vuex-module-decorators'
import store from './index'

@Module({
  dynamic: true,
  store,
  name: 'AnswerVisibility',
  namespaced: true,
})
class AnswerVisibilityModule extends VuexModule {
  visibility = 'hidden'

  @Mutation
  public toggle(): void {
    if (this.visibility === 'visible') {
      this.visibility = 'hidden'
    } else {
      this.visibility = 'visible'
    }
  }
}

export default getModule(AnswerVisibilityModule)

import api from '@/api/api'
import { action, mutator } from '@/store/constants'

export default {
  async [action.GET_USERS]({ commit }) {
    try {
      const users = await api.getUsers()
      commit(mutator.SET_USER, users)
    } catch (e) {
      console.log(e)
    }
  }
}

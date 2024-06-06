import { createStore } from 'vuex'
import axiosInit from 'axios';

const axios = axiosInit.create({
    baseURL: 'http://localhost:5020',
});

export default createStore({
    state: {
      token: localStorage.getItem('token') || '',
      user: null,
    },
    mutations: {
      SET_TOKEN(state, token) {
        state.token = token
      },
      SET_USER(state, user) {
        state.user = user
      },
      LOGOUT(state) {
        state.token = ''
        state.user = null
      }
    },
    actions: {
      async login({ commit }, userData) {
        try {
          const response = await axios.post('/login-user', userData)
          const token = response.data.token
          localStorage.setItem('token', token)
          commit('SET_TOKEN', token)
          commit('SET_USER', response.data.email)
        } catch (error) {
          console.error('Error during login:', error)
          throw error
        }
      },
      logout({ commit }) {
        localStorage.removeItem('token')
        commit('LOGOUT')
      }
    },
    getters: {
      isAuthenticated: state => !!state.token,
      getUser: state => state.user
    }
  })
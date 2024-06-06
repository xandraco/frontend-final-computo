import { createStore } from 'vuex'
import axiosInit from 'axios';

const axios = axiosInit.create({
    baseURL: 'http://localhost:5020',
});

export default createStore({
    state: {
      token: localStorage.getItem('token') || '',
      user: null,
      patients:[],
      appointments: [],
      products: [],
      producQuantity: 0,
    },
    mutations: {
      SET_TOKEN(state, token) {
        state.token = token
      },
      SET_USER(state, user) {
        state.user = user
        console.log(state.user)
      },
      LOGOUT(state) {
        state.token = ''
        state.user = null
      },
      SET_PATIENTS(state, patients) {
        state.patients = patients
      },
      SET_APPOINTMENTS(state, appointments) {
        state.appointments = appointments
      },
      SET_PRODUCTS(state, products) {
        state.products = products
      },
      INCREASE_PRODUCT_QUANTITY(state) {
        state.productQuantity++;
      },
      DECREASE_PRODUCT_QUANTITY(state) {
        if (state.productQuantity > 0) {
          state.productQuantity--;
        }
      }
    },
    actions: {
      async login({ commit }, userData) {
        try {
          const response = await axios.post('/login-user', userData)
          const token = response.data.token
          localStorage.setItem('token', token)
          commit('SET_TOKEN', token)
          commit('SET_USER', userData.email)
        } catch (error) {
          console.error('Error during login:', error)
          throw error
        }
      },
      logout({ commit }) {
        localStorage.removeItem('token')
        commit('LOGOUT')
      },
      async fetchPatients({ commit }) {
        try {
          const response = await axios.get('/patient/get-all', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          })
          commit('SET_PATIENTS', response.data.patients)
        } catch (error) {
          console.error('Error fetching patients:', error)
        }
      },
      async fetchAppointments({ commit }) {
        try {
          const response = await axios.get('/appointment/get-all', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          })
          commit('SET_APPOINTMENTS', response.data.appointments)
        } catch (error) {
          console.error('Error fetching appointments:', error)
        }
      },
      async fetchProducts({ commit }) {
        try {
          const response = await axios.get('/product/get-all', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          })
          commit('SET_PRODUCTS', response.data.products)
          console.log(response.data.products)
        } catch (error) {
          console.error('Error fetching products:', error)
        }
      },
    },
    getters: {
      isAuthenticated: state => !!state.token,
      getUser: state => state.user,
      getPatients: state => state.patients,
      getAppointments: state => state.appointments,
      getProducts: state => state.products,
    }
  })
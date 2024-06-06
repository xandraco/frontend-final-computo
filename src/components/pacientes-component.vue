<template>
  <v-container fluid style="height: 100vh; max-height: 100vh; overflow-y: scroll;">
    <v-row>
      <v-col
        v-for="patient in patients"
        :key="patient.email"
        cols="12"
        md="4"
      >
        <v-card>
          <div class="d-flex">
            <img
              src="@/assets/imgs/patient.png"
              class="rounded-circle"
              width="100"
              height="100"
              alt="Patient"
            />
            <v-card-title class="ml-3">{{ patient.data.fullName }}</v-card-title>
          </div>
          <v-card-subtitle>{{ patient.data.email }}</v-card-subtitle>
          <v-card-text>
            <p>Edad: {{ patient.data.age }}</p>
            <p>Sexo: {{ patient.data.sex }}</p>
            <p>Teléfono: {{ patient.data.phoneNumber }}</p>
            <p>Dirección: {{ patient.data.address }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PatientsList',
  computed: {
    ...mapGetters(['getPatients']),
    patients() {
      return this.getPatients
    }
  },
  created() {
    this.fetchPatients()
  },
  methods: {
    ...mapActions(['fetchPatients'])
  }
}
</script>

<style scoped>
.v-img {
  margin-right: 15px;
}
</style>
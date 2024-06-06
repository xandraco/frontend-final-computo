<template>
  <div>
    <v-row style="margin-top: 30vh;">
      <!-- Columna para la próxima cita -->
      <v-col cols="3">
        <v-card>
          <v-card-title>Próxima Cita</v-card-title>
          <v-card-text>{{ nextAppointment }}</v-card-text>
        </v-card>
      </v-col>

      <!-- Columna para los pacientes -->
      <v-col cols="9">
        <v-card>
          <v-card-title>Pacientes</v-card-title>
          <v-card-text>
            <ul>
              <li v-for="patient in patients" :key="patient.email">
                {{ patient.data.fullName }}
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Columna para el valor de productQuantity -->
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Product Quantity</v-card-title>
          <v-card-text>{{ productQuantity }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getPatients', 'getAppointments']),
    ...mapState(['productQuantity']),
    nextAppointment() {
      const appointments = this.getAppointments;
      if (appointments.length > 0) {
        return appointments[0].patientEmail;
      } else {
        return 'No hay citas programadas';
      }
    },
    patients() {
      return this.getPatients.slice(0, 3); // Muestra solo los primeros 3 pacientes
    },
  },
  created() {
    this.fetchPatients();
    this.fetchAppointments();
  },
  methods: {
    ...mapActions(['fetchPatients', 'fetchAppointments'])
  }
};
</script>

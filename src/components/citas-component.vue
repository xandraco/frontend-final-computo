<template>
  <v-container fluid style="height: 100vh; max-height: 100vh; overflow-y: scroll;">
    <!-- Agrega los campos de entrada para seleccionar la fecha -->
    <label for="start-date" class="me-3">Desde</label>
    <input type="date" v-model="startDate" class="me-5">

    <label for="end-date" class="me-3">Hasta</label>
    <input type="date" v-model="endDate" class="me-5">

    <v-row>
      <v-col
        v-for="appointment in filterAppointments"
        :key="appointment.id"
        cols="12"
      >
        <v-card class="mb-4 d-flex align-center">
          <img
            src="@/assets/imgs/patient.png"
            class="rounded-circle"
            width="80"
            height="80"
            alt="Patient"
          />
          <v-card-text class="pl-4">
            <div class="font-weight-bold">Cita con: {{ appointment.patientEmail }}</div>
            <div>{{ appointment.date }} a las {{ appointment.time }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AppointmentsList',
  computed: {
    ...mapGetters(['getAppointments']),
    appointments() {
      return this.getAppointments
    },
    filterAppointments() {
      const startDate = this.startDate && new Date(this.startDate);
      const endDate = this.endDate && new Date(this.endDate);

      return this.appointments.filter(appointment => {
        const appointmentDate = new Date(appointment.date);
        return (!startDate || appointmentDate >= startDate) &&
               (!endDate || appointmentDate <= endDate);
      });
    }
  },
  created() {
    this.fetchAppointments()
  },
  methods: {
    ...mapActions(['fetchAppointments'])
  },
  data() {
    return {
      startDate: null,
      endDate: null
    };
  }
}
</script>

<style scoped>
.v-card {
  display: flex;
  align-items: center;
  padding: 16px;
}
.v-img {
  border-radius: 50%;
}
.v-card-text {
  flex: 1;
}
</style>
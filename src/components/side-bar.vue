<template>
  <v-container style="height: 100vh;" fluid class="bg-blue-grey-lighten-3">
    <img src="../assets/imgs/logo.png" style="max-width: 100%;" class="mb-5" />
    <v-btn prepend-icon="fa: fa-solid fa-table-columns" rounded="xl" size="x-large" elevation="0" width="100%"
      class="mb-5" @click.stop="$router.push('/home/principal')" color="blue-grey-lighten-1">Principal</v-btn>
    <v-btn prepend-icon="fa: fa-regular fa-calendar-days" rounded="xl" size="x-large" elevation="0" width="100%"
      class="mb-5" @click.stop="$router.push('/home/citas')" color="blue-grey-lighten-1">Citas</v-btn>
    <v-btn prepend-icon="fa: fa-solid fa-bed" rounded="xl" size="x-large" elevation="0" width="100%"
      class="mb-5" @click.stop="$router.push('/home/pacientes')" color="blue-grey-lighten-1">Pacientes</v-btn>
    <v-btn prepend-icon="fa: fa-solid fa-cart-shopping" rounded="xl" size="x-large" elevation="0" width="100%"
      class="mb-5" @click.stop="$router.push('/home/ordenes')" color="blue-grey-lighten-1">Tienda</v-btn>

    <v-row>
      <v-col class="d-flex align-center justify-center">
        <img src="../assets/imgs/logo.png" class="rounded-circle" style="max-width: 50%;">
      </v-col>
    </v-row>

    <v-row>
      <v-col class="d-flex align-center justify-center">
        <h6>Aqui va el correo de usuario</h6>
      </v-col>
    </v-row>

  </v-container>
</template>
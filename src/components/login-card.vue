<template>
  <v-card color="teal" variant="elevated">
    <v-card-title>
      ¡Bienvenido!
    </v-card-title>
    <v-card-subtitle>
      Inicia sesión
    </v-card-subtitle>
    <v-card-text>
      <v-form>
        <v-text-field 
          v-model="email"
          label="Correo" 
        />
        <v-text-field 
          v-model="password"
          label="Contraseña" 
        />
        <v-btn 
          class="mt-2"
          type="submit"
          block
          color="secondary"
          size="x-large"
          rounded="xl"
          elevation="4"
        >
        Ingresar
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: ''
  })
}
</script>
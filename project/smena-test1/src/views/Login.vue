<template>
  <!-- <v-app> -->
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">Авторизация</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field 
            label="Имя"
            prepend-icon="mdi-account-circle"
          />
          <v-text-field 
            label="Пароль" 
            :type="showPassword ? 'text' : 'password'" 
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="info" @click="login">Войти</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="success" to="/register">Регистрация</v-btn>
      </v-card-actions>
    </v-card>
  <!-- </v-app> -->
</template>


<script>



export default {
  name: 'Login',
  components: {
  
  },
  data: () => ({
    showPassword: false,
    message: ""
  }),
  methods: {
   
  },
};
</script>

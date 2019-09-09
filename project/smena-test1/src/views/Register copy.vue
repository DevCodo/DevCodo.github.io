<template>
  <!-- <v-app> -->
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">Регистрация</h1>
      </v-card-title>
      <v-card-text>
        <v-form v-model="valid">
          <v-text-field 
            v-model="username"
            :rules="nameRules"
            required
            label="Имя"
            prepend-icon="mdi-account-circle"
          />
          <v-text-field 
            v-model="password"
            :rules="passwordRules"
            required
            label="Пароль" 
            :type="showPassword ? 'text' : 'password'" 
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
          <v-text-field 
            v-model="secondPassword"
            :rules="secondPasswordRules"
            required
            label="Подтверждение пароля" 
            :type="showPassword ? 'text' : 'password'" 
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success">Зарегистрироваться</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info" to="/login">Авторизация</v-btn>
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
    valid: false,
    showPassword: false,
    username: "",
    nameRules: [
      v => !!v || 'Имя обязательно для заполнения',
      v => !(v.length <= 5) || 'Имя должно быть больше 5 символов',
    ],
    password: "",
    passwordRules: [
      v => !!v || 'Пароль обязателен для заполнения',
      v => !(v.length <= 5) || 'Длина пароля должна быть больше 8 символов',
    ],
    secondPassword: "",
    secondPasswordRules: [
      v => !!v || 'Пароль обязателен для заполнения',
      v => v = this.password || 'Длина пароля должна быть больше 8 символов',
    ],
     
  }),
};
</script>

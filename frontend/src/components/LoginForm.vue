<template>
  <m-form title="Логин">
    <v-text-field
      v-model="email"
      type="text"
      outlined
      placeholder="Введите e-mail..."
    ></v-text-field>

    <v-text-field
      v-model="pwd"
      type="password"
      outlined
      placeholder="Введите пароль..."
    ></v-text-field>

    <div>
      Нет аккаунта?
      <router-link to="/register">Зарегистрироваться</router-link>
    </div>

    <div class="form_footer">
      <v-btn @click="login" class="mt-1 submit-btn">Войти</v-btn>
    </div>
  </m-form>
</template>

<script>
import MForm from "./Form";

export default {
  name: "login-form",
  components: { MForm },
  data() {
    return {
      email: "",
      pwd: ""
    };
  },
  methods: {
    login() {
      let data = {
        email: this.email,
        password: this.pwd
      };

      this.$store.dispatch("login", data);
    }
  }
};
</script>

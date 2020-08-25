<template>
  <m-form title="Регистрация">
    <v-text-field
      v-model="email"
      type="text"
      outlined
      placeholder="Введите e-mail..."
    ></v-text-field>

    <v-text-field
      v-model="password"
      type="password"
      outlined
      placeholder="Введите пароль..."
    ></v-text-field>

    <v-text-field
      v-model="password_confirmation"
      type="password"
      outlined
      placeholder="Повторите пароль..."
    >
    </v-text-field>

    <div>
      Есть аккаунт?
      <router-link to="/login">Войти</router-link>
    </div>

    <div class="form_footer">
      <v-btn @click="register" class="mt-1 submit-btn"
        >Зарегистрироваться</v-btn
      >
    </div>
  </m-form>
</template>

<script>
import MForm from "./Form";
export default {
  name: "register-form",
  components: { MForm },
  data() {
    return {
      email: "",
      password: "",
      password_confirmation: ""
    };
  },
  methods: {
    register() {
      let data = {
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      };

      this.$store.dispatch("register", data);
    }
  }
};
</script>

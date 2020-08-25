<template>
  <m-form title="Логин">
    <v-text-field outlined placeholder="E-Mail..."> </v-text-field>
    <v-text-field outlined placeholder="Пароль..."> </v-text-field>
    <div>
      Нет аккаунта?
      <router-link to="/register">Зарегистрироваться</router-link>
    </div>
    <div class="form_footer">
      <v-btn class="mt-1 submit-btn">Войти</v-btn>
    </div>
  </m-form>
</template>

<script>
import MForm from "./Form";

export default {
  name: "login-form",
  components: { MForm }
};
</script>

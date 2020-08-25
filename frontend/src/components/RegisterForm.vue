<template>
  <m-form title="Регистрация">
    <v-text-field outlined placeholder="E-Mail..."> </v-text-field>
    <v-text-field outlined placeholder="Пароль..."> </v-text-field>
    <v-text-field outlined placeholder="Повторите пароль..."> </v-text-field>
    <div>
      Есть аккаунт?
      <router-link to="/login">Войти</router-link>
    </div>
    <div class="form_footer">
      <v-btn class="mt-1 submit-btn">Зарегистрироваться</v-btn>
    </div>
  </m-form>
</template>

<script>
import MForm from "./Form";
export default {
  name: "register-form",
  components: { MForm }
};
</script>

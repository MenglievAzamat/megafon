<template>
  <v-container class="container">
    <div v-if="show === 0">
      <h1 class="mb-2 mt-1">Добро пожаловать</h1>
      <v-btn to="/login" class="green-btn" block>Войти</v-btn>
    </div>
    <login-form v-else-if="show === 1" />
    <register-form v-else-if="show === 2" />
  </v-container>
</template>

<script>
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default {
  name: "Home",
  components: { RegisterForm, LoginForm },
  mounted() {
    if (localStorage.token) {
      this.$router.push("/videos");
    }
  },
  computed: {
    show() {
      return this.$route.meta.type === "default"
        ? 0
        : this.$route.meta.type === "login"
        ? 1
        : this.$route.meta.type === "register"
        ? 2
        : -1;
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center !important;
}
</style>

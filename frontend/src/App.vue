<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "app",
  mounted() {
    if (localStorage.token && !this.$store.state.user) {
      this.$store.dispatch("getUser");
    }
  }
};
</script>

<style lang="scss">
* {
  font-family: "Roboto Light", sans-serif;
  transition: 0.25s;
}

h1 {
  font-weight: normal;
  font-size: 1.5rem;
}

a {
  text-decoration: none;
  color: #de4237;
  font-weight: bold;

  &:hover {
    color: #ff5747;
  }
}

.mt-1 {
  margin-top: 1rem;
}

.mb-2 {
  margin-bottom: 2rem;
}

.green-btn {
  background: #4fff47 !important;
  color: white !important;
}

.black-btn {
  background: #333333 !important;
  color: white !important;
}

.levitate {
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
}
</style>

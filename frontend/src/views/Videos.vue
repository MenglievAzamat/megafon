<template>
  <v-container>
    VIDEOS
    <v-btn @click="logout" class="black-btn">Выйти</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "videos",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

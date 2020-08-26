<template>
  <v-app-bar color="#333333" dark dense prominent>
    <v-toolbar-title class="ml-6">Megafon</v-toolbar-title>

    <v-spacer></v-spacer>

    <div>
      <v-btn to="/admin" v-if="isAdmin" color="success" class="mr-2 mt-13">Администратор</v-btn>
      <v-btn @click="logout" color="red" class="mt-13">Выйти</v-btn>
    </div>

    <template v-slot:extension>
      <v-tabs align-with-title>
        <v-tab to="/videos/categories">Категории</v-tab>
        <v-tab to="/videos/add">Добавить видео +</v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: "navbar",
  computed: {
    isAdmin() {
      return this.$store.state.user.role === "ADMIN";
    },


  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style scoped lang="scss"></style>

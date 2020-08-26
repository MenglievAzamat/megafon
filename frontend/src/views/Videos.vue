<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  name: "videos",
  components: { Navbar },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

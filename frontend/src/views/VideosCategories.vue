<template>
  <v-container>
    <spinner v-if="loading" />
    <div class="d-flex flex-wrap" v-else>
      <div v-for="(name, id) in categories" :key="id" class="col-6">
        <v-card
          :to="`/videos/category/${id}`"
          class="pa-2 text-center levitate"
        >
          <h1>{{ name }}</h1>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
import Spinner from "../components/Spinner";
export default {
  name: "videos-categories",
  components: { Spinner },
  mounted() {
    this.$store.dispatch("loadCategories");
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    categories() {
      return this.$store.state.categories;
    }
  }
};
</script>

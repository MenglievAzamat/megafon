<template>
  <v-container class="text-center">
    <v-progress-circular
      :width="50"
      :size="200"
      color="red"
      indeterminate
    ></v-progress-circular>
  </v-container>
</template>

<script>
export default {
  name: "spinner"
};
</script>

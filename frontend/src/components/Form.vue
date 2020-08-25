<template>
  <v-card class="form" elevation="3">
    <div class="form_title">
      <h1>{{ title }}</h1>
      <hr />
    </div>
    <div class="form_content">
      <slot></slot>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "m-form",
  props: ["title"]
};
</script>

<style lang="scss">
.form {
  width: 50%;
  margin-top: 5rem;

  &_title {
    background: #333;
    color: white;

    h1 {
      padding: 0.5rem 1rem;
    }
  }

  &_content {
    padding: 1rem;
  }

  &_footer {
    display: flex;
    justify-content: flex-end;

    .submit-btn {
      color: white !important;
      background: #333 !important;
    }
  }
}
</style>

<template>
  <v-container class="d-flex justify-center">
    <spinner v-if="loading" />
    <v-card v-else class="col-6 mt-5">
      <v-text-field
        v-model="title"
        type="text"
        label="Название"
        color="#333333"
        solo
        outlined
      ></v-text-field>

      <v-file-input
        v-model="file"
        label="Файл"
        color="#333333"
        accept="video/mp4"
        solo
        outlined
      ></v-file-input>

      <v-textarea
        v-model="description"
        label="Описание"
        color="#333333"
        solo
        outlined
      ></v-textarea>

      <v-select
        v-model="access"
        :items="access_types"
        item-text="text"
        item-value="value"
        label="Доступ"
        solo
        outlined
      ></v-select>

      <v-select
        v-model="category"
        :items="categories"
        item-text="text"
        item-value="value"
        label="Категория"
        solo
        outlined
      ></v-select>

      <div class="d-flex">
        <v-spacer></v-spacer>
        <v-btn @click="upload" color="success">Добавить +</v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import Spinner from "../components/Spinner";
export default {
  name: "video-add",
  components: { Spinner },
  mounted() {
    this.$store.dispatch("loadCategories");
  },
  data() {
    return {
      title: "",
      file: null,
      description: "",
      access: null,
      category: null,

      access_types: [
        { text: "Сотрудник", value: "EMPLOYEE" },
        { text: "Пользователь", value: "USER" }
      ]
    };
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    categories() {
      let tmp = [];
      let cats = this.$store.state.categories;

      for (let i in cats) {
        tmp.push({ text: cats[i], value: i });
      }

      return tmp;
    }
  },
  methods: {
    upload() {
      let data = new FormData();
      data.append("title", this.title);
      data.append("file", this.file);
      data.append("description", this.description);
      data.append("access", this.access);
      data.append("category", this.category);

      this.$store.dispatch("uploadFile", data);
    }
  }
};
</script>

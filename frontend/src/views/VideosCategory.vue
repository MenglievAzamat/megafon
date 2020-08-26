<template>
  <v-container>
    <spinner v-if="loading" />
    <div class="text-center" v-else>
      <h1>{{ title }}</h1>
      <hr />
      <div class="d-flex flex-wrap">
        <div v-for="(video, id) in videos" :key="id" class="col-4">
          <v-card class="video levitate" @click="openVideo(video, user.role)">
            <div
              class="cover"
              v-if="user.role !== video.roles && user.role !== 'ADMIN'"
            >
              <v-icon class="cover-icon" color="white">mdi-lock</v-icon>
            </div>
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://picsum.photos/400/200"
            >
              <v-card-title>{{ video.title }}</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div>
                {{ video.description }}
              </div>
            </v-card-text>
          </v-card>
        </div>
      </div>

      <v-overlay class="overlay" v-if="modal">
        <div class="modal">
          <video :src="url" class="modal-video" controls></video>
          <v-btn @click="hide" block>Закрыть</v-btn>
        </div>
      </v-overlay>
    </div>
  </v-container>
</template>

<script>
import Spinner from "../components/Spinner";
export default {
  name: "videos-category",
  components: { Spinner },
  data() {
    return {
      modal: false,
      url: ""
    };
  },
  mounted() {
    if (!this.title) {
      this.$store.dispatch("loadCategories");
    }

    this.$store.dispatch("fetchVideosByCategory", this.$route.params.id);
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    title() {
      return this.$store.state.categories[this.$route.params.id];
    },
    videos() {
      return this.$store.state.videos;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    openVideo(video, role) {
      if (video.roles !== role && role !== "ADMIN") {
        alert("У вас нет доступа к этому видео!");
      } else {
        this.url = `${this.$store.state.videos_url}${video.url.split("/")[1]}`;
        this.modal = true;
      }
    },
    hide() {
      this.modal = false;
    }
  }
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 2.5rem;
}

.modal {
  &-video {
    width: 80vw;
  }
}

.video {
  position: relative;

  .cover {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    &-icon {
      font-size: 8rem;
      opacity: 0.8;
    }
  }
}

.overlay {
  z-index: 100;
  position: absolute;
}
</style>

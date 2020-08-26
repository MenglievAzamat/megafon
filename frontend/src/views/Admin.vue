<template>
  <v-container>
    <spinner v-if="loading" />
    <div v-else>
      <v-btn to="/"><v-icon>mdi-arrow-left</v-icon>Назад</v-btn>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">E-mail</th>
              <th class="text-left">Role</th>
              <th class="text-left">Controls</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.email }}</td>
              <td>{{ user.role.role }}</td>
              <td>
                <v-btn
                  @click="change(user.id)"
                  v-show="user.role.role !== 'ADMIN'"
                  color="success"
                  >Change</v-btn
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </v-container>
</template>

<script>
import Spinner from "../components/Spinner";
export default {
  name: "admin",
  components: { Spinner },
  mounted() {
    this.$store.dispatch("getAllUsers");
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    change(user_id) {
      this.$store.dispatch("changeRole", user_id);
    }
  }
};
</script>

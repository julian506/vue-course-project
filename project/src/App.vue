<script setup>
// import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/MainFooter.vue";
import RegisterView from "./views/RegisterView.vue";
import RegisteredUsersView from "./views/RegisteredUsersView.vue";
</script>

<template>
  <v-app>
    <v-layout>
      <NavBar> </NavBar>
      <v-main class="bg-indigo-lighten-4">
        <RegisterView @userCreated="addUser"></RegisterView>
        <RegisteredUsersView :users="users"></RegisteredUsersView>
      </v-main>
    </v-layout>
    <Footer></Footer>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    addUser(e) {
      this.users.push(e);
    },
  },
};
</script>

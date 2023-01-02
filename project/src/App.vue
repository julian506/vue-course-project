<script setup>
// import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
import NavBar from './components/NavBar.vue';
import RegisterForm from './components/RegisterForm.vue';
import Footer from './components/MainFooter.vue'
</script>

<template>
  <v-app>
    <v-layout>
      <NavBar></NavBar>
      <RegisterForm></RegisterForm>
    </v-layout>
    <Footer></Footer>
  </v-app>
</template>
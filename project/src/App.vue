<script setup>
// import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <v-app>
    <v-layout>
      <v-app-bar :elevation="2">
        <v-app-bar-title>Proyecto de prueba</v-app-bar-title>
      </v-app-bar>

      <v-main class="bg-indigo-lighten-4">
        <v-content>
          <v-container>
            <v-row justify="center">
              <v-col xs="12" sm="6" md="4">
                <v-form>
                  <v-card
                    variant="outlined"
                    class="mx-auto pa-5 pb-8 bg-white mt-5"
                    elevation="8"
                    rounded="lg"
                  >
                    <v-row justify="center">
                      <v-col cols="12" sm="6" md="8">
                        <v-card-item>
                          <v-card-title class="text-center"
                            >Formulario de registro</v-card-title
                          >
                        </v-card-item>
                      </v-col>
                    </v-row>
                    <v-card-text>
                      <v-row justify="center">
                        <v-col cols="12" sm="6" md="8">
                          <v-text-field
                            variant="outlined"
                            label="Nombre"
                            v-model="nombre"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row justify="center">
                        <v-col cols="12" sm="6" md="8">
                          <v-text-field
                            variant="outlined"
                            label="Correo"
                            type="email"
                            v-model="correo"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row justify="center">
                        <v-col cols="12" sm="6" md="8">
                          <v-text-field
                            variant="outlined"
                            label="Edad"
                            type="number"
                            v-model="edad"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row justify="center">
                        <v-col cols="12" sm="6" md="8">
                          <v-select
                            label="Estado civil"
                            :items="['Soltero/a', 'Casado/a', 'Viudo/a']"
                            variant="outlined"
                            v-model="estadoCivil"
                          ></v-select>
                        </v-col>
                      </v-row>
                      <v-row justify="center">
                        <v-col cols="12" sm="6" md="8">
                          <v-text-field
                            variant="outlined"
                            label="Pasatiempo"
                            type="text"
                            v-model="pasatiempo"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row justify="center">
                        <v-col cols="12" sm="6" md="8">
                          <v-btn
                            block
                            prepend-icon="mdi-send-circle"
                            variant="outlined"
                            color="primary"
                          >
                            Registrarse
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-form>
              </v-col>
            </v-row>
          </v-container>
        </v-content>
      </v-main>
    </v-layout>
    <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
      <div class="pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
        accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a
        sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
        lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
        iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
        vel ut orci. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </div>

      <v-divider></v-divider>

      <div>{{ new Date().getFullYear() }} — <strong>Vuetify</strong></div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      nombre: null,
      correo: null,
      edad: null,
      estadoCivil: null,
      pasatiempo: null,
    };
  },
};
</script>

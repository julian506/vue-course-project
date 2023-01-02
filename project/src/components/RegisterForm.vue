<template>
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
                    v-model="name"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="12" sm="6" md="8">
                      <v-text-field
                        variant="outlined"
                        label="Correo"
                        type="email"
                    v-model="email"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="12" sm="6" md="8">
                      <v-text-field
                        variant="outlined"
                        label="Edad"
                        type="number"
                    v-model="age"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="12" sm="6" md="8">
                      <v-select
                        label="Estado civil"
                        :items="['Soltero/a', 'Casado/a', 'Viudo/a']"
                        variant="outlined"
                    v-model="maritalStatus"
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="12" sm="6" md="8">
                      <v-text-field
                        variant="outlined"
                        label="Pasatiempo"
                        type="text"
                    v-model="hobby"
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
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      name: null,
      email: null,
      age: null,
      maritalStatus: null,
      hobby: null,
      users: [],
    };
  },
};
</script>
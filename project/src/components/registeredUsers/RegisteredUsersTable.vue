<script setup></script>
<template>
  <v-container grid-list-xs>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Nombre</th>
          <th class="text-left">Email</th>
          <th class="text-left">Edad</th>
          <th class="text-left">Estado Civil</th>
          <th class="text-left">Pasatiempo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.name">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.maritalStatus }}</td>
          <td>{{ user.hobby }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>
<script>
export default {
  name: "RegisteredUsersTable",
  props: {
    users: Array,
  },
};
</script>

<script setup>
import registeredUsersTable from "../components/registeredUsers/RegisteredUsersTable.vue";
</script>
<template>
  <registeredUsersTable :users="users"></registeredUsersTable>
</template>
<script>
export default {
  props: {
    users: Array,
  },
};
</script>

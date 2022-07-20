<template>
  <v-app>
    <v-main class="d-flex justify-center">
    
      <router-view />
    
    </v-main>
  </v-app>
</template>

<script>
import Table from './components/Table';

export default {
  name: 'App',

  components: {
    Table,
  },

  data: () => ({

  }),
};
</script>

<template>
  <v-app>
    <v-main class="d-flex justify-center">
    
      <Table/>
    
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
    //
  }),
};
</script>

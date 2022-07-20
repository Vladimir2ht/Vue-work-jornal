<template>
  <v-card color="blue"
    max-width="660"
    class="mx-auto"
  >
	  <v-card-title >Личное дело</v-card-title> 
    <v-list >
      <template v-for="(item) in content">

        <v-list-item
          :key="item[0]"
        >
          <v-list-item-title v-html="item[0]"></v-list-item-title>
          <v-list-item-subtitle v-html="item[1]"></v-list-item-subtitle>
        </v-list-item>
      </template>
    </v-list>
  </v-card>

</template>

<script>

  export default {
    name: 'MainCard',
    
		data: () => ({
      headers: [
				'№',
        'Имя',
        'Фамилия',
        'Отчество',
        'Должность',
        'Оклад',
      	'Поступил(а) на работу',
	      'Ставка',
  	    'Трудовая книжка',
      ],
    }),

		computed: {
    
			content: function () {
				let from_hold = JSON.parse(localStorage.getItem("workers"));
				from_hold = from_hold[this.$route.query.prson_number];
				from_hold = this.headers.map((el, ind) => [el, from_hold[ind]]);
				console.log(from_hold);
	      return from_hold
  	  }
  	},
  }
</script>
<style>
.v-card__title {
	color: white;
}
</style>
<template>
  <v-card
    max-width="660"
    class="mx-auto"
  >
	<!-- {{ card_number }} -->
<!-- 
    <v-list three-line>
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader> 

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>-->
  </v-card>

</template>

<script>

  export default {
    name: 'MainCard',
   
    data: () => ({
      headers: [
        { text: '№', value: 'number', },
        { text: 'Имя', value: 'name', },
        { text: 'Фамилия', value: 'family' },
        { text: 'Отчество', value: 'father' },
        { text: 'Должность', value: 'work' },
        { value: 'button' },
      ],

      profile_in_work: NaN,
      
      profiles: console.log(JSON.parse(localStorage.getItem("workers"))) ,
      
    }),

    methods: {
      Chuse_chenging_profile(index) {
        this.profile_in_work = index;
			},
			Chenge_profile(content) {
        this.profiles[content[0]] = content;
        // this.profiles в data не виден, по этому
        // не получилось внести следующую строку в this.Save_profiles().
        this.profiles = [...this.profiles];
        this.Save_profiles(this.profiles);
			},
			Delete_profile(index) {
        if (confirm(`Вы действительно хотите удалить профиль № ${index + 1} ?`)) {
          this.profiles.splice(index, 1);
          this.profiles.map((profile, number) => profile[0] = number);
          this.profiles = [...this.profiles];
          this.Save_profiles(this.profiles);
        }
			},
		}
  }
</script>

<template>
  
<v-data-table
    :headers="headers"
    :items="profiles"
    hide-default-footer
    hide-default-header
    disable-sort
  >
      <template
        v-slot:header="{ props: { headers } }"
      >
        <thead>
          <tr>
            <th>
              {{headers[0]}}
            </th>
            <th>
              {{headers[1]}}
            </th>
            <th>
              {{headers[2]}}
            </th>
            <th>
              {{headers[3]}}
            </th>
            <th>
              {{headers[4]}}
            </th>
            <th class="td-right">
              <Form 
                :ressived_profile="profile_in_work"
                :number_of_workers="profiles.length"
                @Chenge_profile="Chenge_profile"
              >
                Добавить сотрудника
              </Form>
            </th>
          </tr>
        </thead>
      </template>

    <template v-slot:item="row">
      <tr>
        <td>{{row.item[0] + 1}}</td>
        <td>{{row.item[1]}}</td>
        <td>{{row.item[2]}}</td>
        <td>{{row.item[3]}}</td>
        <td>{{row.item[4]}}</td>
        <td class="td-right">
          <router-link 
            :to="{ name: 'person', query: {prson_number: row.item[0]} }" target="_blank">
            <v-icon color="blue">
              mdi-clipboard-list-outline
            </v-icon>
          </router-link>
          <v-btn 
            class="mx-2" 
            rounded dark small
            color="blue"
            @click="Chuse_chenging_profile(row.item[0])"
          >
            Изменить
          </v-btn>
          <v-btn
            class="mx-2"
            rounded dark small
            color="red"
            @click="Delete_profile(row.item[0])"
          >
            Удалить
          </v-btn>
        </td>
      </tr>
    </template>
  
  </v-data-table>

</template>

<script>
import Form from './Form';

  export default {
    name: 'MainTable',
    
    components: {
      Form,
    },
    
    data: () => ({
      headers: [
        '№',
        'Имя',
        'Фамилия',
        'Отчество',
        'Должность',
      ],

      profile_in_work: NaN,
      
      profiles: JSON.parse(localStorage.getItem("workers")),
      
      Save_profiles: (profiles) => {
        localStorage.setItem("workers", JSON.stringify(profiles));  
      },
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

<style>
  .v-data-table {
    margin: 5% 5% 0 5%;
    min-width: 693px;
  }
  .td-right {
    /* text-align: right; */
    display: flex;
    justify-content: center;
  }
  th.td-right button {
    position: relative; 
    top: 5px;
  }
  .td-right button {
    position: relative; 
    top: 10px;
  }
  .td-right a {
    position: relative; 
    top: 13px;
  }
  tbody {
    min-width: 693px;
  }
  a[target="_blank"] {
    text-decoration-line: none;
  }
  /* Проблемы с адаптивностью остались */
</style>
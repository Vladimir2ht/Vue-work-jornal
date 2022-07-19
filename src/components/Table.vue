<template>
  
<v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
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
              {{headers[0].text}}
            </th>
            <th>
              {{headers[1].text}}
            </th>
            <th>
              {{headers[2].text}}
            </th>
            <th>
              {{headers[3].text}}
            </th>
            <th>
              {{headers[4].text}}
            </th>
            <th>
              <Form>
                Добавить сотрудника
              </Form>
            </th>
          </tr>
        </thead>
      </template>

    <template v-slot:item="row">
      <tr>
        <td>{{row.item.number}}</td>
        <td>{{row.item.name}}</td>
        <td>{{row.item.family}}</td>
        <td>{{row.item.father}}</td>
        <td>{{row.item.work}}</td>
        <td>
          <v-btn class="mx-2" rounded dark small color="blue" @click="ChangeWorker(row.item)">
            Обновить
          </v-btn>
          <v-btn class="mx-2" rounded dark small color="red" @click="DeleteWorker(row.item)">
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
          {
            text: '№', value: 'number',
            align: 'start',
            sortable: false,
          },
          { text: 'Имя', value: 'name', },
          { text: 'Фамилия', value: 'favily' },
          { text: 'Отчество', value: 'father' },
          { text: 'Должность', value: 'work' },
          { value: 'button' },
        ],
        desserts: [
          {
            number: 0,
            name: 'Frozen',
            family: 'Mohov',
            father: 'Rexov',
            work: 'Builder',
          },
          {
            number: 1,
            name: 'Froze',
            family: 'Moho',
            father: 'Rexo',
            work: 'Builde',
          },
          {
            number: 2,
            name: 'Froz',
            family: 'Moh',
            father: 'Rex',
            work: 'Build',
          },
        ],
    }),
  }
</script>

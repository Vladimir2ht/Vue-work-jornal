<template>
		<v-dialog 
			v-model="dialog"
			persistent
			max-width="600px"
		>
			<template v-slot:activator="{ on, attrs }">
				<v-btn
					dark
					color="blue"
					rounded
					v-bind="attrs"
					v-on="on"
				>
					Добавить сотрудника
				</v-btn>

			</template>
			<v-card>
				<v-card-title>
					<span class="text-h5">Профиль сотрудника</span>
				</v-card-title>
				<v-card-text>
					<v-container>
						<v-row>
							<v-col
								cols="12"
								sm="6"
								md="4"
							>
								<v-text-field
									label="Имя"
									required
								></v-text-field>
							</v-col>
							<v-col
								cols="12"
								sm="6"
								md="4"
							>
								<v-text-field
									label="Отчество"
									required
								></v-text-field>
							</v-col>
							<v-col
								cols="12"
								sm="6"
								md="4"
							>
								<v-text-field
									label="Фамилия"
									required
								></v-text-field>
							</v-col>
							<v-col
								cols="12"
								sm="6"
								md="4"
							>
								<v-text-field
									label="Должность"
									required
								></v-text-field>
							</v-col>
							<v-col
								cols="12"
								sm="6"
								md="4"
							>
								<v-text-field
									label="Оклад"
									required
								></v-text-field>
							</v-col>
							<v-col
								cols="12"
								sm="6"
								md="4"
							>

								<v-menu
									v-model="menu2"
									:close-on-content-click="false"
									:nudge-right="40"
									transition="scale-transition"
									offset-y
									min-width="auto"
								>
									<template v-slot:activator="{ on, attrs }">
										<v-text-field
											v-model="date"
											label="Поступил(а) на работу"
											prepend-icon="mdi-calendar"
											readonly
											v-bind="attrs"
											v-on="on"
										></v-text-field>
									</template>
									<v-date-picker
										v-model="date"
										@input="menu2 = false"
										show-adjacent-months
										required
									></v-date-picker>
								</v-menu>
							</v-col>

							<v-col
								cols="12"
								sm="6"
							>
								<v-select
									:items="['0.5', 'полная']"
									label="Ставка"
									required
								></v-select>
							</v-col>
							<v-col
								cols="12"
								sm="6"
							>
								<v-checkbox
									label="Трудовая книжка сдана"
								></v-checkbox>
							</v-col>
						</v-row>
					</v-container>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn
						color="blue darken-1"
						text
						@click="dialog = false"
					>
						Закрыть
					</v-btn>
					<v-btn
						color="blue darken-1"
						text
						@click="dialog = false"
					>
						Сохранить
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>

</template>

<script>
	export default {
		name: 'MainForm',

		data: () => ({
			dialog: false,
			date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu2: false,
		}),
	}
</script>

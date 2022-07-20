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
					@click=" is_create = true"
				>
					Добавить сотрудника
				</v-btn>

			</template>
			<v-card>
				<v-card-title>
					<span class="text-h5">Профиль сотрудника</span>
				</v-card-title>
				<v-form ref="form" lazy-validation>
					<v-container>
						<v-row>
							<v-col
								cols="12"
								sm="6"
								md="4"
							>
								<v-text-field
									:rules="name_rules"
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
									:rules="name_rules"
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
									:rules="name_rules"
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
									:rules="number_text_rules"
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
									:rules="number_rules"
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
									></v-date-picker>
								</v-menu>
							</v-col>

							<v-col
								cols="12"
								sm="6"
							>
								<v-select
									:items="['0.5', 'полная']"
									:rules="[v => !!v || 'Укажите ставку']"
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
						type="submit"
						@click="Save_profile"
					>
						Сохранить
					</v-btn>
				</v-card-actions>
				</v-form>
			</v-card>
		</v-dialog>

</template>

<script>
	export default {
		name: 'MainForm',

		props: {
			ressived_profile: {
				type: Number,
				default() {return NaN}
			},
			number_of_workers: {
				type: Number,
				default() {return 0}
			},
		},
		watch: { 
			// eslint-disable-next-line
			ressived_profile: function(newVal, oldVal) { 
				this.dialog = true;
			}
		},
		data: () => ({
			dialog: false,
			date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu2: false,
			is_create: false,

			name_rules: [
				v => !!v || 'Введите данные',
				v => /^[A-ZА-ЯЁ][A-Za-z А-Яа-я-_ёЁ]*$/.test(v) || 'Некорректный ввод',
			],
			number_text_rules: [
				v => !!v || 'Укажите должность',
        v => /^[\w А-Яа-я-_ёЁ.,:]+$/.test(v) || 'Некорректный ввод',
      ],
			number_rules: [
				v => !!v || 'Укажите зарплату',
				v => /^[\d.,]+$/.test(v) || 'Введите число',
				v => /^[1-9]\d+([,.]\d\d)?$/.test(v) || 'Некорректное число',
			],
		}),
		methods: {
			Save_profile(event) {
				event.preventDefault();

				if (this.$refs.form.validate()) {
					
					this.$emit( 'Chenge_profile',	[
						(this.is_create) ? this._props.number_of_workers : this._props.ressived_profile,
						...this.$refs.form.inputs.map(input => input._data.lazyValue)
					]);

					this.is_create = false;
					this.dialog = false;
					this.$refs.form.reset()
				} 
				
			}
		}
	}
</script>

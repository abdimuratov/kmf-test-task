<template>
  <div class="registration">
    <div class="title">Регистрация</div>
    <div v-if="submitError">Что-то пошло не так..</div>
    <form @submit.prevent="submit" class="form">
      <div class="form-card">
        <div class="form-card-item">
          <label for="firstName" class="label"> Имя </label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            class="input"
            v-model="form.firstName"
          />
        </div>
        <div class="form-card-item">
          <label for="lastName" class="label"> Фамилия </label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            class="input"
            v-model="form.lastName"
          />
        </div>
      </div>
      <div class="form-card">
        <div class="form-card-item">
          <label for="username" class="label"> Логин </label>
          <input
            id="username"
            type="text"
            name="username"
            class="input"
            v-model="form.username"
          />
          <p v-if="errors.username">{{ errors.username }}</p>
        </div>
        <div class="form-card-item">
          <label for="password" class="label"> Пароль </label>
          <input
            id="password"
            type="password"
            name="password"
            class="input"
            v-model="form.password"
          />
          <p v-if="errors.password">{{ errors.password }}</p>
        </div>
      </div>
      <div class="form-card">
        <div class="form-card-item">
          <label for="email" class="label"> Электронная почта </label>
          <input
            id="email"
            type="email"
            name="email"
            class="input"
            v-model="form.email"
          />
          <p v-if="errors.email">{{ errors.email }}</p>
        </div>
        <div class="form-card-item">
          <label for="phone" class="label"> Номер телефона </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            class="input"
            v-model="form.phone"
            placeholder="Пример: 87774445566"
          />
          <p v-if="errors.phone">{{ errors.phone }}</p>
        </div>
      </div>
      <div class="form-card">
        <div class="form-card-item">
          <label for="userStatus" class="label"> Статус </label>
          <select
            name="userStatus"
            id="userStatus"
            class="input select"
            v-model="form.status"
          >
            <option v-for="key in 5" :key="key" :value="key">{{ key }}</option>
          </select>
        </div>
        <div class="form-card-item">
          <button type="submit" class="button registration-button">
            Регистрация
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: '',
        phone: '',
        status: 1,
      },

      errors: {},

      submitError: false,
    }
  },

  methods: {
    submit() {
      if (this.checkFormForErrors()) {
        return
      }

      this.submitError = false

      axios
        .post('https://petstore.swagger.io/v2/user', this.form)
        .then(() => {
          this.$router.push('/')
        })
        .catch((response) => {
          this.submitError = true
          console.error(response)
        })
    },

    checkFormForErrors() {
      this.errors = {}

      if (!this.form.username.trim()) {
        this.errors.username = 'Введите логин'
      } else if (this.form.username.length < 4) {
        this.errors.username = 'Логин должен быть не менее 4 символов'
      }

      if (!this.form.email) {
        this.errors.email = 'Введите электронный адрес'
      } else if (!/\S+@\S+\.\S+/.test(this.form.email)) {
        this.errors.email = 'Неверный формат электронного адреса'
      }

      if (!this.form.phone) {
        this.errors.phone = 'Введите телефонный номер'
      } else if (
        !/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(this.form.phone)
      ) {
        this.errors.phone = 'Неверный формат телефонного номера'
      }

      if (!this.form.password) {
        this.errors.password = 'Введите пароль'
      } else if (this.form.password.length < 6) {
        this.errors.password = 'Пароль должен быть не менее 6 символов'
      }

      return Object.keys(this.errors).length > 0
    },
  },
}
</script>

<style lang="scss" scoped>
.registration {
  @media screen and (max-width: 633px) {
    width: 100%;
  }
  
  &-button {
    @media screen and (max-width: 767px) {
      margin-top: 20px;
    }
  }
}
</style>

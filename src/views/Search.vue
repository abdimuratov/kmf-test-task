<template>
  <div class="title">Поиск данных</div>

  <div v-if="!user">
    <div v-if="searchError">Что-то пошло не так...</div>

    <form @submit.prevent="submit">
      <div class="search-form">
        <div class="form-card-item">
          <label for="username" class="label"> Введите логин </label>
          <input
            id="username"
            type="text"
            name="username"
            class="input search-input"
            v-model="form.username"
          />
        </div>
        <div class="form-card-item">
          <button type="submit" class="button search-button">Поиск</button>
        </div>
      </div>
    </form>
  </div>

  <user-info v-if="user" :user="user" />
</template>

<script>
import axios from 'axios'
import UserInfo from '@/components/Search/UserInfo.vue'

export default {
  components: { UserInfo },

  data() {
    return {
      user: null,

      form: {
        username: '',
      },

      searchError: false,
    }
  },

  methods: {
    submit() {
      this.searchError = false
      this.user = null

      axios
        .get(`https://petstore.swagger.io/v2/user/${this.form.username}`)
        .then((response) => (this.user = response.data))
        .catch((error) => {
          console.error(error)
          this.searchError = true
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
  &-form {
    display: flex;
    flex-direction: column;
    align-items: unset;
  }

  &-input {
    width: 100%;
  }

  &-button {
    @media screen and (min-width: 633px) {
      max-width: 347px;
    }
  }
}
</style>
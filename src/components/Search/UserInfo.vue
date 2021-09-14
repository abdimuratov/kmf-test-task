<template>
  <div class="user-info">
    <div class="user-info-card">
      <div class="user-info-card-item">
        <div class="user-info-card-title">Имя</div>
        <div class="user-info-card-value">{{ user.firstName }}</div>
      </div>
      <div class="user-info-card-item">
        <div class="user-info-card-title">Фамилия</div>
        <div class="user-info-card-value">{{ user.lastName }}</div>
      </div>
    </div>

    <div class="user-info-card">
      <div class="user-info-card-item">
        <div class="user-info-card-title">Логин</div>
        <div class="user-info-card-value">{{ user.username }}</div>
      </div>
      <div class="user-info-card-item">
        <div class="user-info-card-title">Пароль</div>
        <div class="user-info-card-value">{{ user.password }}</div>
      </div>
    </div>

    <div class="user-info-card">
      <div class="user-info-card-item">
        <div class="user-info-card-title">Электронная почта</div>
        <div class="user-info-card-value">{{ user.email }}</div>
      </div>
      <div class="user-info-card-item">
        <div class="user-info-card-title">Номер телефона</div>
        <div class="user-info-card-value">{{ user.phone }}</div>
      </div>
    </div>

    <div class="user-info-card mt-20">
      <router-link to="/" class="button">На главную</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      required: true,
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped>
.user-info {
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #ededed;
  border-radius: 10px;

  &-card {
    @media screen and (min-width: 634px) {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
    }

    &-item {
      position: relative;
      display: flex;
      flex-direction: column;
      margin-right: 30px;
      margin-bottom: 15px;

      @media screen and (max-width: 633px) {
        margin-right: 0;
      }

      @media screen and (min-width: 634px) {
        width: 100%;
        max-width: 265px;
      }

      &:last-child {
        margin-right: 0;
        flex: 1;
      }
    }

    &-title {
      color: #bdbdbd;
      margin-bottom: 5px;
    }

    &-value {
      color: #303030;
      font-weight: bold;
      font-size: 18px;
    }
  }
}
</style>
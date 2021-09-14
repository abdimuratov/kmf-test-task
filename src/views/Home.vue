<template>
  <div class="home">
    <div>
      <div class="title home-title">
        Тестовое задание для Front-end Junior разработчика
      </div>
      <div class="description">
        Реши задачу и устройся на работу в компанию KMF
      </div>
      <div class="button-section">
        <router-link :to="{ name: 'registration' }" class="button"
          >Регистрация</router-link
        >
        <router-link :to="{ name: 'search' }" class="button"
          >Поиск по логину</router-link
        >
      </div>
    </div>
    <img src="/welcome.png" alt="Welcome" class="header-img" />
  </div>
</template>

<style lang="scss" scoped>
.description {
  max-width: 475px;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: -0.025em;
}

.home {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media screen and (min-width: 1236px) {
    flex-direction: row;
  }

  &-title {
    max-width: 665px;
  }
}

.header-img {
  max-width: 494px;
  width: 100%;
}
</style>
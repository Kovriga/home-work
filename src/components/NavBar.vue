<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {}
});
</script>

<template>
  <div class="nav-bar">
    <p>
      Жилфонд
    </p>
    <a>
      Пользователи
    </a>
  </div>
</template>

<style scoped lang="scss">
.nav-bar{
  padding: 0 30px 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  p {
    margin: 0;
    color: #E31F24;
    font-size: 32px;
    font-weight: 700;
  }
  a {
    color: #333;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
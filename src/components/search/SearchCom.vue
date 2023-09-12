<script lang="ts">
import {defineComponent} from 'vue'
import {mapActions} from "vuex";

export default defineComponent({
  name: "SearchCom",
  data() {
    return {
      searchInfo: '',
    }
  },
  methods: {
    ...mapActions(['setUserDataSearch']),
    test(): void {
      if(this.searchInfo !== ''){
        let noSpace = this.searchInfo.replace(/ +/g, '')
        let search = noSpace.split(',');
        let unique = search.filter((el, id) => search.indexOf(el) === id)
        this.setUserDataSearch(unique)
      }
    },
  }
})
</script>

<template>
  <div class="search-component">
    <h3>
      Поиск сотрудников
    </h3>
    <input v-model="searchInfo" v-on:keyup.enter="test()" placeholder="Введите Id или имя ">
  </div>
</template>

<style scoped lang="scss">
.search-component {
  font-size: 16px;
  font-weight: 600;

  input {
    height: 14px;
    width: 240px;
    padding: 16px 24px;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1.5px solid var(--all-colors-gray-gray-200, #E9ECEF);
    background: var(--all-colors-black-white-white, #FFF);
  }
}
</style>
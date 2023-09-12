<script lang="ts">
import {defineComponent} from 'vue'
import {mapActions} from "vuex";


interface User {
  "id": number,
  "name": string,
  "username": string,
  "email": string,
  "address": object
  "phone": string,
  "website": string,
  "company": object
}

export default defineComponent({
  name: "SearchResult",
  methods: {
    ...mapActions(['setActionUser']),
    actionUser(item: User): void {
      this.setActionUser(item.id)
    }
  }

})
</script>

<template>
  <div style="height: 83%">
    <h3>
      Результаты
    </h3>
    <div class="search-result-bar" v-for="(item, index) in $store.state.stateSearchDate" :key="index">
      <div :class="$store.state.actionUser.id === item.id ? 'action-item' : 'cart-serch'" @click="actionUser(item)">
        <div>
          <img src="../../../public/40f27a1242b008b4d5ef27f455809a30.png" height="60" width="70"/>
        </div>
        <div>
          <h3>{{ item.username }}</h3>
          <p>{{ item.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-result-bar {
  display: flex;

  .action-item{
    background: #E0E0E0;height: 70px;
    width: 100%;
    font-size: 14px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
    margin-bottom: 1em;
    border: 1px solid #E0E0E0;div:first-child{
    height: 70px;
    border-right: 1px solid #E0E0E0;
  }
    div:last-child{
      padding: 0 8px;
    }
    div > p {
      white-space: nowrap;
      overflow: hidden;
      padding: 5px;
      text-overflow: ellipsis;
      margin: 0;
    }

    div > h3 {
      white-space: nowrap;
      overflow: hidden;
      padding: 5px;
      text-overflow: ellipsis;
      margin: 0;
    }
  }
  .cart-serch {
    height: 70px;
    width: 100%;
    font-size: 14px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    border-radius: 10px;
    background: rgb(255, 255, 255);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
    margin-bottom: 1em;
    border: 1px solid #E0E0E0;
    div:first-child{
      height: 70px;
      border-right: 1px solid #E0E0E0;
    }
    div:last-child{
      padding: 0 8px;
    }
    div > p {
      white-space: nowrap;
      overflow: hidden;
      padding: 5px;
      text-overflow: ellipsis;
      margin: 0;
    }

    div > h3 {
      white-space: nowrap;
      overflow: hidden;
      padding: 5px;
      text-overflow: ellipsis;
      margin: 0;
    }
  }
}

</style>
<script lang="ts">
import {defineComponent} from 'vue'
import SearchCom from "@/components/search/SearchCom.vue";
import SearchResult from "@/components/search/SearchResult.vue";

export default defineComponent({
  name: "MainData",
  components: {SearchResult, SearchCom},
})
</script>

<template>
  <div class="main-content">
    <div class="search-user-end-result">
      <search-com/>
      <search-result/>
    </div>
    <div class="account-info" v-if="$store.state.actionUser ==! []">
      Выберите сотрудника, чтобы посмотреть его профиль
    </div>
    <div v-else class="account-info">
      <div class="account-info--img">
        <img src="../../public/40f27a1242b008b4d5ef27f455809a30.png"/>
      </div>
      <div class="account-info--text">
        <h3>{{$store.state.actionUser.name}}</h3>
        <div class="text"><h3>email:</h3><p>{{$store.state.actionUser.email}}</p></div>
        <div class="text"><h3>phone:</h3><p>{{$store.state.actionUser.phone}}</p></div>
        <div><h3>О себе:</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-content{
  border-radius: 10px;
  background: #FDFDFD;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
  border: 1px solid #E0E0E0;
  height: 90%;
  display: flex;
  .search-user-end-result{
    padding: 30px;
    border-right: 1px solid #E0E0E0;
  }
  .account-info{
    display: flex;
    width: 100%;
    align-items: center;
    margin: 30px;
    justify-content: center;
    .account-info--img {
      flex: 1;
      margin: 15px;
      border: 1px solid #E0E0E0;
      display: flex;
      align-items: center;
      img{
        height: 100%;
        width: 100%
      }
    }
    .account-info--text {
      flex: 2;
      margin: 15px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items:  flex-start;
      .text{
        display: flex;
        align-items: center;
        h3{
          margin-right: 1em;
        }
      }
    }
  }
}
</style>
import {createStore} from 'vuex'
import axios, {AxiosResponse} from "axios";

export default createStore({
    state: {
        stateSearchDate: [],
        actionUser: [],
        loader: false,
    },
    getters: {},
    mutations: {
        stateLoader(state, date){
            state.loader = date
        },
        newUserData(state, data) {
            state.stateSearchDate = data;
        },
        setUserData(state) {
            state.stateSearchDate = [];
        },
        getActionUser(state,data) {
            state.actionUser = data
        }
    },
    actions: {
        setUserDataSearch({commit}, userSearch) {
            const array: never[] = []
            commit('stateLoader', true)
            userSearch.forEach((element: string) => {
                Promise.all([
                    axios.get('https://jsonplaceholder.typicode.com/users?username=' + element),
                    axios.get('https://jsonplaceholder.typicode.com/users?id=' + element)
                ]).then((
                    [username, id]
                ) => {
                    username.data.length !== 0 ? username.data.forEach((item: never) => {
                        array.push(item)
                    }): ''
                    id.data.length !== 0 ? id.data.forEach((item: never) => {
                        array.push(item)
                    }): ''
                }).finally(() => {
                    commit('setUserData')
                    commit('newUserData', array)
                    commit('stateLoader', false)
                })
            });

        },
        setActionUser({commit}, id) {
            commit('stateLoader', true)
            axios.get('https://jsonplaceholder.typicode.com/users/' + id).then((response: AxiosResponse) => {
                commit('getActionUser', response.data)
            }).catch((response: AxiosResponse)=>{
                commit('getActionUser', response.statusText)
            }).finally(()=>{
                commit('stateLoader', false)
            })
        }
    },
    modules: {}
})

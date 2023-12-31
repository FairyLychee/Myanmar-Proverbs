import { createStore } from "vuex";
import axios from "axios";

const store = createStore({

    state: {
        // 4. After getting the required datas,
        // go to the home page and start project
        titles: [],
        details: [],
    },
    mutations: {
        // 3. Catch the data from the action with parameter and asign them
        // into the arrays which are in the state
        getTitle(state, Title) {
            console.log("title : ", Title)
            state.titles = Title
            console.log(state.titles)
        },
        getDetail(state, Detail) {
            state.details = Detail
        }
    },
    actions: {
        // 1. Get the data from api using axios 
        async getData(context) {
            try {
                let response = await axios.get("/MyanmarProverbs.json");
                let data = await response.data;
                console.log("data: ", data)
                // 2. Send the required datas by commiting to mutations;
                context.commit('getTitle', data.Tbl_MMProverbsTitle);
                context.commit('getDetail', data.Tbl_MMProverbs);
            } catch (error) {
                console.log('There is an ERROR while Fetching', error)
            }
        }
        // Important Here :: without in the hook the function won't run
        // so we need to dispatch the function in the created or mounted state first in the app.vue
    },
    getters: {

    }
})

export default store;
import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
// add font awesome
import  "./font-awesome/fontawesome-free-6.4.0-web/css/all.min.css"

const store = createStore({
    state : {
        Bin:{}

    },
    mutations: {
        AddValues(state, newValue) {
            state.Bin.push(newValue);
          }
    }
  })

  const app =createApp(App);
  app.use(store)
  app.use(router);
  app.mount('#app');

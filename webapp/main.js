import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App';
import router from './router';
import { domain, clientId } from "../auth_config.json";
import { Auth0Plugin } from "./auth";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');


Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

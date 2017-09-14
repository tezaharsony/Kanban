// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* eslint-disable */
import firebase from 'firebase'

const config = {
  databaseURL: "https://kanban-2c723.firebaseio.com",
  projectId: "kanban-2c723",
};

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()
Vue.prototype.$tasksRef = db.ref('tasks')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});

import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// import { registerPlugins } from '@/plugins'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import store from './store'
import VueScrollTo from 'vue-scrollto';
import Countdown from 'vue3-flip-countdown';
import FIREBASE_CONFIG from './config/firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';
import 'firebase/compat/auth';
// import VueDatePicker from '@vuepic/vue-datepicker';
// import '@vuepic/vue-datepicker/dist/main.css'

loadFonts()

const app = createApp(App)

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}
export const db = firebase.firestore();
export const auth = firebase.auth();

// Add Vue directive
app.directive('scroll-to', VueScrollTo, {
  container: 'body',
  duration: 1000,
  easing: 'ease',
  offset: -160,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
})

app.use(store)
app.use(router)
app.use(vuetify)
app.use(Countdown)
// app.component('VueDatePicker', VueDatePicker);
// registerPlugins(app)
app.mount('#app')

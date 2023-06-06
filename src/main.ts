import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlay, faPause, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faPlay, faPause, faPlusCircle)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

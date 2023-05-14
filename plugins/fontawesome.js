import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fas, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

config.autoAddCss = false
library.add(fas)
library.add(faPlus)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)

/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'
import DateFnsAdapter from '@date-io/date-fns'
import enUS from 'date-fns/locale/en-US'
import itIT from 'date-fns/locale/it'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
  date: {
    adapter: DateFnsAdapter,
    locale: {
      en: enUS,
      it: itIT,
    },
  },
  components: {
    ...components,
    ...labsComponents,
  },
})

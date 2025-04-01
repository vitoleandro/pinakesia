import { Context , Plugin } from '@nuxt/types'
import createService, { Services } from '@/services'

declare module 'vue/types/vue' {
    interface Vue {
      $services: Services
    }
}

declare module '@nuxt/types' {
    // nuxtContext.app.$services dentro de asyncData, fetch, plugins, middleware, nuxtServerInit
    interface NuxtAppOptions {
        $services: Services
    }
    // nuxtContext.$services
    interface Context {
        $services: Services
    }
}
  
declare module 'vuex/types/index' {
    // this.$services dentro de stores Vuex
    interface Store<S> {
      $services: Services
    }
}
  
const ServicesPlugin: Plugin = ({ $axios }: Context, inject) => {
    inject('services', createService($axios))
}
  
export default ServicesPlugin
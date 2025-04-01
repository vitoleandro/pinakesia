import { Oauth2Scheme, encodeQuery } from '@nuxtjs/auth-next/dist/runtime.js'

export default class KeycloakScheme extends Oauth2Scheme {

  encodeQuery(queryObject) {
    return Object.entries(queryObject).filter(([_key, value]) => typeof value !== "undefined").map(([key, value]) => encodeURIComponent(key) + (value != null ? "=" + encodeURIComponent(value) : "")).join("&");
  }

  logout () {
    if (this.options.endpoints.logout) {
      const opts = {
        client_id: this.options.clientId,
        post_logout_redirect_uri: this.logoutRedirectURI
      }
      const url = this.options.endpoints.logout + '?' + this.encodeQuery(opts)
      
      window.location.replace(url)
      console.log(url);
    }
    return this.$auth.reset()
  }
}

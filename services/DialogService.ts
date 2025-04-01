import { Context } from "@nuxt/types"

export type DialogService = {
    test():void
}

export default ($http: Context['$axios']): DialogService => ({
    test():void {
        console.log("asdasdasd")
    }
    
})
import { Context } from "@nuxt/types"
import DialogService from "./DialogService"

export type Services = {
    dialogs: ReturnType<typeof DialogService>
}

export default ($axios: Context['$axios']): Services => {
    return {
        dialogs: DialogService($axios)
    }
}
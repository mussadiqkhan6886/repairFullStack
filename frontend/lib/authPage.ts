import { getMe } from "@/server/user"
import { redirect } from "next/navigation"

export const requiredRole = async (allowedRoles: string[]) => {
    const me = await getMe()

    if(!allowedRoles.includes(me.role)){
        redirect("/admin/dashboard")
    }

    return me
}
import {cookies} from "next/headers"
export const getMe = async () => {

    const cookiesStore = await cookies()
    const token = cookiesStore.toString()
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/me`, {headers: {Cookie: token}})

    const result = await res.json()
    if(!res.ok){
        throw new Error(result.message)
    }
    return result.user
}
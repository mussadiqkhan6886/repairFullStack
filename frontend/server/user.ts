import { fetchHelper } from "@/lib/helpers/fetchHelper"

export const getMe = async () : Promise<UserType> => {
    const result = await fetchHelper<{user: UserType}>("users/me")
    return result.user
}

export const getAllUsers = async () : Promise<UserType[]> => {
    const result = await fetchHelper<{user: UserType[]}>("users")
    return result.user
}


export const getUser = async (id: string) : Promise<UserType> => {
    const result = await fetchHelper<{user: UserType}>(`users/${id}`)
    return result.user
    
}

export const updateUser = async (data: updateUserData) : Promise<UserType> => {
    const result = await fetchHelper<{user: UserType}>(`users/${data.id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })

    return result.user
}

export const createUser = async (data: Required<UserType>) : Promise<UserType> => {
    const result = await fetchHelper<{user: UserType}>("users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })

    return result.user
}

export const deleteUser = async (id: string) : Promise<void> => {
    await fetchHelper<undefined>(`users/${id}`, {method: "DELETE", headers: {"Content-Type": "application/json"}})
}

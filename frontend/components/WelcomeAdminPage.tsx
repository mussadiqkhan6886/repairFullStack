import { getMe } from '@/server/user'
import React from 'react'

const WelcomeAdminPage = async () => {

    const me = await getMe()
  return (
    <h1 className="uppercase font-semibold text-lg">
      Welcome {me.username}
    </h1>
  )
}

export default WelcomeAdminPage

import React, { useEffect, useState } from 'react'

const useDebounce = (data: string) => {
  const [value, setValue] = useState(data)

  useEffect(() => {
    const time = setTimeout(() => {
      setValue(data)
    }, 800)

    return () => clearTimeout(time)
  }, [data])

  return value
}

export default useDebounce

'use client';

import { deleteNote } from '@/server/note';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React from 'react'

const DeleteNote = ({id}: {id: string}) => {

    const router = useRouter()

    const deleteMut = useMutation({
        mutationFn: deleteNote,
        onSuccess(){
            router.refresh()
        },
        onError(error){
            alert(error.message)
        },
        
    })
  return (
    <button onClick={() => deleteMut.mutate(id)} className="bg-red-600 px-4 py-2 cursor-pointer text-white rounded-lg text-sm">
      Delete
    </button>
  )
}

export default DeleteNote

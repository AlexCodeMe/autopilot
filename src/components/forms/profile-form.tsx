'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

type Props = {
    user: any
    onUpdate?: any
}

export default function ProfileForm({
    user,
    onUpdate
}: Props) {
    const [isLoading, setIsLoading] = useState(false)

    
  return (
    <div>ProfileForm</div>
  )
}
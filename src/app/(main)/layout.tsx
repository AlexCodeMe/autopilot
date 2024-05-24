import Infobar from '@/components/infobar'
import Sidebar from '@/components/sidebar'
import React from 'react'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex overflow-hidden h-screen'>
        <Sidebar />
        <div className='w-full'>
            <Infobar />
            {children}
        </div>
    </div>
  )
}

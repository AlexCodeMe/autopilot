import { useModal } from '@/providers/modal-provider'
import React from 'react'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from '../ui/drawer'
import { Button } from '../ui/button'

type Props = {
    title: string
    subheading: string
    children: React.ReactNode
    defaultOpen?: boolean
}

export default function CustomModal({
    title,
    subheading,
    children,
    defaultOpen,
}: Props) {
    const { isOpen, setClose } = useModal()
    const handleClose = () => setClose()

    return (
        <Drawer open={isOpen} onClose={handleClose}>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className='text-center'>{title}</DrawerTitle>
                    <DrawerDescription className='text-center flex flex-col items-center gap-4 h-96 overflow-scroll'>
                        <span>{subheading}</span>
                        {children}
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter className='flex flex-col gap-4 bg-background border-t-[1px] border-t-muted'>
                    <DrawerClose>
                        <Button variant='ghost'
                            className='w-full'
                            onClick={handleClose}
                        >
                            Close
                        </Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
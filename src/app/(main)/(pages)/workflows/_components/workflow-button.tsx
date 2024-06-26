'use client'

import WorkflowForm from '@/components/forms/workflow-form'
import CustomModal from '@/components/global/custom-modal'
import { Button } from '@/components/ui/button'
import { useModal } from '@/providers/modal-provider'
import { Plus } from 'lucide-react'
import React from 'react'

export default function WorkflowButton() {
    const { setOpen, setClose } = useModal()

    function handleClick() {
        setOpen(
            <CustomModal title="Create a Workflow Automation"
              subheading="Workflows are a powerfull that help you automate tasks."
            >
              <WorkflowForm />
            </CustomModal>
        )
    }

    return (
        <Button size='icon' onClick={handleClick}>
            <Plus />
        </Button>
    )
}

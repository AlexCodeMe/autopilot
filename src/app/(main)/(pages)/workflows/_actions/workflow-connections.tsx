'use server'

import { db } from "@/lib/db"
import { currentUser, getAuth } from "@clerk/nextjs/server"

export async function onFlowPublish(workflowId: string, state: boolean) {
    const published = await db.workflows.update({
        where: {
            id: workflowId,
        },
        data: {
            publish: state,
        },
    })

    if (published.publish) return 'Workflow published'
    return 'Workflow unpublished'
}

export async function onGetWorkflows() {
    const user = await currentUser()
    if (user) {
        const workflow = await db.workflows.findMany({
            where: {
                userId: user.id,
            },
        })

        if (workflow) return workflow
    }
}

export async function onCreateWorkflow(name: string, description: string) {
    const user = await currentUser()

    if (user) {
        const workflow = await db.workflows.create({
            data: {
                userId: user.id,
                name,
                description,
            },
        })

        if (workflow) return { message: 'Workflow created' }
        return { message: 'Oops! Try again' }
    }
    return { message: 'No user authenticated' }
}
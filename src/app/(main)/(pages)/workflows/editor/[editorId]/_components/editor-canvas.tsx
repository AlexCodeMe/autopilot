'use client'

import { useEditor } from '@/providers/editor-provider'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

export default function EditorCanvas() {
    const { dispatch, state } = useEditor()
    const pathname = usePathname()

    const [nodes, setNodes] = useState(initialNodes)
    const [edges, setEdges] = useState(initialEdges)
    const [isWorkFlowLoading, setIsWorkFlowLoading] = useState<boolean>(false)
    const [reactFlowInstance, setReactFlowInstance] =
        useState<ReactFlowInstance>()
    return (
        <div>EditorCanvas</div>
    )
}

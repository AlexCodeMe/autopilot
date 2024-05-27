import { ConnectionProviderProps } from '@/providers/connections-provider'
import { EditorState } from '@/providers/editor-provider'
import React from 'react'

export default function RenderOutputAccordion({
    state,
    nodeConnection,
}: {
    state: EditorState
    nodeConnection: ConnectionProviderProps
}) {
    return (
        <div>RenderOutputAccordion</div>
    )
}

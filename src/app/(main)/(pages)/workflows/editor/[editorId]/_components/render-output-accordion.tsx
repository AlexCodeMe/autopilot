import { ConnectionProviderProps } from '@/providers/connections-provider'
import { EditorState } from '@/providers/editor-provider'
import { useFuzzieStore } from '@/store'
import React from 'react'
import ContentBasedOnTitle from './content-based-on-title'

export default function RenderOutputAccordion({
    state,
    nodeConnection,
}: {
    state: EditorState
    nodeConnection: ConnectionProviderProps
}) {
    const {
        googleFile,
        setGoogleFile,
        selectedSlackChannels,
        setSelectedSlackChannels,
    } = useFuzzieStore()


    return <ContentBasedOnTitle
        nodeConnection={nodeConnection}
        newState={state}
        file={googleFile}
        setFile={setGoogleFile}
        selectedSlackChannels={selectedSlackChannels}
        setSelectedSlackChannels={setSelectedSlackChannels}
    />
}

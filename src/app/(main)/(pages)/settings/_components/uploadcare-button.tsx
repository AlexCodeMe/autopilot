'use client'

import * as LR from '@uploadcare/blocks'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

import "@uploadcare/blocks/web/lr-file-uploader-regular.min.css"

LR.registerBlocks(LR)

export default function UploadCareButton({ onUpload }: { onUpload: (e: string) => any }) {
    const router = useRouter()
    const ctxProviderRef = useRef<
        typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
    >(null)

    useEffect(() => {
        if (!ctxProviderRef.current) return

        async function handleUpload(e: any) {
            const file = await onUpload(e.detail.cdnUrl)
            if (file) {
                router.refresh()
            }
        }

        ctxProviderRef.current.addEventListener('file-upload-success', handleUpload)
        return () => ctxProviderRef.current?.removeEventListener('file-upload-success', handleUpload)
    }, [])

    return (
        <div>
            <lr-config
                ctx-name="my-uploader"
                pubkey="ce48208d2c14400a5915"
            />

            <lr-file-uploader-regular
                ctx-name="my-uploader"
            />

            <lr-upload-ctx-provider
                ctx-name="my-uploader"
                ref={ctxProviderRef}
            />
        </div>
    )
}

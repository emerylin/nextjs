"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Playground() {
    const router = useRouter()
    const [value, setValue] = useState("none")

    return <div>
        <div><input type="button" onClick={() => setValue("set")} value="Set" /></div>
        <div><input type="button" onClick={() => router.refresh()} value="Refresh" /></div>
        <div>
            Value: {value}
        </div>
    </div>
}
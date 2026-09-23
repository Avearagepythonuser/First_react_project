import React from "react"
import { useState } from "react"

export default function MyImage({num}) {
    const url = `https://picsum.photos/id/${num}/400`

    return (
        <div className="flex items-center flex-col bg-amber-50 p-3 max-w-3xl m-auto">
            <h2>Lorem ipsum image</h2>
            <img src={url} alt="picsum image" className="rounded-3xl"/>
        </div>
    )
}
import React from 'react'
import { useState } from 'react'

const TextUpdater = () => {
    const [text, setText] = useState("");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-2xl font-bold mb-4">Text Updater</h1>
        <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-400 p-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <p className="mt-4 text-lg text-gray-700">You typed: {text}</p>
    </div>
  )
}

export default TextUpdater
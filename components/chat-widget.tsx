"use client"

import { useState } from "react"
import { MessageSquare, X } from "lucide-react"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg w-80 h-96 flex flex-col border">
          <div className="bg-primary text-white p-3 flex justify-between items-center rounded-t-lg">
            <h3 className="font-medium">Customer Support</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto">
            <div className="bg-gray-100 p-2 rounded-lg mb-2 max-w-[80%]">
              <p className="text-sm">Hello! How can I help you today?</p>
            </div>
          </div>
          <div className="p-3 border-t">
            <div className="flex">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-r-lg">Send</button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
          aria-label="Open chat"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}

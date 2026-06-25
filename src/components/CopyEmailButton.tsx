'use client'

import { useState } from 'react'

const CopyEmailButton = ({ email }: { email: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 bg-white/10 px-4 py-3 rounded-lg hover:bg-brand-accent/20 hover:border-brand-accent/50 border border-transparent transition-colors cursor-pointer"
    >
      <svg className="w-5 h-5 text-brand-accent" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/>
      </svg>
      <span className="text-white text-sm md:text-base">{copied ? 'Copied!' : email}</span>
    </button>
  )
}

export default CopyEmailButton

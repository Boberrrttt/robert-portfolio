'use client'

import { useState } from 'react'
import { Copy, Check, Mail } from 'lucide-react'

const EMAIL = 'salvo.robertroy@gmail.com'

const ContactsSection = () => {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <section
      id="contact"
      className="pt-24 md:pt-28 pb-20 md:pb-28 bg-gradient-to-b from-brand-primary to-brand-secondary border-t border-white/10"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <h2 id="contact-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-300 text-lg mb-10">
          Open to new projects, collaborations, and opportunities. Recruiters—feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://github.com/Boberrrttt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
            aria-label="Robert Salvo on GitHub (opens in new tab)"
          >
            <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/robert-salvo-2513a9283/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
            aria-label="Robert Salvo on LinkedIn (opens in new tab)"
          >
            <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/robert.salvo.376/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
            aria-label="Robert Salvo on Facebook (opens in new tab)"
          >
            <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
            </svg>
            Facebook
          </a>
        </div>

        <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10">
          <p className="text-gray-300 mb-4 font-medium">Email</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 text-white font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-secondary rounded px-2 py-1"
            >
              <Mail className="w-5 h-5 shrink-0" aria-hidden />
              {EMAIL}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/15 hover:bg-white/25 text-white text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-secondary"
              aria-label={copied ? 'Email copied' : 'Copy email address'}
            >
              {copied ? <Check className="w-4 h-4" aria-hidden /> : <Copy className="w-4 h-4" aria-hidden />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactsSection

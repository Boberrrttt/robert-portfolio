const Footer = () => {
  return (
    <footer className="bg-brand-secondary text-gray-500 text-center py-8 pb-24 md:pb-8 text-sm font-mono-tag border-t border-white/5">
      © {new Date().getFullYear()} Robert Salvo · Built with Next.js
    </footer>
  )
}

export default Footer

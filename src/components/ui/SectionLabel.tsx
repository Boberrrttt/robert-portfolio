type SectionLabelProps = {
  index: string
  title: string
  subtitle?: string
}

const SectionLabel = ({ index, title, subtitle }: SectionLabelProps) => {
  return (
    <div className="mb-6 md:mb-8">
      <span className="font-mono-tag text-brand-accent text-sm tracking-widest">
        {index}
      </span>
      <h2 className="font-display text-white font-bold text-3xl md:text-4xl lg:text-5xl mt-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 mt-3 max-w-2xl text-sm md:text-base">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionLabel

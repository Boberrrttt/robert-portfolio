import { cn } from "@/lib/utils"

type TagProps = {
  children: React.ReactNode
  className?: string
}

const Tag = ({ children, className }: TagProps) => {
  return (
    <span
      className={cn(
        "font-mono-tag px-3 py-1 border border-brand-accent/50 text-brand-accent rounded-full text-xs md:text-sm",
        className
      )}
    >
      {children}
    </span>
  )
}

export default Tag

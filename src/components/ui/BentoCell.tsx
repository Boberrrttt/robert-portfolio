import { cn } from "@/lib/utils"

type BentoCellProps = {
  children: React.ReactNode
  className?: string
  col?: string
  row?: string
  id?: string
}

const BentoCell = ({ children, className, col, row, id }: BentoCellProps) => {
  return (
    <div
      id={id}
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6 transition-colors hover:border-brand-accent/25",
        col,
        row,
        className
      )}
    >
      {children}
    </div>
  )
}

export default BentoCell

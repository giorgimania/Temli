import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}

export function SectionHeading({ eyebrow, title, description, align = 'center', className }: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'mx-auto max-w-2xl items-center text-center' : 'max-w-xl items-start text-left',
        className,
      )}
    >
      <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        <span aria-hidden="true" className="h-px w-8 bg-primary" />
        {eyebrow}
        {align === 'center' && <span aria-hidden="true" className="h-px w-8 bg-primary" />}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">{description}</p>}
    </div>
  )
}

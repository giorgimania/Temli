import { Home } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({ className, tagline }: { className?: string; tagline?: string }) {
  return (
    <a href="#top" className={cn('flex items-center gap-3', className)} aria-label="Temli Inc. home">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary shadow-sm">
        <Home className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-lg font-bold tracking-tight">Temli Inc.</span>
        {tagline && <span className="text-xs font-medium opacity-70">{tagline}</span>}
      </span>
    </a>
  )
}

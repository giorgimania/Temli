import { CheckCircle2, MapPin, Star } from 'lucide-react'
import { SectionHeading } from '@/components/site/section-heading'

const trustPoints = [
  {
    icon: MapPin,
    title: 'Local Vaughan Crew',
    description: 'We live and work in this community. No subcontracting — just our own trusted team on every job.',
  },
  {
    icon: CheckCircle2,
    title: 'Free Estimates',
    description: 'No surprises. We walk through your project, give you a clear quote, and stick to it.',
  },
  {
    icon: Star,
    title: 'Quality Guaranteed',
    description:
      "We don't consider a job done until you're happy. Every project is finished with care and attention to detail.",
  },
]

export function Trust() {
  return (
    <section id="about" className="scroll-mt-28 bg-background py-20 md:py-28">
      <div className="container mx-auto flex flex-col gap-14 px-4">
        <SectionHeading
          eyebrow="Why Temli"
          title="Why Choose Us?"
          description="Vaughan homeowners trust Temli Inc. for a reason."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-lg"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ring-8 ring-primary/5">
                <point.icon className="h-7 w-7 text-primary" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{point.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

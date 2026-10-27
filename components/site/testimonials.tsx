import { Quote, Star } from 'lucide-react'
import { SectionHeading } from '@/components/site/section-heading'

const testimonials = [
  {
    quote:
      "Temli did our entire backyard interlocking and it turned out incredible. They were on time, cleaned up every day, and the price was exactly what they quoted. Couldn't ask for more.",
    author: 'Sarah M.',
    location: 'Vaughan',
  },
  {
    quote:
      "We had our basement fully finished and two rooms painted. The team was professional and friendly the whole way through. We'll definitely be calling Temli again for our kitchen.",
    author: 'James & Lisa T.',
    location: 'Woodbridge',
  },
  {
    quote:
      'Best decision we made for our home. The front yard cement work is flawless. Neighbours keep asking who did it!',
    author: 'Roberto P.',
    location: 'Maple',
  },
]

function initials(name: string) {
  return name
    .split(/[\s&]+/)
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
}

export function Testimonials() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto flex flex-col gap-14 px-4">
        <SectionHeading eyebrow="Testimonials" title="What Our Customers Say" description="Real reviews from Vaughan homeowners." />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="relative flex flex-col gap-6 rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/10" aria-hidden="true" />
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="flex-1 leading-relaxed text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3 border-t border-border pt-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {initials(testimonial.author)}
                </span>
                <span className="flex flex-col">
                  <span className="font-semibold text-foreground">{testimonial.author}</span>
                  <span className="text-sm text-muted-foreground">{testimonial.location}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

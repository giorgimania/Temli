import { ArrowUpRight, BrickWall, Hammer, LayoutGrid, PaintRoller, type LucideIcon } from 'lucide-react'
import { SectionHeading } from '@/components/site/section-heading'

type Service = {
  icon: LucideIcon
  title: string
  description: string
  image: string
  imagePosition?: string
}

const services: Service[] = [
  {
    icon: BrickWall,
    title: 'Cement & Interlocking',
    description:
      'Transform your front yard, backyard, or driveway with custom cement work and interlocking stone. Built to last through every Ontario winter.',
    image: '/service-cement-interlocking.jpg',
  },
  {
    icon: Hammer,
    title: 'Basement Finishing',
    description:
      'Turn your unfinished basement into a space your family will actually use. From framing and drywall to full makeovers.',
    image: '/service-basement.jpg',
  },
  {
    icon: PaintRoller,
    title: 'Painting',
    description:
      'Fresh walls make a world of difference. Interior painting for every room — clean lines, no mess, and a finish that lasts.',
    image: '/service-painting.jpg',
    imagePosition: '72% center',
  },
  {
    icon: LayoutGrid,
    title: 'Flooring & Kitchens',
    description:
      'New floors and updated kitchens add value and beauty to your home. A range of materials to match your style and budget.',
    image: '/service-flooring-kitchens.jpg',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-28 bg-card py-20 md:py-28">
      <div className="container mx-auto flex flex-col gap-14 px-4">
        <SectionHeading
          eyebrow="Our Services"
          title="What We Do"
          description="Quality craftsmanship for every corner of your home — inside and out."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} project by Temli Inc.`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: service.imagePosition ?? 'center' }}
                />
                <span className="absolute bottom-0 left-6 flex h-12 w-12 translate-y-1/2 items-center justify-center rounded-lg bg-primary shadow-lg ring-4 ring-background">
                  <service.icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 px-6 pb-6 pt-10">
                <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {service.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <a
                  href="#contact"
                  className="mt-2 inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2"
                >
                  Get a quote
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

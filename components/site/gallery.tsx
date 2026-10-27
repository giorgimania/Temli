import { SectionHeading } from '@/components/site/section-heading'

const projects = [
  { image: '/work-1.jpg', title: 'Completed Temli Inc. project 1' },
  { image: '/work-2.jpg', title: 'Completed Temli Inc. project 2' },
  { image: '/work-3.jpg', title: 'Completed Temli Inc. project 3' },
  { image: '/work-4.jpg', title: 'Completed Temli Inc. project 4' },
  { image: '/work-5.jpg', title: 'Completed Temli Inc. project 5' },
  { image: '/work-6.jpg', title: 'Completed Temli Inc. project 6' },
]

export function Gallery() {
  return (
    <section id="work" className="scroll-mt-28 bg-card py-20 md:py-28">
      <div className="container mx-auto flex flex-col gap-14 px-4">
        <SectionHeading
          eyebrow="Recent Projects"
          title="Our Work Speaks for Itself"
          description="Take a look at some of the projects we've completed for Vaughan homeowners just like you."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.map((project) => (
            <figure
              key={project.image}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted shadow-sm ring-1 ring-border"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

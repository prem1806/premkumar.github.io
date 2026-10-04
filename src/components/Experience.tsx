import { experience, ExperienceItem } from '../data/experience'

function ExperienceCard({ icon, company, period, role }: ExperienceItem) {
  return (
    <div className="p-6 bg-slate-900/50 border border-white/10 rounded-2xl flex items-start gap-4 hover:bg-slate-900/80 transition-colors">
      <div className="w-12 h-12 flex-shrink-0 bg-white/5 rounded-lg flex items-center justify-center">
        <span className="material-symbols-outlined text-[#FF5F40]">{icon}</span>
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold">{company}</h3>
          <span className="text-slate-400 text-sm">{period}</span>
        </div>
        <p className="text-slate-400">{role}</p>
      </div>
    </div>
  )
}

export default function Experience() {
  const grid = experience.filter((e) => !e.wide)
  const wide = experience.find((e) => e.wide)

  return (
    <section className="py-16 bg-[#0A1221] dark:bg-slate-950 text-white overflow-hidden" id="experience">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-display font-black text-[#FF5F40] mb-10">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {grid.map((item) => (
            <ExperienceCard key={item.company} {...item} />
          ))}
        </div>

        {wide && (
          <div className="mt-6 flex justify-center">
            <div className="w-full md:w-1/2">
              <ExperienceCard {...wide} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

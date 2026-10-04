import { education } from '../data/education'

export default function Education() {
  return (
    <section className="py-16 px-6 bg-slate-50 dark:bg-slate-900" id="education">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-[#FF5F40]">Education</h2>
        </div>

        <div className="space-y-8">
          {education.map((item) => (
            <div
              key={item.school}
              className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#FF5F40] border-4 border-slate-50 dark:border-slate-900"></div>
              <h3 className="text-2xl font-bold mb-1">{item.school}</h3>
              <p className="text-[#FF5F40] font-semibold mb-2">{item.degree}</p>
              <p className="text-slate-500 dark:text-slate-400">{item.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

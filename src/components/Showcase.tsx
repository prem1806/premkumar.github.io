import { projects, badgeColorClasses, Project } from '../data/projects'

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col bg-slate-50 dark:bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="w-full h-48 overflow-hidden">
        <img
          alt={project.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 shadow-inner"
          src={project.image}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div
            className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${badgeColorClasses[project.badgeColor]}`}
          >
            {project.badge}
          </div>
          <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest">
            Frontend Developer
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
        <p className="text-sm font-semibold text-[#FF5F40] mb-4">{project.subtitle}</p>
        <ul className="space-y-2 mb-6">
          {project.points.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
              <span className="material-symbols-outlined text-[#FF5F40] text-sm mt-0.5">check_circle</span>
              {point}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-[10px] font-bold bg-slate-200 dark:bg-slate-800 rounded uppercase text-slate-600 dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="p-3 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-900/20 mb-2">
          <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
            Impact
          </p>
          <p className="text-sm text-emerald-800 dark:text-emerald-300">{project.impact}</p>
        </div>
        <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800">
          <a
            className="inline-flex items-center gap-2 text-sm font-bold text-[#FF5F40] hover:gap-3 transition-all focus:outline-none"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
            <span className="material-symbols-outlined text-base">open_in_new</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Showcase() {
  return (
    <section className="py-16 px-6 bg-white dark:bg-[#0F172A]" id="showcase">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display font-black text-[#FF5F40] mb-10">Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

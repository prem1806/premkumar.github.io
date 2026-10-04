export default function Contact() {
  return (
    <section className="py-16 px-6 bg-slate-100 dark:bg-slate-950/50" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-0 rounded-[2rem] overflow-hidden shadow-2xl">
        <div className="flex-1 bg-[#FF5F40] p-10 md:p-16 text-white">
          <p className="text-lg font-medium opacity-80 mb-4">Email me at</p>
          <a
            className="text-3xl md:text-5xl font-display font-extrabold break-all hover:underline leading-tight"
            href="mailto:premkumarparsmani@gmail.com"
          >
            premkumarparsmani@gmail.com
          </a>
        </div>

        <div className="flex-1 bg-white dark:bg-slate-900 p-10 md:p-16 flex flex-col justify-center items-center text-center">
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-xs">
            Would you like to learn about my journey as a UI developer?
          </p>
          <a
            className="text-4xl md:text-5xl font-display font-extrabold text-[#0A66C2] hover:scale-105 transition-transform"
            href="https://www.linkedin.com/in/venkatapremkumar/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] font-bold text-slate-400">
            Because Resumes are old fashioned now
          </p>
        </div>
      </div>
    </section>
  )
}

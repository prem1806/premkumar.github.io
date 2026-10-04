export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          © {new Date().getFullYear()} Prem. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            className="text-slate-400 hover:text-[#FF5F40] transition-colors"
            href="https://github.com/prem1806"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

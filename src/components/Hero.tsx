import profile from '../images/pic.jpg'

export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6" id="me">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="w-12 h-1 bg-[#FF5F40] mb-8"></div>
          <h2 className="text-lg font-medium text-slate-500 dark:text-slate-400 mb-4">Hello!</h2>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-8">
            I am Frontend Developer.
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-xl">
            Senior Frontend Developer with 9+ years of experience building scalable web applications
            and business platforms. Specialized in React-based interfaces, workflow automation
            dashboards, and production client websites.
            <br /><br />
            Experienced in transforming manual operational processes into digital systems, improving
            efficiency, reducing errors, and enhancing user experience across enterprise and
            customer-facing products.
          </p>
          <a
            className="inline-flex items-center justify-center px-8 py-4 bg-[#FF5F40] text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-[#FF5F40]/20"
            href="#contact"
          >
            Let's Talk
          </a>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#FF5F40]/20 rounded-2xl blur-2xl group-hover:bg-[#FF5F40]/30 transition duration-500"></div>
            <img
              alt="Professional Profile Photo"
              className="relative w-full max-w-md aspect-[4/5] object-cover rounded-2xl opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 shadow-2xl"
              src={profile}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

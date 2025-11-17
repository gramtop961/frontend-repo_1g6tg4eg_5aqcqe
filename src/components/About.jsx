export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Journey</h2>
            <p className="mt-4 text-gray-700">Established in 2020, Enonte has quickly emerged as a leading force in AI innovation and enterprise-grade IT infrastructure. Founded by visionaries with extensive experience in technology leadership, we've grown from a small team of experts to an innovation powerhouse.</p>
            <p className="mt-4 text-gray-700">We've built our reputation on two core pillars — AI-driven innovation and future-ready infrastructure. By partnering with industry leaders, we empower businesses to operate smarter, scale faster, and stay secure in an increasingly complex digital landscape.</p>
            <div className="mt-6 inline-flex items-center rounded-full bg-indigo-50 text-indigo-700 px-4 py-2 font-semibold">5+ Years of Excellence</div>
            <a href="#contact" className="mt-6 block w-max rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-3">Let's work together</a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200">
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=2069&auto=format&fit=crop" alt="AI visualization" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import DocumentTypes from './components/DocumentTypes'
import UseCases from './components/UseCases'
import Journey from './components/Journey'
import Value from './components/Value'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <DocumentTypes />
      <UseCases />
      <Journey />
      <Value />
      <About />
      <ContactCTA />
      <Footer />
    </div>
  )
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-fuchsia-600" />
          <span className="font-bold">LexaVision</span>
          <span className="text-gray-400 text-sm">by Enonte</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#problem" className="hover:text-gray-900">Problem</a>
          <a href="#solution" className="hover:text-gray-900">Solution</a>
          <a href="#how" className="hover:text-gray-900">How It Works</a>
          <a href="#types" className="hover:text-gray-900">Documents</a>
          <a href="#use-cases" className="hover:text-gray-900">Use Cases</a>
          <a href="#journey" className="hover:text-gray-900">Journey</a>
          <a href="#about" className="hover:text-gray-900">About</a>
        </nav>
        <a href="#contact" className="rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 text-sm">Get Started</a>
      </div>
    </header>
  )
}

function ContactCTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold">Ready to transform your document processing?</h3>
            <p className="mt-3 text-white/90">Book a call and we’ll walk you through LexaVision with a tailored demo for your workflows.</p>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Full name" className="w-full rounded-lg bg-white/80 text-gray-900 px-4 py-3 outline-none" />
              <input required type="email" placeholder="Work email" className="w-full rounded-lg bg-white/80 text-gray-900 px-4 py-3 outline-none" />
              <input placeholder="Company" className="sm:col-span-2 w-full rounded-lg bg-white/80 text-gray-900 px-4 py-3 outline-none" />
              <textarea placeholder="What do you want to automate?" rows={4} className="sm:col-span-2 w-full rounded-lg bg-white/80 text-gray-900 px-4 py-3 outline-none" />
            </div>
            <button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white text-indigo-700 font-semibold px-5 py-3 shadow-lg hover:shadow-xl transition">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default App

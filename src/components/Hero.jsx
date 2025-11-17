import { motion } from 'framer-motion'
import { Play, ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(circle at 20% 10%, rgba(255,255,255,.4) 0, transparent 35%), radial-gradient(circle at 80% 50%, rgba(255,255,255,.25) 0, transparent 40%), radial-gradient(circle at 30% 80%, rgba(255,255,255,.2) 0, transparent 45%)'
      }} />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-24 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm mb-6 ring-1 ring-white/20">
              <Sparkles className="h-4 w-4" />
              <span>A product by</span>
              <span className="font-semibold">Enonte</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Snap, Extract, Analyze, Powered by AI
            </h1>
            <p className="mt-6 text-lg/8 text-white/90 max-w-xl">
              Transform your document processing with AI-based intelligent data extraction and analysis.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white text-indigo-700 font-semibold px-5 py-3 shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 transition">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#demo" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 ring-1 ring-white/20 hover:bg-white/15 transition">
                <Play className="h-4 w-4" />
                Watch Demo
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <AnimatedDemo />
          </div>
        </div>
      </div>
    </section>
  )
}

function AnimatedDemo() {
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } }
  }
  const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="relative bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md p-6 sm:p-8"
    >
      <motion.div variants={item} className="flex items-center justify-between mb-4">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />
      </motion.div>

      <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-800">Bill of Materials.pdf</h3>
          <div className="mt-3 h-40 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 p-3 text-xs text-gray-500 grid grid-rows-5 gap-1">
              <div className="w-full h-4 bg-white/70 rounded" />
              <div className="w-4/5 h-4 bg-white/70 rounded" />
              <div className="w-3/5 h-4 bg-white/70 rounded" />
              <div className="w-11/12 h-4 bg-white/70 rounded" />
              <div className="w-2/3 h-4 bg-white/70 rounded" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-semibold text-gray-800">Structured Output</h3>
          <pre className="mt-3 h-40 bg-gray-900 text-green-300 text-xs rounded-lg p-3 overflow-auto">
{
  "document_id": "BOM-2024-001",
  "part_info": [
    { "part": "AX-120", "qty": 40, "material": "Aluminium" },
    { "part": "BX-240", "qty": 15, "material": "Steel" }
  ],
  "currency": "USD"
}
          </pre>
        </div>
      </motion.div>

      <motion.div variants={item} className="mt-6 grid sm:grid-cols-3 gap-3">
        <Callout label="Document ID" color="bg-indigo-500" />
        <Callout label="Part Info" color="bg-violet-500" />
        <Callout label="Material" color="bg-fuchsia-500" />
      </motion.div>
    </motion.div>
  )
}

function Callout({ label, color }) {
  return (
    <div className="flex items-center gap-3 bg-white/10 border border-white/20 text-white rounded-xl px-4 py-3">
      <div className={`h-3 w-3 rounded-full ${color}`} />
      <span className="text-sm">{label}</span>
    </div>
  )
}

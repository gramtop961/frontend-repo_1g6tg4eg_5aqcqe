import { ArrowRight } from 'lucide-react'

export default function Journey() {
  const steps = [
    { title: 'Discovery', desc: 'Assessment of your document processing needs' },
    { title: 'Configuration', desc: 'Setup of custom extraction templates' },
    { title: 'Integration', desc: 'Connection with your existing systems' },
    { title: 'Training', desc: 'Team preparation for the new workflow' },
    { title: 'Go-Live', desc: 'Full deployment with ongoing support' },
  ]
  return (
    <section className="py-20 bg-white" id="journey">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Implementation Journey</h2>
        <div className="mt-10 relative">
          <div className="hidden md:block absolute left-0 right-0 top-9 h-1 bg-gradient-to-r from-indigo-200 via-violet-200 to-fuchsia-200 rounded-full" />
          <div className="grid md:grid-cols-5 gap-6 relative">
            {steps.map((s, i) => (
              <div key={s.title} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm relative">
                <div className="flex items-center gap-2 text-indigo-600 font-semibold">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50 border border-indigo-200">{i + 1}</span>
                  {i < steps.length - 1 && <ArrowRight className="h-4 w-4 hidden md:block" />}
                </div>
                <h3 className="mt-3 font-semibold text-gray-900">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

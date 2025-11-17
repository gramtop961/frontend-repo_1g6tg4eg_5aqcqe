import { CheckCircle2, FileText, Code2, PlugZap, Brain } from 'lucide-react'

export default function Solution() {
  const features = [
    { icon: FileText, title: 'Instant data extraction from any document format' },
    { icon: Code2, title: 'Structured JSON output ready for your systems' },
    { icon: PlugZap, title: 'Seamless integration with existing workflows and social media bots' },
    { icon: Brain, title: 'Continuous learning that improves with each document' },
  ]
  return (
    <section className="py-20 bg-white" id="solution">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">LexaVision transforms how your company handles critical documentation</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title }) => (
            <div key={title} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <Icon className="h-5 w-5 text-indigo-600" />
                  <p className="mt-3 font-medium text-gray-800">{title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

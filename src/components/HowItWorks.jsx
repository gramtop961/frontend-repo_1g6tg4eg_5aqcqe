import { Camera, FileSearch, BarChart3, Cable } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { icon: Camera, title: 'Snap', desc: 'Upload image or PDF' },
    { icon: FileSearch, title: 'Extract', desc: 'AI identifies and extracts key data points' },
    { icon: BarChart3, title: 'Analyze', desc: 'Convert unstructured content to structured data' },
    { icon: Cable, title: 'Integrate', desc: 'Use JSON output in your systems' },
  ]
  return (
    <section className="py-20 bg-gray-50" id="how">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How It Works</h2>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl bg-white border border-gray-200 p-6">
              <Icon className="h-6 w-6 text-indigo-600" />
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <div id="demo" className="mt-12 rounded-2xl overflow-hidden border border-gray-200">
          <div className="grid md:grid-cols-2">
            <div className="p-6 bg-white">
              <h4 className="font-semibold text-gray-900">Bill of Materials (Sample)</h4>
              <div className="mt-3 text-sm text-gray-600 space-y-2">
                <p>Document ID: BOM-2024-001</p>
                <p>Part: AX-120 | Qty: 40 | Material: Aluminium</p>
                <p>Part: BX-240 | Qty: 15 | Material: Steel</p>
              </div>
            </div>
            <div className="p-6 bg-gray-900 text-green-300 text-sm">
              <pre>{`{
  "document_id": "BOM-2024-001",
  "parts": [
    { "part": "AX-120", "qty": 40, "material": "Aluminium" },
    { "part": "BX-240", "qty": 15, "material": "Steel" }
  ]
}`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

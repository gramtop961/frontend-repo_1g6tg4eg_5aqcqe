import { ShieldCheck, Sparkle, Cpu, RefreshCcw } from 'lucide-react'

export default function Value() {
  const groups = [
    {
      title: 'Ongoing Partnership',
      items: ['Dedicated account management', 'Quick and priority support', 'Discounts on future projects']
    },
    {
      title: 'Trusted Technology',
      items: ['Latest AI technology', 'Best cloud infrastructure']
    },
    {
      title: 'Continuous Improvement',
      items: ['Regular AI improvements', 'Best global talent']
    },
    {
      title: 'Top-notch Security',
      items: ['SOC 2 Type II compliant infrastructure', 'AES-256 encryption for all data', 'Automatic PII detection and handling']
    },
  ]
  return (
    <section className="py-20 bg-gray-50" id="value">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">You Also Get</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map(({ title, items }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                {items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

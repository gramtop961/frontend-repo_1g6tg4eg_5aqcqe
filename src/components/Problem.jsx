import { AlarmClock, AlertTriangle, ClipboardList, Timer, Users } from 'lucide-react'

export default function Problem() {
  const items = [
    { icon: AlarmClock, title: 'Time-consuming manual document processing' },
    { icon: AlertTriangle, title: 'Error-prone data entry from physical documents' },
    { icon: ClipboardList, title: 'Inconsistent information extraction across teams' },
    { icon: Timer, title: 'Delayed customer service due to processing bottlenecks' },
    { icon: Users, title: 'Resource drain from document handling tasks' },
  ]
  return (
    <section className="relative bg-gray-50 py-20" id="problem">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=1935&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">The Document Challenge</h2>
        <p className="text-gray-600 max-w-3xl">Companies face a daily data mountain</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title }) => (
            <div key={title} className="rounded-xl bg-white border border-gray-200 p-5 shadow-sm hover:shadow transition">
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-indigo-600" />
                <h3 className="font-semibold text-gray-900">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

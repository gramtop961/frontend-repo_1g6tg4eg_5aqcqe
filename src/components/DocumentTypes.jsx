import { FileBadge2, IdCard, Receipt, PackageSearch, Pill, ShieldCheck, Car, FileText, Layers, CreditCard } from 'lucide-react'

export default function DocumentTypes() {
  const items = [
    { icon: Car, title: 'Vehicle Registration Certificates' },
    { icon: IdCard, title: 'National Identity Cards' },
    { icon: Receipt, title: 'Invoices & Financial Documents' },
    { icon: PackageSearch, title: 'Supply Chain Documents' },
    { icon: Pill, title: 'Medical Prescriptions' },
    { icon: ShieldCheck, title: 'Medical Certificates' },
    { icon: IdCard, title: 'Driving Licenses' },
    { icon: CreditCard, title: 'Insurance Documents & Cards' },
    { icon: Layers, title: 'Bill of Materials' },
    { icon: FileText, title: 'Bank Documents' },
  ]
  return (
    <section className="py-20 bg-white" id="types">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Works On Any Document</h2>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map(({ icon: Icon, title }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-4 hover:shadow-sm transition flex items-start gap-3">
              <Icon className="h-5 w-5 text-indigo-600 flex-none" />
              <span className="text-sm font-medium text-gray-800">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function UseCases() {
  const items = [
    {
      title: 'Supply Chain Automation',
      desc: 'Take a photo of a Bill of Material → LexaVision extracts part numbers, quantities, and costs → Auto-populates SAP or ERP systems',
      img: 'https://images.unsplash.com/photo-1555530743-836e5fb0d6d3?q=80&w=1887&auto=format&fit=crop'
    },
    {
      title: 'Banking & Financial Services',
      desc: 'Digitize KYC documents, bank statements, and forms → Automate compliance checks',
      img: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1974&auto=format&fit=crop'
    },
    {
      title: 'Insurance Claims',
      desc: 'Process medical certificates, policy documents, and ID cards → Auto-fill claim forms in CRM',
      img: 'https://images.unsplash.com/photo-1462899006636-339e08d1844e?q=80&w=1974&auto=format&fit=crop'
    },
    {
      title: 'Healthcare Records Management',
      desc: 'Extract prescription details from scanned doctor notes → Push into patient record systems',
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1974&auto=format&fit=crop'
    },
  ]
  return (
    <section className="py-20 bg-gray-50" id="use-cases">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Use Cases</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ title, desc, img }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <img src={img} alt={title} className="h-40 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

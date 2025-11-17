export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="text-white font-extrabold text-xl">Enonte</div>
            <p className="text-gray-400 mt-2">Where Innovation Meets Excellence</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-white font-semibold">Contact</p>
              <p className="mt-2">No 14, Sir Baron Jayathilaka Mawatha, Colombo 01, Sri Lanka</p>
              <p className="mt-2">+94 71 868 2535 / +94 77 457 1135</p>
              <p className="mt-2">sales@enonte.com</p>
              <p className="mt-2">www.enonte.com</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-gray-500">© {new Date().getFullYear()} Enonte. All rights reserved.</div>
      </div>
    </footer>
  )
}

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-space-black border-t border-space-hover mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gradient">Cosmic Explorer</h3>
            <p className="text-text-secondary text-sm">
              Making space education accessible and engaging for everyone. Explore the universe, one discovery at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/planets" className="text-text-secondary text-sm hover:text-nebula-purple transition-colors">
                  Planets
                </Link>
              </li>
              <li>
                <Link href="/stars" className="text-text-secondary text-sm hover:text-nebula-purple transition-colors">
                  Stars
                </Link>
              </li>
              <li>
                <Link href="/galaxies" className="text-text-secondary text-sm hover:text-nebula-purple transition-colors">
                  Galaxies
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-text-secondary text-sm hover:text-nebula-purple transition-colors">
                  Learning Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-text-primary">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://nasa.gov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary text-sm hover:text-nebula-purple transition-colors"
                >
                  NASA Official Site
                </a>
              </li>
              <li>
                <a 
                  href="https://esa.int" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary text-sm hover:text-nebula-purple transition-colors"
                >
                  European Space Agency
                </a>
              </li>
              <li>
                <Link href="/about" className="text-text-secondary text-sm hover:text-nebula-purple transition-colors">
                  About This Site
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-space-hover">
          <p className="text-center text-text-secondary text-sm">
            © {currentYear} Cosmic Explorer. Built with curiosity and code. 🚀
          </p>
        </div>
      </div>
    </footer>
  )
}
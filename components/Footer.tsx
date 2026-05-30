import { Camera, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-off-white border-t border-light-gray">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Camera size={18} className="text-brand-green" />
              <span className="font-display font-semibold tracking-[0.15em] text-dark-text text-sm uppercase">
                Lens &amp; Light
              </span>
            </div>
            <p className="font-body text-sm text-muted-gray max-w-xs leading-relaxed">
              Documenting the quiet beauty of the natural world — one frame at a time.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="text-muted-gray hover:text-brand-green transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-muted-gray hover:text-brand-green transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                aria-label="500px"
                className="text-muted-gray hover:text-brand-green transition-colors"
              >
                <Camera size={18} />
              </a>
            </div>
          </div>

          {/* Right: links */}
          <div className="flex flex-col gap-3 md:items-end">
            <p className="font-body text-xs font-medium tracking-widest uppercase text-muted-gray mb-1">
              Explore
            </p>
            {[
              { label: 'Home', href: '#home' },
              { label: 'Gallery', href: '#gallery' },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm text-muted-gray hover:text-dark-text transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-light-gray flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-muted-gray">
            &copy; {year} Lens &amp; Light. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-gray">
            Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  )
}

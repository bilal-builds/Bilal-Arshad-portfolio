import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-10 px-8 lg:px-16 text-center border-t border-brand-border max-w-[1400px] mx-auto">
      <p className="text-[13px] text-brand-muted">
        &copy; {new Date().getFullYear()} Muhammad Bilal Arshad. All rights reserved. Crafted with passion.
      </p>
    </footer>
  )
}
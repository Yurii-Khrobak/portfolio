import Link from 'next/link';

export default function Navbar() {
  return(
    <nav className='navbar'>
      <Link href='#home' className='navbar__link'>Home</Link>
      <Link href='#about' className='navbar__link'>About me</Link>
      <Link href='#portfolio' className='navbar__link'>Portfolio</Link>
      <Link href='#social' className='navbar__link'>Socials</Link>
    </nav>
  )
}

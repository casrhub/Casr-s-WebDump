import Link from 'next/link'
import Image from 'next/image'
import Logo from './mrwest.png'

export default function Navbar() {
  return (
    <nav>
      <Image
      src = {Logo}
      alt='casr logo'
      width={60}
      quality={100}
      placeholder='blur'

       />
          <h1> Casr Site</h1>
          <Link href = "/">Home</Link>
          <Link href = "/commits">Commits</Link>
    </nav>
  )
}

import Link from "next/link"
import Pandal from './components/images/pandal.png'
import Image from "next/image"
export default function NotFound() {
  return (
    <main className="text-center">
        <h2 className="text-3xl">Tf are you searching for</h2>
        <p>We could not found what you are searching for, check your url, bitch.</p>
        <p>Go back to the <Link href="/">Dashboard</Link></p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Image
    src={Pandal}
    alt='car logo'
    width={600}
    quality={100}
    placeholder='blur'
  />
</div>

    </main>
  )
}

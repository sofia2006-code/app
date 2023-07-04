import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Link href='/configuracion'> configuracion</Link>

        <h2 class="underline decoration-sky-500">aprendiendo next.js</h2>
      </div>
    </>
  )
}


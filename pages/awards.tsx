import Head from 'next/head'
import { Awards } from '@/components/Awards'

export default function AwardsPage() {
  return (
    <>
      <Head>
        <title>Awards | Shintaro Mori Portfolio</title>
      </Head>
      <Awards />
    </>
  )
}

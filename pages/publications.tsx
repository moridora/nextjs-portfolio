import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Publications } from '@/components/Publications'

export default function PublicationsPage() {
  return (
    <>
      <Head>
        <title>Publications | Shintaro Mori Portfolio</title>
      </Head>
      <Publications />
    </>
  )
}

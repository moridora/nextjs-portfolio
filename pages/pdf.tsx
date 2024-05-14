// pages/profile.tsx
import Head from 'next/head'
import ToPDF from '@/components/ToPDF'

export default function PDFPage() {
  return (
    <>
      <Head>
        <title>Profile | Shintaro Mori Portfolio</title>
      </Head>
      <ToPDF />
    </>
  )
}

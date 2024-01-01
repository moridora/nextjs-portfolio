// pages/profile.tsx
import Head from 'next/head'
import { Grants } from '@/components/Grants'

export default function GrantsPage() {
  return (
    <>
      <Head>
        <title>Scholarships | Shintaro Mori Portfolio</title>
      </Head>
      <Grants />
    </>
  )
}

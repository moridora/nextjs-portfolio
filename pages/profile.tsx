// pages/profile.tsx
import Head from 'next/head'
import { Profile } from '@/components/Profile'

export default function ProfilePage() {
  return (
    <>
      <Head>
        <title>Profile | Shintaro Mori Portfolio</title>
      </Head>
      <Profile />
    </>
  )
}

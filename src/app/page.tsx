import Image from 'next/image'
import Header from '../components/navbar'
import BaseLayout from '@/layouts/BaseLayout'

export default function Home() {
  return (
    <BaseLayout>
      <main>
        <Header></Header>
      </main>
    </BaseLayout>
  )
}

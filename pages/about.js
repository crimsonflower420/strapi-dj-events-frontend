import Link from "next/link"
import Layout from "@/components/Layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>Version 1.0.0</p>
      <Link href='/'>Home</Link>
    </Layout>
  )
}

export default AboutPage

import Head from "next/head"
import { useRouter } from "next/router"
import { Header, Showcase, Footer } from "./index"
import styles from "@/styles/Layout.module.css"

const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />

      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
Layout.defaultProps = {
  title: "DJ Events",
  description: "The hottest DJ Events",
}

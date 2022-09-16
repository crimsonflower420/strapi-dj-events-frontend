import { Layout, EventItem } from "@/components/index.js"
import Link from "next/link"
import qs from "qs"
import { useRouter } from "next/router"
import styles from "@/styles/Home.module.css"
import { API_URL } from "@/config/index.js"

export default function SearchPage({ events }) {
  const router = useRouter()
  return (
    <Layout title='Search Results'>
      <main className={styles.main}>
        <Link href='/events'>
          <a>Go Back</a>
        </Link>
        <h1 className={styles.title}>
          Search Results for "{router.query.term}"
        </h1>
        {events.data.length === 0 && <h3>No events to show!</h3>}
        {events.data.map((evt) => (
          <EventItem key={evt.id} evt={evt} />
        ))}
      </main>
    </Layout>
  )
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify(
    {
      filters: {
        $or: [
          {
            name: {
              $contains: term,
            },
          },
          {
            performers: {
              $contains: term,
            },
          },
          {
            venue: {
              $contains: term,
            },
          },
          {
            description: {
              $contains: term,
            },
          },
        ],
      },
    },
    {
      encodeValuesOnly: true,
    }
  )
  const res = await fetch(`${API_URL}/api/events?${query}&populate=image`)
  const events = await res.json()

  return {
    props: { events },
  }
}

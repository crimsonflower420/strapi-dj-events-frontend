import { Layout, EventItem } from "@/components/index.js"
import styles from "@/styles/Home.module.css"
import { API_URL } from "@/config/index.js"

export default function HomePage({ events }) {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>Upcoming Events</h1>
        {events.data.length === 0 && <h3>No events to show!</h3>}
        {events.data.map((evt) => (
          <EventItem key={evt.id} evt={evt} />
        ))}
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    `${API_URL}/api/events?populate=image&sort[0]=date:desc`
  )
  const events = await res.json()

  return {
    props: { events },
    revalidate: 1,
  }
}

import Link from "next/link";

export default async function Home() {

  let resp = await fetch(process.env.NEXT_PUBLIC_API_URL + 'topics', { cache : 'no-store'});
  let topics = await resp.json();

  return (
    <div className="board">
    {
      topics.map(( topic ) => {
        return (
          <div className="post-container" key={ topic.id }>
            <h1 className="h1">
              <Link href={`/read/${ topic.id }`} className="post-title">
                { topic.title }
              </Link>
            </h1>
          </div>
        )
      })
    }
    </div>
  )
}

export default async function Read(props){

  let resp = await fetch(process.env.NEXT_PUBLIC_API_URL + `topics/${props.params.id}`, { cache : 'no-store' })
  let topic = await resp.json();

  return (
    <div className="page">
      <h1 className="page-title">{ topic.title }</h1>
      <p className="page-body">{ topic.body }</p>
    </div>
  )
}
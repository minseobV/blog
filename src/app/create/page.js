'use client'

import { useRouter } from "next/navigation";

export default function Create(){

  const router = useRouter();

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const title = e.target.title.value;
      const body = e.target.body.value;
      const option = {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify({title, body})
      }
      fetch(process.env.NEXT_PUBLIC_API_URL + `topics`, option)
        .then(res => res.json())
        .then(result => {
          const lastid = result.id;
          router.refresh();
          router.push(`/read/${lastid}`)
        })
    }}
    className="create-form"
    >
      <p>
        <input 
          type="text" 
          name="title" 
          placeholder="title"
          className="create-title"
          spellCheck="false"
        />
      </p>
      <p>
        <textarea 
          name="body" 
          placeholder="body"
          className="create-body"
          spellCheck="false"
        />
      </p>
      <p>
        <input
          type="submit" 
          value="create"
          className="create-btn"
        />
      </p>
    </form>
  )
}
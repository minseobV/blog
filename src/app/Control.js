'use client'

import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export function Control() {

  const params = useParams();
  const router = useRouter();
  const id = params.id;

  return (
    <ul>
      <Link className="Create" href="/create">Create</Link>
      { id ? <>
      <Link className="Update" href={"/update/" + id}>Update</Link>
      <input className="Delete" type="button" value="delete" onClick={() => {
        const option = { method : 'DELETE' }
        fetch(process.env.NEXT_PUBLIC_API_URL + 'topics/' + id, option)
          .then(resp => resp.json())
          .then(result => {
            router.push('/');
            router.refresh();
          })
      }}/>
      </> : null}
    </ul>
  );
}
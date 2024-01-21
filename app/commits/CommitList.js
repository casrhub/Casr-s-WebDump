import Link from "next/link"
// Fetching commit list from data json 
async function getCommits(){
    const res = await fetch('http://localhost:4000/commits') 
    return res.json()
}

export default async function CommitList() {
    const commits = await getCommits()
  return (
    <>
    {commits.map((commit) => (
        <div key={commit.sha} className="card my-5">
            <Link href={`/commits/${commit.sha}`}>
            <h3>{commit.message}</h3>
            <p>Commit date: {commit.date}</p>
            <p>Commit Author: {commit.author}</p>
            </Link>
        </div>
    ))}
    {commits.length === 0 && (
        <p className="text-center">There are no commits</p>
    )}
    </>
  )
}

import { notFound } from "next/navigation";

export const dynamicParams = true

export async function generateStaticParam(){
  const res = await fetch('http://localhost:4000/commits')

  const commits = await res.json()

  return commits.map((commit)=> ({
    sha: commit.sha
  }))
}
// Fetching commit details from data json by sha
async function getCommitBySha(sha) {
  const res = await fetch(`http://localhost:4000/commits?sha=${sha}`);
  const commits = await res.json();

  // Since the query might return an array, we need to extract the first element
  // Assuming 'sha' values are unique, there should only be one element in the array
  return commits.length > 0 ? commits[0] : null;
}

export default async function CommitDetails({ params }) {
  // Assuming params.sha contains the SHA value
  const commit = await getCommitBySha(params.sha);

  // Check if a commit was found
  if (commit) {
      return (
        <main>
          <nav>
            <h2>Commit details</h2>
            <div className= "card">
              <h3>{commit.message}</h3>
              <small>Created by {commit.author}</small>
              <p>email: {commit.email}</p>
            </div>
          </nav>
        </main>
          
      );
  } else {
      return (
        notFound()
      );
  }
}

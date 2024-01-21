import Loading from "../loading"
import CommitList from "./CommitList"
import { Suspense } from "react"

export default function Tickets() {
  return (
    <main>
      <nav>
        <h2>Commits</h2>
        <p>Commits for repo</p>
      </nav>
      <Suspense fallback={<Loading />}>
      <CommitList />
      </Suspense>
      
    </main>
    
  )
}

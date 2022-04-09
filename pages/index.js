import Link from 'next/link';
export default function Home() {
  return (
      <div className="home">
        <h1>next.js app</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tempora quae at doloribus, reiciendis blanditiis et modi totam placeat inventore officia non odio commodi! Tempore fugiat repellat quo nesciunt repellendus.</p>
        <Link href='/ninjas'>
        <a>See Ninja listings...</a>
        </Link>
      </div> 
  )
}

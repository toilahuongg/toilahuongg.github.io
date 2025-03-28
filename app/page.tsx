import { NameTransition } from "@/app/Name"
import Link from "next/link"

export default function Home() {
  const architecturePosts = [
    {
      title: "Clean Architecture là gì?",
      slug: "clean-architecture-la-gi",
    },
    {
      title: "Domain-Driven Design (DDD) là gì?",
      slug: "domain-driven-design-la-gi",
    },
    {
      title: "Entity là gì?",
      slug: "entity-la-gi",
    },
  ]
  return (
    <div>
      <NameTransition />
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">Architecture</h3>
        <div className="flex flex-col gap-2">
          {architecturePosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  )
}

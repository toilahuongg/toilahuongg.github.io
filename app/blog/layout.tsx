import Link from "next/link";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Link href="/" className="text-blue-500 hover:text-blue-700"> Back to home</Link>
      <article className="mt-4">
        {children}
      </article>
    </div>
  )
}
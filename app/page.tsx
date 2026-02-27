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

  const shopifyAppPosts = [
    {
      title: "1. Shopify App là gì? Tư duy tổng quan",
      slug: "shopify-app-la-gi",
    },
    {
      title: "2. Chuẩn bị kiến thức và công cụ",
      slug: "chuan-bi-kien-thuc-shopify-app",
    },
    {
      title: "3. Tạo project Shopify App đầu tiên",
      slug: "tao-project-shopify-app-dau-tien",
    },
    {
      title: "4. Authentication & Authorization",
      slug: "shopify-app-authentication",
    },
    {
      title: "5. Xây dựng Admin UI với Remix và Polaris",
      slug: "xay-dung-admin-ui-remix-polaris",
    },
    {
      title: "6. Database Design với MongoDB",
      slug: "shopify-app-database-mongodb",
    },
    {
      title: "7. Shopify API Integration",
      slug: "shopify-api-integration",
    },
    {
      title: "8. Theme Extensions & Web Components",
      slug: "shopify-theme-extensions",
    },
    {
      title: "9. Webhooks & Background Jobs",
      slug: "shopify-webhooks-background-jobs",
    },
    {
      title: "10. Testing, Deployment & Launch",
      slug: "shopify-app-testing-deployment",
    },
  ]

  return (
    <div>
      <NameTransition />
      <div className="flex flex-col gap-8">
        {/* Shopify App Series */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">
            <Link
              href="/blog/shopify-app-la-gi"
              className="hover:text-blue-600 transition-colors"
            >
              Shopify App Development Series 🛍️
            </Link>
          </h3>
          <p className="text-gray-600">
            Hướng dẫn phát triển Shopify App từ A đến Z, tập trung vào tài liệu chính thức của Shopify.
          </p>
          <div className="flex flex-col gap-2">
            {shopifyAppPosts.map((post) => (
              <li key={post.slug} className="list-none">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </div>
        </div>

        {/* Architecture Posts */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Architecture</h3>
          <div className="flex flex-col gap-2">
            {architecturePosts.map((post) => (
              <li key={post.slug} className="list-none">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

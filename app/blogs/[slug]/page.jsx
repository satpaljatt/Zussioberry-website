import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getCmsBlogs, getCmsBlogBySlug, formatBlogHtml } from "@/lib/cms";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";

export const revalidate = 60;

// ✅ Required for static export in Next.js
export async function generateStaticParams() {
  const blogs = await getCmsBlogs(100);
  return blogs
    .filter((blog) => Boolean(blog.slug))
    .map((blog) => ({
      slug: String(blog.slug),
    }));
}

// ✅ Dynamic SEO Metadata for Next.js 15
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getCmsBlogBySlug(slug);

  return {
    title: blog?.metaTitle || blog?.title || "Blog Not Found | Zussioberry",
    description:
      blog?.metaDescription ||
      blog?.description ||
      "Explore articles and updates from Zussioberry.",
  };
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = await getCmsBlogBySlug(slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md mx-auto">
          <h1 className="text-3xl font-bold font-[para] mb-4 text-gray-800">
            Blog Not Found
          </h1>
          <p className="text-gray-600 mb-6 font-[para]">
            The article you are looking for may have been moved or unpublished.
          </p>
          <Link
            href="/blogs"
            className="inline-flex items-center text-[#23aa5d] font-[para] hover:underline text-lg font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Return to all blogs
          </Link>
        </div>
      </div>
    );
  }

  // Render content from array format (fallback mock data)
  const renderArrayContent = (contentArray) => {
    return contentArray.map((item, idx) => {
      switch (item.type) {
        case "paragraph":
          return (
            <p key={idx} className="text-gray-700 mb-6 leading-relaxed text-lg">
              {item.text}
            </p>
          );
        case "heading":
          return (
            <h2
              key={idx}
              className="text-2xl font-bold text-gray-800 mt-8 mb-4 font-[heading-2]"
            >
              {item.text}
            </h2>
          );
        case "list":
          return (
            <ul key={idx} className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              {item.items?.map((li, liIdx) => (
                <li key={liIdx} className="text-lg font-[para]">
                  {li}
                </li>
              ))}
            </ul>
          );
        case "image":
          return (
            <div key={idx} className="my-8 text-center">
              <img
                src={item.src}
                alt={item.alt || "Blog image"}
                className="max-h-[400px] rounded-lg shadow-md mx-auto object-cover"
              />
              {item.caption && (
                <p className="text-center text-sm text-gray-500 mt-2">
                  {item.caption}
                </p>
              )}
            </div>
          );
        case "quote":
          return (
            <blockquote
              key={idx}
              className="border-l-4 border-[#23aa5d] pl-4 my-8 italic text-gray-700 text-lg"
            >
              <p>"{item.text}"</p>
              {item.author && (
                <footer className="mt-2 not-italic font-semibold text-gray-800">
                  — {item.author}
                </footer>
              )}
            </blockquote>
          );
        default:
          return null;
      }
    });
  };

  const isHtmlString = typeof blog.content === "string";

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white min-h-[55vh] md:min-h-[65vh] flex items-center justify-center"
        style={{
          backgroundImage: `url('${blog.image || "/assets/careerBanner.png"}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-[heading-1]">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base text-gray-200">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#23aa5d]" />
              <span>By {blog.author}</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#23aa5d]" />
              <span>{blog.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#23aa5d]" />
              <span>{blog.readTime || "5 min read"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <Link
              href="/blogs"
              className="inline-flex items-center text-[#23aa5d] hover:text-green-700 font-medium transition"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to all blogs
            </Link>
          </div>

          <article className="bg-white rounded-lg">
            {isHtmlString ? (
              <div
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-[para]
                  [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-10 [&>h2]:mb-4
                  [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-gray-800 [&>h3]:mt-6 [&>h3]:mb-3
                  [&>p]:mb-6 [&>p]:leading-relaxed [&>p]:text-lg
                  [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:space-y-2
                  [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol]:space-y-2
                  [&>blockquote]:border-l-4 [&>blockquote]:border-[#23aa5d] [&>blockquote]:pl-4 [&>blockquote]:my-8 [&>blockquote]:italic [&>blockquote]:text-gray-800
                  [&_img]:rounded-lg [&_img]:shadow-md [&_img]:my-8 [&_img]:max-w-full [&_img]:mx-auto
                  [&>table]:w-full [&>table]:border-collapse [&>table]:my-8 [&>table]:overflow-x-auto
                  [&_th]:border [&_th]:border-gray-300 [&_th]:p-3 [&_th]:bg-gray-100 [&_th]:font-semibold [&_th]:text-left
                  [&_td]:border [&_td]:border-gray-300 [&_td]:p-3
                  [&_a]:text-[#23aa5d] [&_a]:underline hover:[&_a]:text-green-700"
                dangerouslySetInnerHTML={{
                  __html: formatBlogHtml(blog.content),
                }}
              />
            ) : Array.isArray(blog.content) ? (
              <div className="prose prose-lg max-w-none font-[para]">
                {renderArrayContent(blog.content)}
              </div>
            ) : (
              <p className="text-gray-700 text-lg leading-relaxed">
                {blog.description}
              </p>
            )}
          </article>
        </div>
      </section>
    </>
  );
}

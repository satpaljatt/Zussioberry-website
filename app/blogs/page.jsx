import Image from "next/image";
import Link from "next/link";
import { getCmsBlogs } from "@/lib/cms";

export const revalidate = 60;

export default async function Page() {
  const blogsData = await getCmsBlogs(50);
  const firstBlog = blogsData[0] || {
    title: "Zussioberry Blog",
    description:
      "Discover the latest news, recipes, franchise guides, and stories from Zussioberry.",
    slug: "",
    image: "/assets/blogs/BlogBanner1.png",
  };

  // Recent posts list for sidebar
  const validRecentPosts = blogsData.slice(0, 5).map((blog) => ({
    id: blog.id,
    title: blog.title,
    image: blog.image || "/assets/Blogs.png",
    author: blog.author || "zussioberry",
    date: blog.date,
    slug: blog.slug,
  }));

  const firstTitleWords = (firstBlog.title || "").split(" ");
  const firstWord = firstTitleWords[0] || "";
  const remainingTitle = firstTitleWords.slice(1).join(" ");

  return (
    <div>
      <section
        className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[90vh] flex items-center"
        style={{
          backgroundImage: "url('/assets/blogs/BlogBanner1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative max-w-6xl mx-auto w-full px-4 py-10 sm:py-14 md:py-16 flex flex-col-reverse md:grid md:grid-cols-2 gap-4 sm:gap-10 items-center h-full">
          {/* Text Content */}
          <div className="w-full flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0 justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-[heading-1] text-white mb-3 sm:mb-4">
              {firstWord} <span className="font-[heading-1]">{remainingTitle}</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-lg font-[para] text-gray-200 leading-relaxed mb-5 sm:mb-6 max-w-xl">
              {firstBlog.description && firstBlog.description.length > 200
                ? `${firstBlog.description.substring(0, 200)}...`
                : firstBlog.description}
            </p>
            {firstBlog.slug && (
              <Link href={`/blogs/${firstBlog.slug}`}>
                <button className="bg-[#23aa5d] cursor-pointer px-5 py-2 sm:px-6 sm:py-2.5 text-white rounded-lg hover:bg-green-600 text-base sm:text-lg font-[para] transition">
                  Read More
                </button>
              </Link>
            )}
          </div>
          {/* Image */}
          <div className="w-full flex justify-center md:justify-end items-center">
            <Image
              src="/assets/zlogo2.png"
              alt={firstBlog.title || "Zussioberry"}
              width={350}
              height={200}
              className="w-50 h-24 sm:w-98 sm:h-50 object-cover transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Blog Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left blogsData */}
            <div className="lg:col-span-2 space-y-10">
              {blogsData.slice(1).map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:shadow-xl"
                >
                  <img
                    src={blog.image || "/assets/Blogs.png"}
                    alt={blog.title}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-[para] font-bold mt-3">{blog.title}</h3>
                    <p className="text-gray-600 mt-2 font-[para] line-clamp-3">
                      {blog.description}
                    </p>
                    <Link href={`/blogs/${blog.slug}`}>
                      <button className="mt-4 px-5 cursor-pointer py-2 bg-[#23aa5d] text-white rounded-md hover:bg-green-700 transition">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar Recent Posts - Sticky */}
            <div className="relative">
              <aside className="bg-gray-50 p-6 rounded-lg shadow-md self-start sticky top-24 h-fit max-h-[80vh] overflow-y-auto">
                <h4 className="text-xl font-[para] mb-6 border-b-2 border-[#23aa5d] pb-2">
                  Recent Posts
                </h4>
                <div className="space-y-4">
                  {validRecentPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blogs/${post.slug}`}
                      className="block transition-all duration-300 hover:bg-gray-100 rounded-lg p-2 -m-2"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="flex-shrink-0">
                          <img
                            src={post.image || "/assets/Blogs.png"}
                            alt={post.title}
                            className="rounded-md transition-transform duration-500 hover:scale-110 object-cover w-16 h-16"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-medium text-gray-800 font-[para] text-sm line-clamp-2 hover:text-[#23aa5d] transition-colors">
                            {post.title}
                          </h5>
                          <p className="text-xs text-gray-500 mt-1">
                            By -{" "}
                            <span className="font-[para] text-[#23aa5d] font-medium">
                              {post.author}
                            </span>{" "}
                            | {post.date}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
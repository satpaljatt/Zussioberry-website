import { blogsData as fallbackBlogs } from "@/app/blogs/blogsData";

export const CMS_URL =
  process.env.NEXT_PUBLIC_CMS_URL || "https://cms-zussioberry.vercel.app/api/public";

export const CMS_MEDIA_BASE_URL =
  process.env.NEXT_PUBLIC_CMS_MEDIA_BASE_URL || "https://cms-zussioberry.vercel.app";

/**
 * Resolves full URL for images stored in CMS or local assets.
 */
export function getCmsImageUrl(path, fallback = "/assets/Blogs.png") {
  if (!path) return fallback;
  const p = String(path).trim();
  if (p.startsWith("http://") || p.startsWith("https://")) {
    return p;
  }
  if (p.startsWith("/api/public/media/") || p.startsWith("/media/")) {
    return `${CMS_MEDIA_BASE_URL}${p}`;
  }
  if (p.startsWith("/")) {
    return p;
  }
  return `${CMS_MEDIA_BASE_URL}/${p}`;
}

/**
 * Ensures embedded HTML images with relative /api/public/media paths resolve properly.
 */
export function formatBlogHtml(html) {
  if (!html || typeof html !== "string") return "";
  return html.replace(
    /src=["'](\/api\/public\/media\/[^"']+)["']/g,
    `src="${CMS_MEDIA_BASE_URL}$1"`
  );
}

/**
 * Formats ISO date string to readable format e.g. "Aug 29, 2026"
 */
export function formatBlogDate(dateStr) {
  if (!dateStr) return "Recent";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Fetches blogs list from CMS with fallback to local mock blogs.
 */
export async function getCmsBlogs(limit = 100) {
  try {
    const res = await fetch(`${CMS_URL}/blogs?limit=${limit}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`CMS API error: ${res.status}`);
    const json = await res.json();
    if (json && Array.isArray(json.data) && json.data.length > 0) {
      // Filter published blogs
      const published = json.data.filter((b) => b.published !== false);
      if (published.length > 0) {
        return published.map((blog, idx) => ({
          id: blog._id || idx + 1,
          title: blog.title || "",
          slug: blog.slug || "",
          description: blog.excerpt || "",
          image: getCmsImageUrl(blog.coverImage),
          author: "zussioberry",
          date: formatBlogDate(blog.createdAt),
          readTime: "5 min read",
          content: blog.content || "",
          tags: blog.tags || [],
          metaTitle: blog.title,
          metaDescription: blog.excerpt || blog.title,
          isCms: true,
        }));
      }
    }
  } catch (err) {
    console.warn("Could not fetch CMS blogs, using fallback data:", err.message);
  }
  return fallbackBlogs;
}

/**
 * Fetches a single blog by slug from CMS or fallback data.
 */
export async function getCmsBlogBySlug(slug) {
  if (!slug) return null;
  const allBlogs = await getCmsBlogs(100);
  const found = allBlogs.find(
    (b) => String(b.slug).toLowerCase() === String(slug).toLowerCase()
  );
  return found || null;
}

/**
 * Fetches gallery items from CMS.
 */
export async function getCmsGallery() {
  try {
    const res = await fetch(`${CMS_URL}/gallery`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`CMS Gallery API error: ${res.status}`);
    const json = await res.json();
    if (json && Array.isArray(json.data) && json.data.length > 0) {
      return json.data;
    }
  } catch (err) {
    console.warn("Could not fetch CMS gallery:", err.message);
  }
  return null;
}

/**
 * Fetches careers from CMS.
 */
export async function getCmsCareers() {
  try {
    const res = await fetch(`${CMS_URL}/careers`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`CMS Careers API error: ${res.status}`);
    const json = await res.json();
    if (json && Array.isArray(json.data)) {
      return json.data;
    }
  } catch (err) {
    console.warn("Could not fetch CMS careers:", err.message);
  }
  return null;
}

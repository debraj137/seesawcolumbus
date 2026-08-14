// import Image from "next/image";
// import Link from "next/link";

// import { sanityFetch } from "@/sanity/lib/live";
// import { BLOG_POSTS_QUERY } from "@/sanity/lib/queries";


// type BlogPost = {
//     _id: string;
//     title: string;
//     slug: string;
//     excerpt?: string;
//     featuredImage?: any;
//     category?: string;
//     publishedAt?: string;
//     readTime?: string;
// };

// export default async function BlogSection() {
//     const { data } = await sanityFetch({
//         query: BLOG_POSTS_QUERY,
//     });

//     const posts = data as BlogPost[];

//     return (
//         <section id="journal" className="journal">
//             <header className="journal-header">
//                 <div>
//                     <div className="eyebrow">
//                         <span />
//                         The journal
//                     </div>

//                     <h2>
//                         Stories worth{" "}
//                         <em>saving a table for.</em>
//                     </h2>
//                 </div>

//                 <p>
//                     Local dining guides, neighborhood notes, and practical ideas
//                     for eating your way through Columbus.
//                 </p>
//             </header>

//             <div className="blog-grid">
//                 {posts?.map((post) => (
//                     <Link
//                         href={`/blog/${post.slug}`}
//                         className="blog-card"
//                         key={post._id}
//                     >
//                         <article>
//                             <div className="blog-card-image">
//                                 {post.featuredImage && (
//                                     <Image
//                                         src={post.featuredImage}
//                                         alt={post.title}
//                                         fill
//                                         sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
//                                     />
//                                 )}
//                             </div>

//                             <div className="blog-card-body">
//                                 <div className="blog-card-meta">
//                                     <span>{post.category || "Columbus Dining"}</span>

//                                     <span>{post.readTime || ""}</span>
//                                 </div>

//                                 <h3>{post.title}</h3>

//                                 <p>{post.excerpt}</p>

//                                 <span className="blog-card-link">
//                                     Read story →
//                                 </span>
//                             </div>
//                         </article>
//                     </Link>
//                 ))}
//             </div>
//         </section>
//     );
// }


import Image from "next/image";
import Link from "next/link";

// import { sanityFetch } from "@/sanity/lib/live";
import { client } from "@/sanity/lib/client";
import { BLOG_POSTS_QUERY } from "@/sanity/lib/queries";

type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  category?: string;
  publishedAt?: string;
  readTime?: string;
};

export default async function BlogSection() {
//   const result = await sanityFetch({
//     query: BLOG_POSTS_QUERY,
//   });

//   const posts = result.data as unknown as BlogPost[];
const posts = await client.fetch<BlogPost[]>(BLOG_POSTS_QUERY);
console.log("SANITY BLOG POSTS:", posts);

  return (
    <section id="journal" className="journal">
      <header className="journal-header">
        <div>
          <div className="eyebrow">
            <span />
            The journal
          </div>

          <h2>
            Stories worth{" "}
            <em>saving a table for.</em>
          </h2>
        </div>

        <p>
          Local dining guides, neighborhood notes, and practical ideas
          for eating your way through Columbus.
        </p>
      </header>

      <div className="blog-grid">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            className="blog-card"
            key={post._id}
          >
            <article>
              <div className="blog-card-image">
                {post.featuredImage && (
                  <Image
                    src={post.featuredImage}
                    alt={post.featuredImageAlt || post.title}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  />
                )}
              </div>

              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span>
                    {post.category || "Columbus Dining"}
                  </span>

                  <span>
                    {post.readTime || ""}
                  </span>
                </div>

                <h3>{post.title}</h3>

                <p>{post.excerpt}</p>

                <span className="blog-card-link">
                  Read story →
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
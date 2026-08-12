import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { blogPosts, getBlogPost } from "../../blog";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Seesaw Columbus`,
    description: post.excerpt,

    openGraph: {
      title: `${post.title} | Seesaw Columbus`,
      description: post.excerpt,
      type: "article",
      images: [post.featuredImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: BlogPageProps) {
  const { slug } = await params;

  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="blog-page">

      {/* Navigation */}

      <nav className="nav">

        <Link href="/" className="brand">
          <span>●</span> SEESAW COLUMBUS
        </Link>

        <Link href="/#journal" className="city">
          Back to journal
        </Link>

      </nav>


      {/* Blog Header */}

      <article>

        <header className="blog-hero">

          <div className="blog-hero-copy">

            <div className="eyebrow">
              <span />
              {post.category}
            </div>

            <h1>
              {post.title}
            </h1>

            <p className="blog-excerpt">
              {post.excerpt}
            </p>

            <div className="blog-meta">

              <span>
                {post.publishedAt}
              </span>

              <span>
                {post.readTime}
              </span>

            </div>

          </div>


          {/* Featured Image */}

          <div className="blog-featured-image">

            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 700px) 100vw, 50vw"
            />

          </div>

        </header>


        {/* Blog Content */}

        <div className="blog-content">

          {post.content.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}

        </div>

      </article>


      {/* Back */}

      <section className="blog-back-section">

        <Link
          href="/#journal"
          className="blog-back-link"
        >
          ← More from the journal
        </Link>

      </section>


      {/* Footer */}

      <footer>

        <Link className="brand" href="/">
          <span>●</span> SEESAW COLUMBUS
        </Link>

        <p>
          <Link href="/about">About</Link>
          {" · "}
          <Link href="/contact">Contact</Link>
          {" · "}
          <Link href="/privacy">Privacy</Link>
          {" · "}
          <Link href="/terms">Terms</Link>
          {" · "}
          <Link href="/disclaimer">Disclaimer</Link>
        </p>

        <p>
          © 2026
        </p>

      </footer>

    </main>
  );
}
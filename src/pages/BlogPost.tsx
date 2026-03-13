import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { blogPosts } from "@/components/home/BlogPreviewSection";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold text-foreground mb-2">Article Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-hero pt-32 pb-12 sm:pt-36 sm:pb-16">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-hero-foreground/50 hover:text-primary transition-colors mb-6">
              <ArrowLeft size={14} /> Back to Blog
            </Link>
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-hero-foreground leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-hero-foreground/50">
              <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <AnimatedSection className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {post.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("## ")) {
                  return <h2 key={i} className="text-2xl font-display font-bold text-foreground mt-10 mb-4">{paragraph.replace("## ", "")}</h2>;
                }
                return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{paragraph}</p>;
              })}
            </article>
          </AnimatedSection>

          {/* Related articles */}
          {related.length > 0 && (
            <div className="max-w-3xl mx-auto mt-16 pt-12 border-t border-border">
              <h3 className="text-xl font-display font-bold text-foreground mb-6">Related Articles</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {related.map((r, i) => (
                  <Link key={i} to={`/blog/${r.slug}`} className="group p-5 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors">
                    <span className="text-xs font-semibold text-primary">{r.category}</span>
                    <h4 className="text-base font-display font-semibold text-card-foreground mt-2 group-hover:text-primary transition-colors">{r.title}</h4>
                    <p className="text-sm text-muted-foreground mt-2">{r.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPost;

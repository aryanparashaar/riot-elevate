import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { blogPosts } from "@/components/home/BlogPreviewSection";

const Blog = () => {
  return (
    <>
      <section className="bg-hero pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary mb-4">Blog</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-hero-foreground leading-tight mb-6">
              Insights & Resources
            </h1>
            <p className="text-lg text-hero-foreground/60 leading-relaxed">
              Expert perspectives on ecommerce strategy, operations, and growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full flex flex-col">
                  <div className="h-44 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                    <span className="text-4xl font-display font-bold text-primary/10">{post.category}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-primary">{post.category}</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-display font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                      >
                        Read <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

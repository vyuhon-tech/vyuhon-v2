import { POSTS, getPost } from '@/data/blogPosts'
import BlogPostPage from './BlogPostPage'

export async function generateStaticParams() {
  return POSTS.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Post Not Found | Vyuhon Insights' }
  return {
    title: `${post.title} | Vyuhon Insights`,
    description: post.intro || post.exc,
    openGraph: {
      title: `${post.title} | Vyuhon Insights`,
      description: post.intro || post.exc,
      type: 'article',
      url: `https://vyuhon.com/insights/${post.slug}`,
    },
  }
}

export default async function Page({ params }) {
  const { slug } = await params
  return <BlogPostPage slug={slug} />
}

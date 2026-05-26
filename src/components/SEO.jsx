import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, name, type, url, image }) {
  const canonicalUrl = url ? `https://vyuhon.com${url}` : 'https://vyuhon.com';
  // Use a provided image, or fallback to a default image in your public folder
  const ogImage = image ? `https://vyuhon.com${image}` : 'https://vyuhon.com/social-preview.png';
  const twitterHandle = '@vyuhon';
  
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Facebook / Open Graph tags */}
      <meta property="og:site_name" content="Vyuhon" />
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={name || twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}

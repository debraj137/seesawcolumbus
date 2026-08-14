// import {defineQuery} from 'next-sanity'

// export const BLOG_POSTS_QUERY = defineQuery(`
//   *[
//     _type == "post" &&
//     defined(publishedAt)
//   ]
//   | order(publishedAt desc) {
//     _id,
//     title,
//     "slug": slug.current,
//     excerpt,
//     featuredImage,
//     "category": categories[0]->title,
//     publishedAt,
//     readTime
//   }
// `)

// export const BLOG_POST_QUERY = defineQuery(`
//   *[
//     _type == "post" &&
//     slug.current == $slug
//   ][0] {
//     _id,
//     title,
//     "slug": slug.current,
//     excerpt,
//     featuredImage,
//     "category": categories[0]->title,
//     publishedAt,
//     readTime,

//     author->{
//       name,
//       image,
//       bio
//     },

//     categories[]->{
//       _id,
//       title,
//       "slug": slug.current
//     },

//     body,

//     relatedPosts[]->{
//       _id,
//       title,
//       "slug": slug.current,
//       excerpt,
//       featuredImage,
//       publishedAt,
//       readTime
//     },

//     seo
//   }
// `)

import { defineQuery } from "next-sanity";

export const BLOG_POSTS_QUERY = defineQuery(`
  *[
    _type == "post" &&
    defined(publishedAt)
  ]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "featuredImage": featuredImage.asset->url,
    "featuredImageAlt": featuredImage.alt,
    "category": categories[0]->title,
    publishedAt,
    readTime
  }
`);

// export const BLOG_POST_QUERY = defineQuery(`
//   *[
//     _type == "post" &&
//     slug.current == $slug
//   ][0] {
//     _id,
//     title,
//     "slug": slug.current,
//     excerpt,

//     "featuredImage": featuredImage.asset->url,
//     "featuredImageAlt": featuredImage.alt,

//     "category": categories[0]->title,

//     publishedAt,
//     readTime,

//     author->{
//       name,
//       bio
//     },

//     categories[]->{
//       _id,
//       title,
//       "slug": slug.current
//     },

//     body,

//     relatedPosts[]->{
//       _id,
//       title,
//       "slug": slug.current,
//       excerpt,
//       "featuredImage": featuredImage.asset->url,
//       "featuredImageAlt": featuredImage.alt,
//       publishedAt,
//       readTime
//     },

//     seo{
//       title,
//       description,
//       canonicalUrl,
//       "ogImage": ogImage.asset->url
//     }
//   }
// `);

export const BLOG_POST_QUERY = defineQuery(`
  *[
    _type == "post" &&
    slug.current == $slug
  ][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,

    "featuredImage": featuredImage.asset->url,
    "featuredImageAlt": featuredImage.alt,

    "category": categories[0]->title,

    publishedAt,
    readTime,

    author->{
      name,
      bio
    },

    categories[]->{
      _id,
      title,
      "slug": slug.current
    },

    body[]{
      ...,
      _type == "image" => {
        ...,
        "assetUrl": asset->url
      }
    },

    seo{
      title,
      description,
      canonicalUrl,
      "ogImage": ogImage.asset->url
    }
  }
`);
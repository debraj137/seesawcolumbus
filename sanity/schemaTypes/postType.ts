import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  icon: DocumentTextIcon,

  fields: [
    // ─────────────────────────────────────
    // BASIC INFORMATION
    // ─────────────────────────────────────

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      description:
        'Short summary used on the Journal page and for search/social descriptions.',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(300),
    }),

    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      description:
        'Main image displayed on the Journal card and at the top of the article.',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          description:
            'Describe the image for accessibility and SEO.',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // ─────────────────────────────────────
    // AUTHOR & CATEGORY
    // ─────────────────────────────────────

    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
    }),

    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'category'}],
        }),
      ],
    }),

    defineField({
      name: 'tags',
      title: 'Tags',
      description:
        'Useful for organizing related content and building topical coverage.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
        }),
      ],
    }),

    // ─────────────────────────────────────
    // PUBLISHING INFORMATION
    // ─────────────────────────────────────

    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'readTime',
      title: 'Reading Time',
      description:
        'Example: 8 min read',
      type: 'string',
    }),

    defineField({
      name: 'featured',
      title: 'Featured Article',
      description:
        'Display this article prominently in featured content areas.',
      type: 'boolean',
      initialValue: false,
    }),

    // ─────────────────────────────────────
    // ARTICLE CONTENT
    // ─────────────────────────────────────

    defineField({
      name: 'body',
      title: 'Article Content',
      description:
        'Write the complete article here. You can use headings, paragraphs, images, lists, links, quotes and tables.',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),

    // ─────────────────────────────────────
    // RELATED ARTICLES
    // ─────────────────────────────────────

    defineField({
      name: 'relatedPosts',
      title: 'Related Articles',
      description:
        'Select other articles that are closely related to this article.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'post'}],
        }),
      ],
    }),

    // ─────────────────────────────────────
    // SEO
    // ─────────────────────────────────────

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',

      fields: [
        defineField({
          name: 'title',
          title: 'SEO Title',
          description:
            'Title used for search engines. Ideally around 50–60 characters.',
          type: 'string',
          validation: (Rule) => Rule.max(70),
        }),

        defineField({
          name: 'description',
          title: 'Meta Description',
          description:
            'Description used by search engines and social sharing.',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.max(160),
        }),

        defineField({
          name: 'canonicalUrl',
          title: 'Canonical URL',
          description:
            'Leave empty unless this article needs a specific canonical URL.',
          type: 'url',
        }),

        defineField({
          name: 'ogImage',
          title: 'Social / Open Graph Image',
          description:
            'Optional image used when the article is shared on social media.',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],

  // ─────────────────────────────────────
  // PREVIEW
  // ─────────────────────────────────────

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'featuredImage',
    },

    prepare(selection) {
      const {author} = selection

      return {
        ...selection,
        subtitle: author ? `by ${author}` : 'Seesaw Columbus',
      }
    },
  },
})
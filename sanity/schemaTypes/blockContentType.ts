import {defineArrayMember, defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons/Image'

export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',

  of: [
    // ─────────────────────────────────────
    // TEXT BLOCK
    // ─────────────────────────────────────

    defineArrayMember({
      type: 'block',

      styles: [
        {
          title: 'Normal',
          value: 'normal',
        },
        {
          title: 'H2',
          value: 'h2',
        },
        {
          title: 'H3',
          value: 'h3',
        },
        {
          title: 'H4',
          value: 'h4',
        },
        {
          title: 'Quote',
          value: 'blockquote',
        },
      ],

      lists: [
        {
          title: 'Bullet',
          value: 'bullet',
        },
        {
          title: 'Numbered',
          value: 'number',
        },
      ],

      marks: {
        decorators: [
          {
            title: 'Strong',
            value: 'strong',
          },
          {
            title: 'Emphasis',
            value: 'em',
          },
          {
            title: 'Underline',
            value: 'underline',
          },
        ],

        annotations: [
          {
            title: 'Link',
            name: 'link',
            type: 'object',

            fields: [
              defineField({
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) => Rule.required(),
              }),

              defineField({
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
                initialValue: false,
              }),
            ],
          },
        ],
      },
    }),

    // ─────────────────────────────────────
    // IMAGE
    // ─────────────────────────────────────

    defineArrayMember({
      type: 'image',
      icon: ImageIcon,

      options: {
        hotspot: true,
      },

      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',

          description:
            'Describe the image for accessibility and SEO.',

          validation: (Rule) => Rule.required(),
        }),

        defineField({
          name: 'caption',
          type: 'string',
          title: 'Image Caption',

          description:
            'Optional caption displayed below the image.',
        }),
      ],
    }),

    // ─────────────────────────────────────
    // TABLE
    // ─────────────────────────────────────

    defineArrayMember({
      type: 'table',
    }),
  ],
})
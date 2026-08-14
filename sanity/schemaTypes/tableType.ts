import {defineArrayMember, defineField, defineType} from 'sanity'

export const tableType = defineType({
  name: 'table',
  title: 'Table',
  type: 'object',

  fields: [
    defineField({
      name: 'headerRows',
      title: 'Header Rows',
      type: 'number',
    }),

    defineField({
      name: 'rows',
      title: 'Rows',
      type: 'array',

      of: [
        defineArrayMember({
          name: 'row',
          title: 'Row',
          type: 'object',

          fields: [
            defineField({
              name: 'cells',
              title: 'Cells',
              type: 'array',

              of: [
                defineArrayMember({
                  name: 'cell',
                  title: 'Cell',
                  type: 'object',

                  fields: [
                    defineField({
                      name: 'value',
                      title: 'Value',
                      type: 'array',

                      of: [
                        defineArrayMember({
                          type: 'block',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})
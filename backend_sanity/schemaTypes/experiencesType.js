import { defineType, defineField } from 'sanity';

export const experiencesType = defineType({
  name: 'experiences',
  title: 'Experiences',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      type: 'string',
      title: 'Year'
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title'
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    }),
    defineField({
      name: 'desc',
      type: 'string',
      title: 'Desc'
    })
  ]
});

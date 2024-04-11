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
      name: 'works',
      type: 'array',
      title: 'Works',
      of: [
        {
          type: 'reference',
          to: [{ type: 'workExperience' }]
        }
      ]
    })
  ]
});

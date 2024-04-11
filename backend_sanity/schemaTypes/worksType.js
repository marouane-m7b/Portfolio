import {defineType, defineField} from 'sanity'

export const worksType = defineType({
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
    }),
    defineField({
      name: 'codeLink',
      title: 'Code Link',
      type: 'string',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        defineField({
          name: 'skill',
          title: 'Skill',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})

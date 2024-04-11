import { defineType, defineField } from 'sanity';

export const aboutType = defineType({
  name: 'abouts',
  title: 'Abouts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string'
    }),
    defineField({
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ]
});

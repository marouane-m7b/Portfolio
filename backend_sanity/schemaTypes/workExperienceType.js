import { defineType, defineField } from 'sanity';

export const workExperienceType = defineType({
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string'
    }),
    defineField({
      name: 'desc',
      title: 'Desc',
      type: 'string'
    })
  ]
});

import {defineField, defineType} from 'sanity'
import {SquareIcon} from '@sanity/icons'
import {SECTION_BASE_FIELDS, SECTION_BASE_GROUPS} from './sectionBase'

export default defineType({
  name: 'domainSection',
  title: 'Domain',
  description: 'A single domain, with its examples, projects and lead.',
  type: 'object',
  icon: SquareIcon,
  groups: SECTION_BASE_GROUPS,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      description: 'The domain name, shown above the heading. For example "Civic Tech".',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      description: 'General description of the domain.',
      type: 'markdown',
      group: 'content',
    }),
    defineField({
      name: 'examples',
      title: 'Examples',
      description: 'Existing initiatives in this domain.',
      type: 'array',
      of: [{type: 'string'}],
      group: 'content',
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      description:
        'Projects in this domain. If left empty, a "no projects yet" placeholder is shown instead.',
      type: 'array',
      of: [{type: 'actionLink'}],
      group: 'content',
    }),
    defineField({
      name: 'domainLead',
      title: 'Domain lead',
      description:
        'If left empty, a "to be announced" placeholder is shown instead.',
      type: 'reference',
      to: [{type: 'person'}],
      group: 'content',
    }),
    ...SECTION_BASE_FIELDS,
  ],
  preview: {
    select: {
      heading: 'heading',
      eyebrow: 'eyebrow',
    },
    prepare(selection) {
      return {
        title: `${selection.eyebrow || selection.heading || ''}`,
        subtitle: 'Domain',
      }
    },
  },
})

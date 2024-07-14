const post = {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'preview',
      title: 'Preview',
      type: 'image',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}

export default post

import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true
    },
    date: {
      type: 'date',
      description: 'The date when the post was created',
      required: true
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (page) => `/${page._raw.flattenedPath}`
    },
    /* formated as "f1/f2/file" */
    urlAsParmas: {
      type: 'string',
      resolve: (page) => page._raw.flattenedPath
    }
  }
}));

export default makeSource({
  contentDirPath: './contents',
  documentTypes: [Page]
});

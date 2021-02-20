
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      name: 'about',
      title: 'About',
      type: 'document',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string'
        },
        {
          title: 'Image',
          name: 'image',
          type: 'image',
        },
        {
          title: 'Content',
          name: 'content',
          type: 'array',
          of: [{type: 'block'}],
        }
      ]
    },
    {
      name: 'exhibitions',
      title: 'Exhibitions',
      type: 'document',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string'
        },
        {
          title: 'Image',
          name: 'image',
          type: 'image',
        },
        {
          title: 'Content',
          name: 'content',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          title: 'Slider',
          name: 'slider',
          type: 'array',
          of: [{type: 'image'}],
        }
      ]
    },
    {
      name: 'carousel',
      title: 'Exhibition Images',
      type: 'document',
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string',
        },
        {
          title: 'Exhibition Image',
          name: 'image',
          type: 'image',
      }
    ]
    },
    {
      name: 'press',
      title: 'Press',
      type: 'document',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Subtitle',
          name: 'subtitle',
          type: 'string',
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'title'
          }
        },
        {
          title: 'Image',
          name: 'image',
          type: 'image',
        },
        {
          title: 'Excerpt',
          name: 'excerpt',
          type: 'text',
        },
        {
          title: 'Content',
          name: 'content',
          type: 'array',
          of: [{type: 'block'}],
        }
      ]
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'document',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Image',
          name: 'image',
          type: 'image',
        },
        {
          title: 'Content',
          name: 'content',
          type: 'array',
          of: [{type: 'block'}],
        }
      ],
    },
    {
      name: 'slider',
      title: 'Slider',
      type: 'document',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string'
        },
        {
          title: 'Slide',
          name: 'slide',
          type: 'image'
        },
        {            
          name: 'order',
          title: 'Order',
          type: 'number'
        }
        ],
        orderings: [
          {
            title: 'Image Order',
            name: 'imageOrder',
            by: [
              {field: 'order', direction: 'asc'}
            ]
          }
      ]
    },
    {
     name: 'gallery',
    title: 'Gallery',
    type: 'document',
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string'
        },
         {
          title: 'Image',
          name: 'image',
          type: 'image'
        },
        {
          title: 'Image Thumb',
          name: 'thumb',
          type: 'image'
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: 'name'
          }
         },
         {
            title: 'Details',
            name: 'details',
            type: 'text',
         },
        {            
          name: 'order',
          title: 'Order',
          type: 'number'
        }
        ],
        orderings: [
          {
            title: 'Image Order',
            name: 'imageOrder',
            by: [
              {field: 'order', direction: 'asc'}
            ]
          }
        ]
        },
        {
          name: 'prints',
         title: 'Canvas Prints',
         type: 'document',
           fields: [
             {
               title: 'Name',
               name: 'name',
               type: 'string'
             },
              {
               title: 'Image',
               name: 'image',
               type: 'image'
             },
             {
               title: 'Image Thumb',
               name: 'thumb',
               type: 'image'
             },
             {
               title: 'Slug',
               name: 'slug',
               type: 'slug',
               options: {
                 source: 'name'
               }
              },
              {
                 title: 'Details',
                 name: 'details',
                 type: 'text',
              },
             {            
               name: 'order',
               title: 'Order',
               type: 'number'
             }
             ],
             orderings: [
               {
                 title: 'Image Order',
                 name: 'imageOrder',
                 by: [
                   {field: 'order', direction: 'asc'}
                 ]
               }
             ]
             },
             {
              name: 'giclee',
             title: 'Giclee Prints',
             type: 'document',
               fields: [
                 {
                   title: 'Name',
                   name: 'name',
                   type: 'string'
                 },
                  {
                   title: 'Image',
                   name: 'image',
                   type: 'image'
                 },
                 {
                   title: 'Image Thumb',
                   name: 'thumb',
                   type: 'image'
                 },
                 {
                   title: 'Slug',
                   name: 'slug',
                   type: 'slug',
                   options: {
                     source: 'name'
                   }
                  },
                  {
                     title: 'Details',
                     name: 'details',
                     type: 'text',
                  },
                 {            
                   name: 'order',
                   title: 'Order',
                   type: 'number'
                 }
                 ],
                 orderings: [
                   {
                     title: 'Image Order',
                     name: 'imageOrder',
                     by: [
                       {field: 'order', direction: 'asc'}
                     ]
                   }
                 ]
                 }               
      ]) 
})

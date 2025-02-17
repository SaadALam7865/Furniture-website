

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Street Address',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'province',
      title: 'Province',
      type: 'string',
    }),
    defineField({
      name: 'zipcode',
      title: 'Zipcode',
      type: 'number',
    }),
    defineField({
      name: 'additionalInformation',
      title: 'Additional Information',
      type: 'text',
    }),
    defineField({
      name: 'cartItems',
      title: 'Cart Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }], // Reference to your 'product' document type
        },
      ],
    }),
    defineField({
      name: 'total',
      title: 'Total Price',
      type: 'number',
    }),
    defineField({
      name: 'discount',
      title: 'Discount Applied',
      type: 'number',
    }),
    defineField({
      name: 'orderDate',
      title: 'Order Date',
      type: 'datetime',
    }),
    defineField({
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: ['pending', 'shipped', 'delivered', 'cancelled'],
        
      },
    }),
  ],
})

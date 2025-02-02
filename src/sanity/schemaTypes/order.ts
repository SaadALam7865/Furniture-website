

// schemas/order.js

export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      
    },
    {
      name: 'company',
      title: 'Company Name',
      type: 'string',
      description: 'Optional',
     
    },
    {
      name: 'country',
      title: 'Country / Region',
      type: 'string',
      options: {
        list: [
          { title: 'Sri Lanka', value: 'Sri Lanka' },
          { title: 'United States', value: 'us' },
          { title: 'United Kingdom', value: 'uk' },
          { title: 'Canada', value: 'ca' },
        ],
      },
    },
    {
      name: 'address',
      title: 'Street Address',
      type: 'string',
    
    },
    {
      name: 'city',
      title: 'City / Town',
      type: 'string',
   
    },
    {
      name: 'province',
      title: 'Province',
      type: 'string',
      options: {
        list: [
          { title: 'Western Province', value: 'Western Province' },
          { title: 'Eastern Province', value: 'Eastern Province' },
          { title: 'Northern Province', value: 'Northern Province' },
          { title: 'Southern Province', value: 'Southern Province' },
        ],
      },
    },
    {
      name: 'zipCode',
      title: 'Zip Code',
      type: 'string',
  
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
     
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      
    },
    {
      name: 'additionalInformation',
      title: 'Additional Information',
      type: 'string',
    },
  ],
};

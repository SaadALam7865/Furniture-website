import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:'g5kmx6bq',
  dataset: 'production',
  apiVersion: '2025-01-13',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: 'SANITY_API_TOKEN=skQHZbFbV925dnkiVTSjQeszGIQMbO3wt77PuYVjXg0NXuwBfO6doDsCBT37hKEPU61wtAWYkUsuIx0GR8CEBoq1iMTPm5faQvjUHV7ExC8UGYiTERUJn8wdXvFlQdXEQuMrQco6VoloeIvOjRsyTswd4xmlwPU4bGhMvPYkvcNZi22sHw9J',
})

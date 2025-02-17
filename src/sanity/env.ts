export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  'skQHZbFbV925dnkiVTSjQeszGIQMbO3wt77PuYVjXg0NXuwBfO6doDsCBT37hKEPU61wtAWYkUsuIx0GR8CEBoq1iMTPm5faQvjUHV7ExC8UGYiTERUJn8wdXvFlQdXEQuMrQco6VoloeIvOjRsyTswd4xmlwPU4bGhMvPYkvcNZi22sHw9J',
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

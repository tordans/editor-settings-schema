import { z } from 'zod'

// Schema for individual field
const FieldSchema = z.object({
  name: z.string().min(1, { error: 'Name is required' }),
  conditions: z.record(z.string(), z.string()),
  key: z.string().min(1, { error: 'Key is required' }),
  values: z.array(z.string()).min(1, { error: 'At least one value is required' }),
})

// Schema for array of fields
export const FieldsSchema = z.array(FieldSchema)

import { z } from 'zod'

// Schema for individual data layer
export const DataLayerSchema = z.object({
  name: z.string().min(1, { error: 'Name is required' }),
  // TODO: Add check for the right `{z}` replacement strings
  url: z.string().url({ error: 'Must be a valid URL' }),
})

// Schema for array of data layers
export const DataLayersSchema = z.array(DataLayerSchema)

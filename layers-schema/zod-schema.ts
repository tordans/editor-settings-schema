import { z } from 'zod'

// Schema for individual layer
const LayerSchema = z.object({
  name: z.string().min(1, { error: 'Name is required' }),
  // TODO: Add check for the right `{z}` replacement strings
  url: z.string().url({ error: 'Must be a valid URL' }),
  maxzoom: z.number().int().min(0).max(25).optional(),
})

// Schema for array of layers
export const LayersSchema = z.array(LayerSchema)

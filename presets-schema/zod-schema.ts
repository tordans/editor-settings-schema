import { z } from 'zod'

// Schema for individual preset
const PresetSchema = z.object({
  name: z.string().min(1, { error: 'Name is required' }),
  geometry: z
    .array(z.enum(['point', 'line', 'area', 'relation', 'vertex']))
    .min(1, { error: 'At least one geometry type is required' }),
  tags: z.record(z.string(), z.string()),
})

// Schema for array of presets
export const PresetsSchema = z.array(PresetSchema)

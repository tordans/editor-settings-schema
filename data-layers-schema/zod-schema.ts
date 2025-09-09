import { z } from 'zod'

// Supported data formats
const supportedFormats = z.enum(['GeoJSON', 'GPX', 'KML', 'PMTiles'])

// Schema for individual data layer
export const DataLayerSchema = z.object({
  name: z.string().min(1, { error: 'Name is required' }),
  url: z.url({ error: 'Must be a valid URL' }),
  format: supportedFormats,
})

// Schema for array of data layers
export const DataLayersSchema = z.array(DataLayerSchema)

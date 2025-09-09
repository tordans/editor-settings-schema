import { z } from 'zod'

// Supported WMS projections
// Based on https://github.com/openstreetmap/iD/blob/develop/scripts/update_imagery.js#L70-L83
const supportedWMSProjections = z.enum([
  'EPSG:3857', // Web Mercator
  'EPSG:900913', // alternate codes used for Web Mercator
  'EPSG:3587',
  'EPSG:54004',
  'EPSG:41001',
  'EPSG:102113',
  'EPSG:102100',
  'EPSG:3785',
  'EPSG:4326', // WGS 84 (Equirectangular)
])

// Schema for individual layer
const LayerSchema = z.object({
  name: z.string().min(1, { error: 'Name is required' }),
  // TODO: Add check for the right `{z}` replacement strings
  url: z.url({ error: 'Must be a valid URL' }),
  maxzoom: z.number().int().min(0).max(25).optional(),
  // WMS layer options
  projection: supportedWMSProjections.optional(),
})

// Schema for array of layers
export const LayersSchema = z.array(LayerSchema)

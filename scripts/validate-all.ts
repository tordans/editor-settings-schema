import dataLayerExample from '../data-layers-schema/example.json' with { type: 'json' }
import { DataLayersSchema } from '../data-layers-schema/zod-schema'
import fieldsExample from '../fields-schema/example.json' with { type: 'json' }
import { FieldsSchema } from '../fields-schema/zod-schema'
import layersExample from '../layers-schema/example.json' with { type: 'json' }
import { LayersSchema } from '../layers-schema/zod-schema'
import presetsExample from '../presets-schema/example.json' with { type: 'json' }
import { PresetsSchema } from '../presets-schema/zod-schema'

async function validateExample(schemaName: string, data: any, zodSchema: any) {
  console.log(`Validating ${schemaName}...`)

  try {
    // Validate with Zod schema
    const result = zodSchema.safeParse(data)

    if (result.success) {
      console.log(`✅ ${schemaName} is valid`)
      return true
    } else {
      console.log(`❌ ${schemaName} is invalid:`)
      console.log('  Errors:', result.error.errors)
      return false
    }
  } catch (error) {
    console.log(`❌ ${schemaName} failed to parse:`, error)
    return false
  }
}

async function validateAllSchemas() {
  console.log('🔍 Validating all schema examples...\n')

  const schemas = [
    {
      name: 'Data Layer Schema',
      data: dataLayerExample,
      schema: DataLayersSchema,
    },
    {
      name: 'Fields Schema',
      data: fieldsExample,
      schema: FieldsSchema,
    },
    {
      name: 'Layers Schema',
      data: layersExample,
      schema: LayersSchema,
    },
    {
      name: 'Presets Schema',
      data: presetsExample,
      schema: PresetsSchema,
    },
  ]

  let totalValid = 0
  let totalSchemas = schemas.length

  for (const schema of schemas) {
    console.log(`\n${'='.repeat(50)}`)
    console.log(`Validating ${schema.name}`)
    console.log(`${'='.repeat(50)}`)

    try {
      const isValid = await validateExample(schema.name, schema.data, schema.schema)
      if (isValid) totalValid++
    } catch (error) {
      console.error(`❌ Error validating ${schema.name}:`, error)
    }
  }

  console.log(`\n${'='.repeat(50)}`)
  console.log('Validation Summary')
  console.log(`${'='.repeat(50)}`)
  console.log(`Validation complete: ${totalValid}/${totalSchemas} schemas are valid`)
}

// Run validation if this file is executed directly
if (require.main === module) {
  validateAllSchemas().catch(console.error)
}

export { validateAllSchemas, validateExample }

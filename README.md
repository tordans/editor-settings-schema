# editor-settings-schema

> [!WARNING]
> This is an idea for now. Please help improve it…

A collection of schemas for OSM editors to share user settings between editors.

## OSM API

The settings should be stored in the [`/user/preferences` of the OSM API](https://wiki.openstreetmap.org/wiki/API_v0.6#Preferences_of_the_logged-in_user:_GET|PUT|DELETE_/api/0.6/user/preferences) which is shared between OSM Apps.

All schemas use the following key format in the OSM API user preferences:

**Key Format:** `ESS:{schema-identifier}:{index}`

- `ESS:` - Editor Settings Schema prefix
- `{schema-identifier}` - Schema identifier (see TOC table below)
- `{index}` - Zero-based index for array elements

We use the `{index}` (starting at 0) to simulate an array. This way we reduce the risk of triggering the character limit ([Doc](https://wiki.openstreetmap.org/wiki/API_v0.6#Maximum_string_lengths)) for the value.

**Value Format:** `{ "name": "Example", "url": "https://example.com" }`

The values are stringified JavaScript objects.

## TOC

| Topic                                                | Status | Version | Identifier    | Example Key         |
| ---------------------------------------------------- | ------ | ------- | ------------- | ------------------- |
| [data-layers-schema](./data-layers-schema/README.md) | DRAFT  | 0.2     | `data-layers` | `ESS:data-layers:0` |
| [fields-schema](./fields-schema/README.md)           | DRAFT  | 0.1     | `fields`      | `ESS:fields:0`      |
| [layers-schema](./layers-schema/README.md)           | DRAFT  | 0.2     | `layers`      | `ESS:layers:0`      |
| [presets-schema](./presets-schema/README.md)         | DRAFT  | 0.1     | `presets`     | `ESS:presets:0`     |

# Schema to share user presets between editors

**Status:** DRAFT
**Version:** `0.1`
**Identifier:** `ESS:presets:*`

## Definition

Presets are collections of tags that make it easier to add data to OSM that require multiple tags to specify a specific feature.

**Related: Tagging Schema**

The tagging schema project https://github.com/openstreetmap/id-tagging-schema should be used for all presets that are relevant for other mappers.

**Core Use Cases**

- Define presets for mapping tasks that are specific to one user (and a local community), e.g. https://www.openstreetmap.org/node/8809895501
- Create specific presets to save time mapping recurring data, e.g. Cargo bike parking, Benches with backrest

## How it works

- User selects a preset which works like a copy-paste and applies all the tags to the selected element
- Editors have to decide how to handle preset changes (preserve tags, replace or merge them)
- When selecting a map feature, editors should show the preset name for the feature when all given tags match; there is likely a more general tagging schema preset to fall back to should the user change details of the preset

## Schema

```jsonc
[
  {
    "name": "Cargo bike parking",
    "geometry": ["point", "area"] /* point, 'line', area, relation, vertex */,
    "tags": {
      "amenity": "bicycle_parking",
      "bicycle_parking": "stands",
      "access": "no",
      "cargo_bike": "designated",
      "capacity": "" /* User value */,
      "capacity:cargo_bike": "" /* User value */,
      "position": "lane",
      "covered": "no",
      "fee": "no",
      "traffic_sign": "DE:314,1010-69",
    },
  },
]
```

### Schema TODOs

- How to handle tags where the user needs to provide the data, like `capacity`
- Do we want to support array formats like `"covered": ["yes", "no"]`?

## Field types

It is up to the editor to decide which input format to pick for the tags of a custom preset. E.g. whether to use a textarea for `description` or a number input for `capacity`.

## UI suggestions

`TODO:`

- Provide a list of custom presets
- Match custom presets when editing an existing feature
- Add custom presets to the search of all presets; treat them similar to other presets
  - Maybe highlight them as custom user presets
- `TODO`

# Schema to share custom fields between editors

**Status:** TODO
**Version:** `0.1`

## Definition

Fields are UI elements that make it easier to add specific tags to a given feature.

**Related: Tagging Schema**

The tagging schema project https://github.com/openstreetmap/id-tagging-schema should be used for all fields and presets that are relevant for other mappers.

**Core Use Cases**

- Add fields to existing presets that make mapping according to local conventions easier. Example `position=lane|*` for bike parking ([Reference](https://wiki.openstreetmap.org/wiki/Verkehrswende-Meetup/Fahrradparkpl%C3%A4tze#Lastenradparken)). `crossing:kerb_extension=both` for pedestrian crossings ([Reference](https://wiki.openstreetmap.org/wiki/Verkehrswende-Meetup/Gehwege#Gehweg%C3%BCberg%C3%A4nge)).

## How it works

- When the conditions are met, the field is added to the existing preset

## Schema

```jsonc
[
  {
    "name": "Kerb extension",
    "conditions": {
      "highway": "crossing" /* Use `*` for "any value" */,
    },
    "key": "crossing:kerb_extension",
    "values": ["left", "right", "both"],
  },
]
```

### Schema TODOs

- Do we want the `conditions` for "any value" as `*` or instead use explicit keys like `[{ "key": "highway", "value": "crossing" }]` which would allow the "any value" as `[{ "key": "highway" }]`

## Field types

It is up to the editor to decide which input format to pick for the tags of a custom preset. E.g. whether to use a textarea for `description` or a number input for `capacity`.

## UI suggestions

`TODO:`

- Provide a list of custom fields
- Add custom fields to the presets UI when the `conditions` are met
- `TODO`

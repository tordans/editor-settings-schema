# Schema to share user background layers between editors

**Status:** TODO
**Version:** `0.1`

## Definition

Background layers are used as basemap while editing OSM. They are TMS, WMS or PMtiles endpoints that render pixel data.

**Related: ELI**

The editor layer index project (ELI) https://github.com/osmlab/editor-layer-index should be used for all background layers that can be relevant for other editors.

**Core Use Cases**

- Configure user specific background layers that are not relevant for the OSM community in general. E.g. `TODO`
- Make new background layers available while the release cycle of ELI and editors is pending. E.g. when new yearly aerial imagery is made available in Berlin and users want to use it right away.

## Schema

```jsonc
[
  {
    "name": "OpenStreetMap Carto",
    "url": "https://tiles.codefor.de/berlin/geoportal/luftbilder/2025-dop20rgb/{zoom}/{x}/{y}.png",
    /* OPTIONAL */ "maxoom": 19,
  },
]
```

### Schema TODOs

- What minimal data do we need to add to the schema in terms of projections?

## Data formats

`TODO`: Define complete list of supported formats and which editor supports what.

## UI suggestions

`TODO`

- Handle unsupported format in the UI to inform users that something is there but not usable in this editor.

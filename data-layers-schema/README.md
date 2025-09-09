# Schema to share user data layers between editors

**Status:** DRAFT
**Version:** `0.2`

## Definition

Data layers are geoJson-like files that are used to display geographic data on a map (points, lines, areas).

**Core Use Cases**

- Find areas to review or add, based on the provided data
- Copy tags or geometries from the provided data after review to re-use for mapping

## How it works

- Show the selected data layer on the map
- Allow users to select the geometry and read the data provided
- Allow users to copy (parts of) the data for further use during mapping

## Schema

```jsonc
[
  {
    "name": "Missing Stolpersteine Berlin",
    "url": "https://osm-check.chrpaul.de/report/stolpersteine-berlin-complete-by-kiez/stolpersteine-berlin-not-on-osm-no-nearby-neuk%C3%B6lln%5B2025-08-18%5D.gpx",
    "format": "GPX",
  },
  {
    "name": "Berlin Bike Parking Survey",
    "url": "https://example.com/berlin-bike-parking-2024.geojson",
    "format": "GeoJSON",
  },
]
```

## Schema Attributes

- `name` (required): Display name for the data layer
- `url` (required): URL to the data file
- `format` (required): Data format type

## Supported Data Formats

The schema supports the following data formats:

- `GeoJSON` .geojson
- `GPX` .gpx
- `KML` .kml
- `PMTiles` .pmtiles

### Schema TODOs

- Should we have recommendations on styling (area, lines, points)?
- Should we have recommendations on who to handle properties of the data?
- Should we standardize a property like `osmTags` that the editor should treat differently, eg. provide a quick access to a copy action?
- Should we add data on licensing? Like a license enum? And a flag for "OSM compatible" for licenses that require compatibility? And a required wiki page link to where the data is documented? One complexity is that this is not needed when the data is just used to review location on the ground, but only when data is copied.
- List which formats are supported by popular editors

## UI suggestions

`TODO`

- Handle unsported format in the UI to inform users that something is there but not usable in this editor.

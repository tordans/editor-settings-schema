# Schema to share user data layers between editors

**Status:** DRAFT
**Version:** `0.1`

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
  },
]
```

### Schema TODOs

- Should we have an enum of file formats or infer this from the URL always? The URL does not have to have a file ending, though…
- Should we add data on licensing? Like a license enum? And a flag for "OSM compatible" for licenses that require compatibility? And a required wiki page link to where the data is documented? One complexity is that this is not needed when the data is just used to review location on the ground, but only when data is copied.

## Data formats

Possible data sources are `.geojson`, `.gpx`, `.kml`, `.pmtiles`

`TODO`: List which formats are supported by popular editors

## UI suggestions

`TODO`

- Handle unsported format in the UI to inform users that something is there but not usable in this editor.

# Schema to share user background layers between editors

**Status:** DRAFT
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
    "name": "Berlin Aerial 2025",
    "url": "https://tiles.codefor.de/berlin/geoportal/luftbilder/2025-dop20rgb/{zoom}/{x}/{y}.png",
    /* OPTIONAL */ "maxzoom": 19,
  },
  {
    "name": "WMS Example with projection",
    "url": "https://example.com/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=layer&STYLES=&FORMAT=image/png&TRANSPARENT=true&WIDTH={width}&HEIGHT={height}&CRS={proj}&BBOX={bbox}",
    /* OPTIONAL */ "projection": "EPSG:3857",
  },
]
```

## Supported URL Variables

### TMS/Tile Variables

- `{zoom}`: Tile zoom level
- `{x}`, `{y}`: Tile X/Y coordinates
- `{-y}`: Inverted TMS-style Y coordinates
- `{@2x}`: Resolution factor

### WMS Variables

- `{proj}`: Requested projection (only EPSG:3857)
- `{wkid}`: Like proj, but without EPSG (only 3857)
- `{width}`, `{height}`: Requested size (always 256)
- `{bbox}`: Requested bounds (e.g. minX,minY,maxX,maxY)

## Supported Projections

The schema supports the following WMS projections:

- `EPSG:3857` - Web Mercator (primary)
- `EPSG:900913`, `EPSG:3587`, `EPSG:54004`, `EPSG:41001`, `EPSG:102113`, `EPSG:102100`, `EPSG:3785` - Web Mercator alternatives
- `EPSG:4326` - WGS 84 (Equirectangular)

## Schema Attributes

- `name` (required): Display name for the layer
- `url` (required): Layer URL template with supported variables
- `maxzoom` (optional): Maximum zoom level (0-25)
- `projection` (optional): WMS projection code

## UI suggestions

`TODO`

- Handle unsupported format in the UI to inform users that something is there but not usable in this editor.

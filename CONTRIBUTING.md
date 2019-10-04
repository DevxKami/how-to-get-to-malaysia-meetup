# Contributing

## Add Venue Details

The venue details is available in the `venue` folder.

For each venue, create a folder with the venue name and a `details.yaml` file.

Required fields in `details.yaml` file are:

- `id`
- `name`

Optional fields in `details.yaml` file are:

- `googleMapUrl`
- `lrt` (this is a list of `description` and `photo`. `photo` is optional)
- `driving` (this is a list of `description` and `photo`. `photo` is optional)

## Code Enhancement

This site use [GatsbyJS](https://www.gatsbyjs.org/) without much custom code.

To start the site locally:

1. clone the repo.
1. run `npm ci` to install the dependencies.
1. run `npm start`.
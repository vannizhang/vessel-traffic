# U.S. Vessel Traffic

This [app](https://livingatlas.arcgis.com/vessel-traffic/) enables users to explore U.S. maritime activity, analyze spatial patterns, and efficiently extract manageable subsets from large-scale vessel traffic datasets. The underlying data is an invaluable public resource provided to the community by the U.S. Coast Guard, NOAA, and BOEM via the Marine Cadastre.

![App](./public/thumbnail.jpg)

## Getting Started 
To begin, clone this repository to your computer:

```sh
https://github.com/Esri/vessel-traffic.git
```

From the project's root directory, install the required packages (dependencies):

```sh
npm install
```

## Running the app 
Now you can start the webpack dev server to test the app on your local machine:

```sh
# it will start a server instance and begin listening for connections from localhost on port 8080
npm run start
```

## Deployment
To build/deploye the app, you can simply run:

```sh
# it will place all files needed for deployment into the /build directory 
npm run build
```

## Resources
- [ArcGIS Blog - Introducing the U.S. Vessel Traffic application from Living Atlas](https://www.esri.com/arcgis-blog/products/arcgis-living-atlas/data-management/introducing-the-u-s-vessel-traffic-application-from-living-atlas/)
- [Access vessel traffic data](https://www.arcgis.com/home/group.html?id=b094a38a8ebe4017b8f41cc7b0f6be22#overview)

## Issues

Find a bug or want to request a new feature? Please let us know by submitting an issue.

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing

Copyright 2026 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [LICENSE](./LICENSE) file.
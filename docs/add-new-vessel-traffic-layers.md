## Add New Vessel Traffic Layers to the App

To keep the US Vessel Traffic data in this app as up-to-date as possible, we plan to perform quarterly or semi-annual data updates. Keith Van Graafeiland is responsible for processing and publishing the data. Once the data is ready, follow the steps below to add the new vessel traffic layers to the app:

1. Update the [shipTrafficLayersData](https://github.com/vannizhang/vessel-traffic/blob/master/src/services/getAISLayersInfo.ts) lookup table 

    Add entries to the [shipTrafficLayersData](https://github.com/vannizhang/vessel-traffic/blob/master/src/services/getAISLayersInfo.ts) lookup table with the necessary information for each new vessel traffic layer. Ensure that the entries are always sorted in chronological order. Here's an example entry:

    ```js
    {
        /**
         * ArcGIS Online Item ID for this month's Vessel Traffic Vector Tile Layer
        */
        ArcGIS_Online_Item_ID: "250147caf57b493f9d81bc2fdaa9876d",
        /**
         * Name of the Vessel Traffic Vector Tile Layer
        */
        Layer_Name: "US_Vessel_Traffic_2024_03_optimized",
        /**
         * URL of the Vessel Traffic Vector Tile Layer
        */
        Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2024_03_optimized/VectorTileServer",
        /**
         *  Feature Service Item ID (with embedded credentials) for the raw AIS data polylines
        */
        FC_item_id: "529f7976ce6a42ca91f546adc49352a2",
        /**
         * Name of the Feature Service
        */
        FC_Name: "US_Vessel_Traffic_2024_03_creds",
        /**
         * URL of the Feature Service (with embedded credentials) for the raw AIS data polylines
        */
        Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/529f7976ce6a42ca91f546adc49352a2/rest/services/AIS/2024_US_Vessel_Traffic/FeatureServer/2",
        Layer: "US Vessel Traffic 2024 03",
        /**
         * Year and Month
        */
        Date: "2024_03",
        Month: 3,
        Year: 2024
    }
    ```

2. Update the [AIS_FILE_SIZE_LOOKUP](https://github.com/vannizhang/vessel-traffic/blob/master/src/services/getAISFileSize.ts) lookup table 

    Add entries to the [AIS_FILE_SIZE_LOOKUP](https://github.com/vannizhang/vessel-traffic/blob/master/src/services/getAISFileSize.ts) lookup table with the file size of the new vessel traffic data packages available for download from the AWS S3 bucket. Use the filename as the key. Here's an example:

    ```js
    {
        "US_Vessel_Traffic_2024_03.zip": {
            "Size": 807780399
        }
    }
    ```


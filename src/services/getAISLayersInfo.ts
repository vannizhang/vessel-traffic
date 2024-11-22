// import { queryFeatures, IQueryFeaturesResponse  } from '@esri/arcgis-rest-feature-layer';

// type AIS_App_Source_Data_Feature = {
//   attributes: {
//     Feat_URL: string;
//     Layer: string;
//     Month: number;
//     Tile_Item: string;
//     Tile_URL: string;
//     Year: number;
//     Source_Layer: string;
//   }
// }

export type ShipTrafficLayerInfo = {
  Month: number;
  Year: number;
  Layer_Name: string;
  ArcGIS_Online_Item_ID?: string;
  Service_URL: string;
  Feature_Service: string;
  Date: string;
  FC_item_id: string;
  FC_Name: string;
  Layer: string
}

export const shipTrafficLayersData: ShipTrafficLayerInfo[] = [{
  ArcGIS_Online_Item_ID: "f05e886d339f49f5ab7589158b862326",
  Date: "2015_01",
  FC_item_id: "05dc89d63524430bafbf95609f003b5c",
  FC_Name: "US_Vessel_Traffic_2015_01_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/05dc89d63524430bafbf95609f003b5c/rest/services/AIS/2015_US_Vessel_Traffic/FeatureServer/0",
  Layer: "US Vessel Traffic 2015 01",
  Layer_Name: "US_Vessel_Traffic_2015_01_optimized",
  Month: 1,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2015_01_optimized/VectorTileServer",
  Year: 2015
}, {
  ArcGIS_Online_Item_ID: "25f601a39622489cbab8a61ef25c6fc3",
  Date: "2015_02",
  FC_item_id: "1f469ee3c56948d2b2458ff51ff4ea63",
  FC_Name: "US_Vessel_Traffic_2015_02_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/1f469ee3c56948d2b2458ff51ff4ea63/rest/services/AIS/2015_US_Vessel_Traffic/FeatureServer/1",
  Layer: "US Vessel Traffic 2015 02",
  Layer_Name: "US_Vessel_Traffic_2015_02_optimized",
  Month: 2,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2015_02_optimized/VectorTileServer",
  Year: 2015
}, {
  ArcGIS_Online_Item_ID: "d6258af016414dbab977e0d12981575c",
  Date: "2015_03",
  FC_item_id: "c6786fa1726d46748afcffede87cfa0b",
  FC_Name: "US_Vessel_Traffic_2015_03_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/c6786fa1726d46748afcffede87cfa0b/rest/services/AIS/2015_US_Vessel_Traffic/FeatureServer/2",
  Layer: "US Vessel Traffic 2015 03",
  Layer_Name: "US_Vessel_Traffic_2015_03_optimized",
  Month: 3,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2015_03_optimized/VectorTileServer",
  Year: 2015
}, {
  ArcGIS_Online_Item_ID: "fdc6c1399f2f4a9992bbb32d30044f2f",
  Date: "2015_04",
  FC_item_id: "21857f00907c4ee79b3ad5da18993f0c",
  FC_Name: "US_Vessel_Traffic_2015_04_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/21857f00907c4ee79b3ad5da18993f0c/rest/services/AIS/2015_US_Vessel_Traffic/FeatureServer/3",
  Layer: "US Vessel Traffic 2015 04",
  Layer_Name: "US_Vessel_Traffic_2015_04_optimized",
  Month: 4,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2015_04_optimized/VectorTileServer",
  Year: 2015
}, {
  ArcGIS_Online_Item_ID: "72ce81d0730e4549bfbfd49ad9d054cb",
  Date: "2015_05",
  FC_item_id: "7df4e23a4452402396d7df41a8581613",
  FC_Name: "US_Vessel_Traffic_2015_05_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/7df4e23a4452402396d7df41a8581613/rest/services/AIS/2015_US_Vessel_Traffic/FeatureServer/4",
  Layer: "US Vessel Traffic 2015 05",
  Layer_Name: "US_Vessel_Traffic_2015_05_optimized",
  Month: 5,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2015_05_optimized/VectorTileServer",
  Year: 2015
}, {
  ArcGIS_Online_Item_ID: "dd3f7dcb3a504d04ba79ae4e16869c3c",
  Date: "2015_06",
  FC_item_id: "c4c8fc15d21e4c95be3adece4a357551",
  FC_Name: "US_Vessel_Traffic_2015_06_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/c4c8fc15d21e4c95be3adece4a357551/rest/services/AIS/2015_US_Vessel_Traffic/FeatureServer/5",
  Layer: "US Vessel Traffic 2015 06",
  Layer_Name: "US_Vessel_Traffic_2015_06_optimized",
  Month: 6,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2015_06_optimized/VectorTileServer",
  Year: 2015
}, {
  ArcGIS_Online_Item_ID: "a9cbbf202115431bb3f6b5ae54cd9ecc",
  Date: "2015_07",
  FC_item_id: "22200bfd038d4b8883c6f41f3382b813",
  FC_Name: "US_Vessel_Traffic_2015_07_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/22200bfd038d4b8883c6f41f3382b813/rest/services/AIS/2015_US_Vessel_Traffic/FeatureServer/6",
  Layer: "US Vessel Traffic 2015 07",
  Layer_Name: "US_Vessel_Traffic_2015_07_optimized",
  Month: 7,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2015_07_optimized/VectorTileServer",
  Year: 2015
}, {
  ArcGIS_Online_Item_ID: "f718db8b232b4001a4a1d517f2b500ba",
  Date: "2015_08",
  FC_item_id: "73098f9e90cb4922a8c1b6f2eaaaa089",
  FC_Name: "US_Vessel_Traffic_2015_08_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/73098f9e90cb4922a8c1b6f2eaaaa089/rest/services/AIS/2015_US_Vessel_Traffic/FeatureServer/7",
  Layer: "US Vessel Traffic 2015 08",
  Layer_Name: "US_Vessel_Traffic_2015_08_optimized",
  Month: 8,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2015_08_optimized/VectorTileServer",
  Year: 2015
}, {
  ArcGIS_Online_Item_ID: "21be42f6de4943bca31637a9922e2133",
  Date: "2015_09",
  FC_item_id: "593609575e624dfd85639d6dbeb5cd76",
  FC_Name: "US_Vessel_Traffic_2015_09_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/593609575e624dfd85639d6dbeb5cd76/rest/services/AIS/2015_US_Vessel_Traffic/FeatureServer/8",
  Layer: "US Vessel Traffic 2015 09",
  Layer_Name: "US_Vessel_Traffic_2015_09_optimized",
  Month: 9,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2015_09_optimized/VectorTileServer",
  Year: 2015
}, {
  ArcGIS_Online_Item_ID: "5445307a60c34f879e0a914cbc8cd96f",
  Date: "2015_10",
  FC_item_id: "476e3d59122f4760b27f5e64c90d18ad",
  FC_Name: "US_Vessel_Traffic_2015_10_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/476e3d59122f4760b27f5e64c90d18ad/rest/services/AIS/2015_US_Vessel_Traffic/FeatureServer/9",
  Layer: "US Vessel Traffic 2015 10",
  Layer_Name: "US_Vessel_Traffic_2015_10_optimized",
  Month: 10,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2015_10_optimized/VectorTileServer",
  Year: 2015
}, {
  ArcGIS_Online_Item_ID: "a059719bec44490cb6f492675ebe4feb",
  Date: "2015_11",
  FC_item_id: "e4dc41a38af64bae85fbeaf580d8b705",
  FC_Name: "US_Vessel_Traffic_2015_11_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/e4dc41a38af64bae85fbeaf580d8b705/rest/services/AIS/2015_US_Vessel_Traffic/FeatureServer/10",
  Layer: "US Vessel Traffic 2015 11",
  Layer_Name: "US_Vessel_Traffic_2015_11_optimized",
  Month: 11,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2015_11_optimized/VectorTileServer",
  Year: 2015
}, {
  ArcGIS_Online_Item_ID: "263acb6e475c41609ea3649307a55290",
  Date: "2015_12",
  FC_item_id: "3c9221675eed4715ab8d5c6df4b40f55",
  FC_Name: "US_Vessel_Traffic_2015_12_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/3c9221675eed4715ab8d5c6df4b40f55/rest/services/AIS/2015_US_Vessel_Traffic/FeatureServer/11",
  Layer: "US Vessel Traffic 2015 12",
  Layer_Name: "US_Vessel_Traffic_2015_12_optimized",
  Month: 12,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2015_12_optimized/VectorTileServer",
  Year: 2015
}, {
  ArcGIS_Online_Item_ID: "beea871328ef49ee891059c9bc184efa",
  Date: "2016_01",
  FC_item_id: "25b8b0e3a241471384bdde73ba8c010c",
  FC_Name: "US_Vessel_Traffic_2016_01_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/25b8b0e3a241471384bdde73ba8c010c/rest/services/AIS/2016_US_Vessel_Traffic/FeatureServer/0",
  Layer: "US Vessel Traffic 2016 01",
  Layer_Name: "US_Vessel_Traffic_2016_01_optimized",
  Month: 1,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_01_optimized/VectorTileServer",
  Year: 2016
}, {
  ArcGIS_Online_Item_ID: "fe1c5a8cba5143c18be983d1fddeb337",
  Date: "2016_02",
  FC_item_id: "64a1bacf5195496b95e7fef837cf7599",
  FC_Name: "US_Vessel_Traffic_2016_02_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/64a1bacf5195496b95e7fef837cf7599/rest/services/AIS/2016_US_Vessel_Traffic/FeatureServer/1",
  Layer: "US Vessel Traffic 2016 02",
  Layer_Name: "US_Vessel_Traffic_2016_02_optimized",
  Month: 2,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_02_optimized/VectorTileServer",
  Year: 2016
}, {
  ArcGIS_Online_Item_ID: "e686ca10bb824f2f8cae6880dfd4fad7",
  Date: "2016_03",
  FC_item_id: "ce2a4e37019a4a4a97210d586b83103d",
  FC_Name: "US_Vessel_Traffic_2016_03_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/ce2a4e37019a4a4a97210d586b83103d/rest/services/AIS/2016_US_Vessel_Traffic/FeatureServer/2",
  Layer: "US Vessel Traffic 2016 03",
  Layer_Name: "US_Vessel_Traffic_2016_03_optimized",
  Month: 3,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_03_optimized/VectorTileServer",
  Year: 2016
}, {
  ArcGIS_Online_Item_ID: "e1d059074c7c465db5d3e77b50491668",
  Date: "2016_04",
  FC_item_id: "fae34d7638be4d08955b66c538a09cfd",
  FC_Name: "US_Vessel_Traffic_2016_04_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/fae34d7638be4d08955b66c538a09cfd/rest/services/AIS/2016_US_Vessel_Traffic/FeatureServer/3",
  Layer: "US Vessel Traffic 2016 04",
  Layer_Name: "US_Vessel_Traffic_2016_04_optimized",
  Month: 4,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_04_optimized/VectorTileServer",
  Year: 2016
}, {
  ArcGIS_Online_Item_ID: "cc2a8d836d214445ba2819dc03df6e94",
  Date: "2016_05",
  FC_item_id: "c95d508b0aa845f383addfff4e80e329",
  FC_Name: "US_Vessel_Traffic_2016_05_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/c95d508b0aa845f383addfff4e80e329/rest/services/AIS/2016_US_Vessel_Traffic/FeatureServer/4",
  Layer: "US Vessel Traffic 2016 05",
  Layer_Name: "US_Vessel_Traffic_2016_05_optimized",
  Month: 5,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_05_optimized/VectorTileServer",
  Year: 2016
}, {
  ArcGIS_Online_Item_ID: "457942d2b9af472789c5b60bb2983c53",
  Date: "2016_06",
  FC_item_id: "3b25d9e5bda1409881b34157f9c20089",
  FC_Name: "US_Vessel_Traffic_2016_06_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/3b25d9e5bda1409881b34157f9c20089/rest/services/AIS/2016_US_Vessel_Traffic/FeatureServer/5",
  Layer: "US Vessel Traffic 2016 06",
  Layer_Name: "US_Vessel_Traffic_2016_06_optimized",
  Month: 6,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_06_optimized/VectorTileServer",
  Year: 2016
}, {
  ArcGIS_Online_Item_ID: "cf1f40f48c8e492ea4a5b4564f814d28",
  Date: "2016_07",
  FC_item_id: "af41186a4d914a72bb2c037ee793c230",
  FC_Name: "US_Vessel_Traffic_2016_07_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/af41186a4d914a72bb2c037ee793c230/rest/services/AIS/2016_US_Vessel_Traffic/FeatureServer/6",
  Layer: "US Vessel Traffic 2016 07",
  Layer_Name: "US_Vessel_Traffic_2016_07_optimized",
  Month: 7,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_07_optimized/VectorTileServer",
  Year: 2016
}, {
  ArcGIS_Online_Item_ID: "1e3eb4f391014a8abd8f3c893adb92ea",
  Date: "2016_08",
  FC_item_id: "e5e99581b6ce4a199de3fe6fb2320877",
  FC_Name: "US_Vessel_Traffic_2016_08_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/e5e99581b6ce4a199de3fe6fb2320877/rest/services/AIS/2016_US_Vessel_Traffic/FeatureServer/7",
  Layer: "US Vessel Traffic 2016 08",
  Layer_Name: "US_Vessel_Traffic_2016_08_optimized",
  Month: 8,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_08_optimized/VectorTileServer",
  Year: 2016
}, {
  ArcGIS_Online_Item_ID: "8ea79cd54fa2430a96b95ed673cea228",
  Date: "2016_09",
  FC_item_id: "32a6970ad0084774bf455a8e31c4b0e9",
  FC_Name: "US_Vessel_Traffic_2016_09_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/32a6970ad0084774bf455a8e31c4b0e9/rest/services/AIS/2016_US_Vessel_Traffic/FeatureServer/8",
  Layer: "US Vessel Traffic 2016 09",
  Layer_Name: "US_Vessel_Traffic_2016_09_optimized",
  Month: 9,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_09_optimized/VectorTileServer",
  Year: 2016
}, {
  ArcGIS_Online_Item_ID: "9a006bf5d08a4a45be4d7b69222efeff",
  Date: "2016_10",
  FC_item_id: "b4e6cf83b48b4fa6b00bce8dde31ffd2",
  FC_Name: "US_Vessel_Traffic_2016_10_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/b4e6cf83b48b4fa6b00bce8dde31ffd2/rest/services/AIS/2016_US_Vessel_Traffic/FeatureServer/9",
  Layer: "US Vessel Traffic 2016 10",
  Layer_Name: "US_Vessel_Traffic_2016_10_optimized",
  Month: 10,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_10_optimized/VectorTileServer",
  Year: 2016
}, {
  ArcGIS_Online_Item_ID: "db0df541382f4731995a169e51e7f412",
  Date: "2016_11",
  FC_item_id: "f1b2aaa0c0e944b480988d90fc5ed477",
  FC_Name: "US_Vessel_Traffic_2016_11_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/f1b2aaa0c0e944b480988d90fc5ed477/rest/services/AIS/2016_US_Vessel_Traffic/FeatureServer/10",
  Layer: "US Vessel Traffic 2016 11",
  Layer_Name: "US_Vessel_Traffic_2016_11_optimized",
  Month: 11,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_11_optimized/VectorTileServer",
  Year: 2016
}, {
  ArcGIS_Online_Item_ID: "1a424ffa3a974f64858cb4897fe9b60c",
  Date: "2016_12",
  FC_item_id: "b90f6720659f4cae826b9ff6b53135da",
  FC_Name: "US_Vessel_Traffic_2016_12_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/b90f6720659f4cae826b9ff6b53135da/rest/services/AIS/2016_US_Vessel_Traffic/FeatureServer/11",
  Layer: "US Vessel Traffic 2016 12",
  Layer_Name: "US_Vessel_Traffic_2016_12_optimized",
  Month: 12,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_12_optimized/VectorTileServer",
  Year: 2016
}, {
  ArcGIS_Online_Item_ID: "79c72e88370941cc8380192d7e6ead3c",
  Date: "2017_01",
  FC_item_id: "451190be4160477996ecef266915d832",
  FC_Name: "US_Vessel_Traffic_2017_01_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/451190be4160477996ecef266915d832/rest/services/AIS/2017_US_Vessel_Traffic/FeatureServer/0",
  Layer: "US Vessel Traffic 2017 01",
  Layer_Name: "US_Vessel_Traffic_2017_01_optimized",
  Month: 1,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2017_01_optimized/VectorTileServer",
  Year: 2017
}, {
  ArcGIS_Online_Item_ID: "ddb7784bfe424acebde6a57f3a95e3fe",
  Date: "2017_02",
  FC_item_id: "9e8c89397abc4aa682154559dcc268e9",
  FC_Name: "US_Vessel_Traffic_2017_02_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/9e8c89397abc4aa682154559dcc268e9/rest/services/AIS/2017_US_Vessel_Traffic/FeatureServer/1",
  Layer: "US Vessel Traffic 2017 02",
  Layer_Name: "US_Vessel_Traffic_2017_02_optimized",
  Month: 2,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2017_02_optimized/VectorTileServer",
  Year: 2017
}, {
  ArcGIS_Online_Item_ID: "91794c9a318f44d693baee69f6d4d9ff",
  Date: "2017_03",
  FC_item_id: "5485b5aaaf4a49da8346fb030187cf48",
  FC_Name: "US_Vessel_Traffic_2017_03_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/5485b5aaaf4a49da8346fb030187cf48/rest/services/AIS/2017_US_Vessel_Traffic/FeatureServer/2",
  Layer: "US Vessel Traffic 2017 03",
  Layer_Name: "US_Vessel_Traffic_2017_03_optimized",
  Month: 3,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2017_03_optimized/VectorTileServer",
  Year: 2017
}, {
  ArcGIS_Online_Item_ID: "e293e1b5354a4944bf659f8d3040f243",
  Date: "2017_04",
  FC_item_id: "b1436ee13b9f43dba6018a1cbe3aaf8b",
  FC_Name: "US_Vessel_Traffic_2017_04_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/b1436ee13b9f43dba6018a1cbe3aaf8b/rest/services/AIS/2017_US_Vessel_Traffic/FeatureServer/3",
  Layer: "US Vessel Traffic 2017 04",
  Layer_Name: "US_Vessel_Traffic_2017_04_optimized",
  Month: 4,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2017_04_optimized/VectorTileServer",
  Year: 2017
}, {
  ArcGIS_Online_Item_ID: "d9fdfd8bb6ca43dab0038afc4bd8e1e4",
  Date: "2017_05",
  FC_item_id: "aeb4322909b4441594d82fb4ea7e2906",
  FC_Name: "US_Vessel_Traffic_2017_05_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/aeb4322909b4441594d82fb4ea7e2906/rest/services/AIS/2017_US_Vessel_Traffic/FeatureServer/4",
  Layer: "US Vessel Traffic 2017 05",
  Layer_Name: "US_Vessel_Traffic_2017_05_optimized",
  Month: 5,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2017_05_optimized/VectorTileServer",
  Year: 2017
}, {
  ArcGIS_Online_Item_ID: "7161f8bef76d494d9a311267daf4c91a",
  Date: "2017_06",
  FC_item_id: "0d6cfe67582a49b5bcaf8e9d166f4234",
  FC_Name: "US_Vessel_Traffic_2017_06_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/0d6cfe67582a49b5bcaf8e9d166f4234/rest/services/AIS/2017_US_Vessel_Traffic/FeatureServer/5",
  Layer: "US Vessel Traffic 2017 06",
  Layer_Name: "US_Vessel_Traffic_2017_06_optimized",
  Month: 6,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2017_06_optimized/VectorTileServer",
  Year: 2017
}, {
  ArcGIS_Online_Item_ID: "369834c797bc45c1be1002bcf95ccf9e",
  Date: "2017_07",
  FC_item_id: "f28e211897e941f09745961121a49927",
  FC_Name: "US_Vessel_Traffic_2017_07_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/f28e211897e941f09745961121a49927/rest/services/AIS/2017_US_Vessel_Traffic/FeatureServer/6",
  Layer: "US Vessel Traffic 2017 07",
  Layer_Name: "US_Vessel_Traffic_2017_07_optimized",
  Month: 7,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2017_07_optimized/VectorTileServer",
  Year: 2017
}, {
  ArcGIS_Online_Item_ID: "6eeaaa9fa123476cae1ce5b644f3d9b2",
  Date: "2017_08",
  FC_item_id: "32cebc69603b4730882dc59ef7145cf6",
  FC_Name: "US_Vessel_Traffic_2017_08_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/32cebc69603b4730882dc59ef7145cf6/rest/services/AIS/2017_US_Vessel_Traffic/FeatureServer/7",
  Layer: "US Vessel Traffic 2017 08",
  Layer_Name: "US_Vessel_Traffic_2017_08_optimized",
  Month: 8,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2017_08_optimized/VectorTileServer",
  Year: 2017
}, {
  ArcGIS_Online_Item_ID: "364be1c60a794d77b88f606a9031dbad",
  Date: "2017_09",
  FC_item_id: "e62b85480fc440b4988cb2b8fab4c48c",
  FC_Name: "US_Vessel_Traffic_2017_09_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/e62b85480fc440b4988cb2b8fab4c48c/rest/services/AIS/2017_US_Vessel_Traffic/FeatureServer/8",
  Layer: "US Vessel Traffic 2017 09",
  Layer_Name: "US_Vessel_Traffic_2017_09_optimized",
  Month: 9,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2017_09_optimized/VectorTileServer",
  Year: 2017
}, {
  ArcGIS_Online_Item_ID: "460e6dd01bde48ba947f8d69b0916c12",
  Date: "2017_10",
  FC_item_id: "d102c3594a75474d9735668a12436491",
  FC_Name: "US_Vessel_Traffic_2017_10_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/d102c3594a75474d9735668a12436491/rest/services/AIS/2017_US_Vessel_Traffic/FeatureServer/9",
  Layer: "US Vessel Traffic 2017 10",
  Layer_Name: "US_Vessel_Traffic_2017_10_optimized",
  Month: 10,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2017_10_optimized/VectorTileServer",
  Year: 2017
}, {
  ArcGIS_Online_Item_ID: "74bc29598b30441e8b7a6c9dbaa73a83",
  Date: "2017_11",
  FC_item_id: "864de51409d64e3ab5639cfd8767de21",
  FC_Name: "US_Vessel_Traffic_2017_11_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/864de51409d64e3ab5639cfd8767de21/rest/services/AIS/2017_US_Vessel_Traffic/FeatureServer/10",
  Layer: "US Vessel Traffic 2017 11",
  Layer_Name: "US_Vessel_Traffic_2017_11_optimized",
  Month: 11,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2017_11_optimized/VectorTileServer",
  Year: 2017
}, {
  ArcGIS_Online_Item_ID: "d5db8ad891a042349db690db41a7a542",
  Date: "2017_12",
  FC_item_id: "7fb7dda063f54faf81df9163d293a5fa",
  FC_Name: "US_Vessel_Traffic_2017_12_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/7fb7dda063f54faf81df9163d293a5fa/rest/services/AIS/2017_US_Vessel_Traffic/FeatureServer/11",
  Layer: "US Vessel Traffic 2017 12",
  Layer_Name: "US_Vessel_Traffic_2017_12_optimized",
  Month: 12,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2017_12_optimized/VectorTileServer",
  Year: 2017
}, {
  ArcGIS_Online_Item_ID: "124e11d554e04be09461e1b961e88b2f",
  Date: "2018_01",
  FC_item_id: "09ca24f148d244ca86e49a1909d58b86",
  FC_Name: "US_Vessel_Traffic_2018_01_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/09ca24f148d244ca86e49a1909d58b86/rest/services/AIS/2018_US_Vessel_Traffic/FeatureServer/0",
  Layer: "US Vessel Traffic 2018 01",
  Layer_Name: "US_Vessel_Traffic_2018_01_optimized",
  Month: 1,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2018_01_optimized/VectorTileServer",
  Year: 2018
}, {
  ArcGIS_Online_Item_ID: "52913b20077e4af084b552bd7ae4129d",
  Date: "2018_02",
  FC_item_id: "53bb1cc97e364c7fad5cbafb0d7e6cac",
  FC_Name: "US_Vessel_Traffic_2018_02_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/53bb1cc97e364c7fad5cbafb0d7e6cac/rest/services/AIS/2018_US_Vessel_Traffic/FeatureServer/1",
  Layer: "US Vessel Traffic 2018 02",
  Layer_Name: "US_Vessel_Traffic_2018_02_optimized",
  Month: 2,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2018_02_optimized/VectorTileServer",
  Year: 2018
}, {
  ArcGIS_Online_Item_ID: "01cb9ac9cdff47fdb1b928196ed78520",
  Date: "2018_03",
  FC_item_id: "812d298a386248dfbcd72203695864cd",
  FC_Name: "US_Vessel_Traffic_2018_03_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/812d298a386248dfbcd72203695864cd/rest/services/AIS/2018_US_Vessel_Traffic/FeatureServer/2",
  Layer: "US Vessel Traffic 2018 03",
  Layer_Name: "US_Vessel_Traffic_2018_03_optimized",
  Month: 3,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2018_03_optimized/VectorTileServer",
  Year: 2018
}, {
  ArcGIS_Online_Item_ID: "e9100d3ebe71493d95d8889ba719055a",
  Date: "2018_04",
  FC_item_id: "b09a7db0fa694646a9660198bb96b0cd",
  FC_Name: "US_Vessel_Traffic_2018_04_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/b09a7db0fa694646a9660198bb96b0cd/rest/services/AIS/2018_US_Vessel_Traffic/FeatureServer/3",
  Layer: "US Vessel Traffic 2018 04",
  Layer_Name: "US_Vessel_Traffic_2018_04_optimized",
  Month: 4,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2018_04_optimized/VectorTileServer",
  Year: 2018
}, {
  ArcGIS_Online_Item_ID: "5531a471572143d9a102c5d8470b5a3c",
  Date: "2018_05",
  FC_item_id: "9aeb06c5557c45a3b56bfa2f40d2b4c7",
  FC_Name: "US_Vessel_Traffic_2018_05_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/9aeb06c5557c45a3b56bfa2f40d2b4c7/rest/services/AIS/2018_US_Vessel_Traffic/FeatureServer/4",
  Layer: "US Vessel Traffic 2018 05",
  Layer_Name: "US_Vessel_Traffic_2018_05_optimized",
  Month: 5,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2018_05_optimized/VectorTileServer",
  Year: 2018
}, {
  ArcGIS_Online_Item_ID: "7e3f92370d404aaa80e1ca101c2596dd",
  Date: "2018_06",
  FC_item_id: "2b362907f0ba4415b2f3bd663688ddef",
  FC_Name: "US_Vessel_Traffic_2018_06_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/2b362907f0ba4415b2f3bd663688ddef/rest/services/AIS/2018_US_Vessel_Traffic/FeatureServer/5",
  Layer: "US Vessel Traffic 2018 06",
  Layer_Name: "US_Vessel_Traffic_2018_06_optimized",
  Month: 6,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2018_06_optimized/VectorTileServer",
  Year: 2018
}, {
  ArcGIS_Online_Item_ID: "587965e8936546fabcc56401f2113dcc",
  Date: "2018_07",
  FC_item_id: "99b465735ef844fd86d45738b5d5b77d",
  FC_Name: "US_Vessel_Traffic_2018_07_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/99b465735ef844fd86d45738b5d5b77d/rest/services/AIS/2018_US_Vessel_Traffic/FeatureServer/6",
  Layer: "US Vessel Traffic 2018 07",
  Layer_Name: "US_Vessel_Traffic_2018_07_optimized",
  Month: 7,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2018_07_optimized/VectorTileServer",
  Year: 2018
}, {
  ArcGIS_Online_Item_ID: "092dc47b7a414918b6bc9bb8c81c975f",
  Date: "2018_08",
  FC_item_id: "848ec2e92af74a21be9d92613cc0a06d",
  FC_Name: "US_Vessel_Traffic_2018_08_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/848ec2e92af74a21be9d92613cc0a06d/rest/services/AIS/2018_US_Vessel_Traffic/FeatureServer/7",
  Layer: "US Vessel Traffic 2018 08",
  Layer_Name: "US_Vessel_Traffic_2018_08_optimized",
  Month: 8,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2018_08_optimized/VectorTileServer",
  Year: 2018
}, {
  ArcGIS_Online_Item_ID: "5bd0a261f34f4f738168b05fa4e1a3db",
  Date: "2018_09",
  FC_item_id: "5e596857cf054d31b024d2f080fa5b63",
  FC_Name: "US_Vessel_Traffic_2018_09_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/5e596857cf054d31b024d2f080fa5b63/rest/services/AIS/2018_US_Vessel_Traffic/FeatureServer/8",
  Layer: "US Vessel Traffic 2018 09",
  Layer_Name: "US_Vessel_Traffic_2018_09_optimized",
  Month: 9,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2018_09_optimized/VectorTileServer",
  Year: 2018
}, {
  ArcGIS_Online_Item_ID: "1514f823f65a41df91b7644efef160ed",
  Date: "2018_10",
  FC_item_id: "de653ce2633a41188f2dace021bfefee",
  FC_Name: "US_Vessel_Traffic_2018_10_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/de653ce2633a41188f2dace021bfefee/rest/services/AIS/2018_US_Vessel_Traffic/FeatureServer/9",
  Layer: "US Vessel Traffic 2018 10",
  Layer_Name: "US_Vessel_Traffic_2018_10_optimized",
  Month: 10,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2018_10_optimized/VectorTileServer",
  Year: 2018
}, {
  ArcGIS_Online_Item_ID: "0a90a01842934372a0a690875c0475cc",
  Date: "2018_11",
  FC_item_id: "0ef9635731e646bfbb68867801566a24",
  FC_Name: "US_Vessel_Traffic_2018_11_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/0ef9635731e646bfbb68867801566a24/rest/services/AIS/2018_US_Vessel_Traffic/FeatureServer/10",
  Layer: "US Vessel Traffic 2018 11",
  Layer_Name: "US_Vessel_Traffic_2018_11_optimized",
  Month: 11,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2018_11_optimized/VectorTileServer",
  Year: 2018
}, {
  ArcGIS_Online_Item_ID: "1860c66701a446149481915ea0ac779d",
  Date: "2018_12",
  FC_item_id: "7c26ec10784a4968b2001f9d1e92afe7",
  FC_Name: "US_Vessel_Traffic_2018_12_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/7c26ec10784a4968b2001f9d1e92afe7/rest/services/AIS/2018_US_Vessel_Traffic/FeatureServer/11",
  Layer: "US Vessel Traffic 2018 12",
  Layer_Name: "US_Vessel_Traffic_2018_12_optimized",
  Month: 12,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2018_12_optimized/VectorTileServer",
  Year: 2018
}, {
  ArcGIS_Online_Item_ID: "440628dc5b544e10a3440be1a68651c4",
  Date: "2019_01",
  FC_item_id: "ec5ffe2dd3834175a5524a6753661929",
  FC_Name: "US_Vessel_Traffic_2019_01_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/ec5ffe2dd3834175a5524a6753661929/rest/services/AIS/2019_US_Vessel_Traffic/FeatureServer/0",
  Layer: "US Vessel Traffic 2019 01",
  Layer_Name: "US_Vessel_Traffic_2019_01_optimized",
  Month: 1,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2019_01_optimized/VectorTileServer",
  Year: 2019
}, {
  ArcGIS_Online_Item_ID: "90467f9599c6478cb2d3df287757174c",
  Date: "2019_02",
  FC_item_id: "6f4c7440fca9489ead6015e12f9ce310",
  FC_Name: "US_Vessel_Traffic_2019_02_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/6f4c7440fca9489ead6015e12f9ce310/rest/services/AIS/2019_US_Vessel_Traffic/FeatureServer/1",
  Layer: "US Vessel Traffic 2019 02",
  Layer_Name: "US_Vessel_Traffic_2019_02_optimized",
  Month: 2,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2019_02_optimized/VectorTileServer",
  Year: 2019
}, {
  ArcGIS_Online_Item_ID: "4fed16b69c8c4c5b87027de577cb14ff",
  Date: "2019_03",
  FC_item_id: "b6330b2f0e254aa2bed1b2a9b69a85fb",
  FC_Name: "US_Vessel_Traffic_2019_03_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/b6330b2f0e254aa2bed1b2a9b69a85fb/rest/services/AIS/2019_US_Vessel_Traffic/FeatureServer/2",
  Layer: "US Vessel Traffic 2019 03",
  Layer_Name: "US_Vessel_Traffic_2019_03_optimized",
  Month: 3,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2019_03_optimized/VectorTileServer",
  Year: 2019
}, {
  ArcGIS_Online_Item_ID: "1ea3d3614ab54825a16741ba62850af2",
  Date: "2019_04",
  FC_item_id: "c07810aaaf0343f6906cdec4928c8a46",
  FC_Name: "US_Vessel_Traffic_2019_04_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/c07810aaaf0343f6906cdec4928c8a46/rest/services/AIS/2019_US_Vessel_Traffic/FeatureServer/3",
  Layer: "US Vessel Traffic 2019 04",
  Layer_Name: "US_Vessel_Traffic_2019_04_optimized",
  Month: 4,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2019_04_optimized/VectorTileServer",
  Year: 2019
}, {
  ArcGIS_Online_Item_ID: "a6dd03cbdda64c5bae39d36a96a206bf",
  Date: "2019_05",
  FC_item_id: "689a237b24c647468b59c6a57fc7008c",
  FC_Name: "US_Vessel_Traffic_2019_05_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/689a237b24c647468b59c6a57fc7008c/rest/services/AIS/2019_US_Vessel_Traffic/FeatureServer/4",
  Layer: "US Vessel Traffic 2019 05",
  Layer_Name: "US_Vessel_Traffic_2019_05_optimized",
  Month: 5,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2019_05_optimized/VectorTileServer",
  Year: 2019
}, {
  ArcGIS_Online_Item_ID: "47e559e189ea40779c5dcdcec21397c3",
  Date: "2019_06",
  FC_item_id: "f396d93fd3734db3b2d6b7be3e48402e",
  FC_Name: "US_Vessel_Traffic_2019_06_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/f396d93fd3734db3b2d6b7be3e48402e/rest/services/AIS/2019_US_Vessel_Traffic/FeatureServer/5",
  Layer: "US Vessel Traffic 2019 06",
  Layer_Name: "US_Vessel_Traffic_2019_06_optimized",
  Month: 6,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2019_06_optimized/VectorTileServer",
  Year: 2019
}, {
  ArcGIS_Online_Item_ID: "043a75c4f16f43699fe68232b0129590",
  Date: "2019_07",
  FC_item_id: "746f947ade92490c9dea554f2a31bb9d",
  FC_Name: "US_Vessel_Traffic_2019_07_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/746f947ade92490c9dea554f2a31bb9d/rest/services/AIS/2019_US_Vessel_Traffic/FeatureServer/6",
  Layer: "US Vessel Traffic 2019 07",
  Layer_Name: "US_Vessel_Traffic_2019_07_optimized",
  Month: 7,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2019_07_optimized/VectorTileServer",
  Year: 2019
}, {
  ArcGIS_Online_Item_ID: "e91728c7a32543b2953d367d8189a39f",
  Date: "2019_08",
  FC_item_id: "0ab11e3fdbb44e6ebff95d0ff073d821",
  FC_Name: "US_Vessel_Traffic_2019_08_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/0ab11e3fdbb44e6ebff95d0ff073d821/rest/services/AIS/2019_US_Vessel_Traffic/FeatureServer/7",
  Layer: "US Vessel Traffic 2019 08",
  Layer_Name: "US_Vessel_Traffic_2019_08_optimized",
  Month: 8,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2019_08_optimized/VectorTileServer",
  Year: 2019
}, {
  ArcGIS_Online_Item_ID: "dbebb5b4b61d40868c139af5cab99369",
  Date: "2019_09",
  FC_item_id: "ea977ed6b9b0409e93bbe42cfb44412b",
  FC_Name: "US_Vessel_Traffic_2019_09_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/ea977ed6b9b0409e93bbe42cfb44412b/rest/services/AIS/2019_US_Vessel_Traffic/FeatureServer/8",
  Layer: "US Vessel Traffic 2019 09",
  Layer_Name: "US_Vessel_Traffic_2019_09_optimized",
  Month: 9,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2019_09_optimized/VectorTileServer",
  Year: 2019
}, {
  ArcGIS_Online_Item_ID: "4550fc16b8a44afeaa6128f718f08238",
  Date: "2019_10",
  FC_item_id: "22188b588c6a4dcc966a3c94254234d1",
  FC_Name: "US_Vessel_Traffic_2019_10_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/22188b588c6a4dcc966a3c94254234d1/rest/services/AIS/2019_US_Vessel_Traffic/FeatureServer/9",
  Layer: "US Vessel Traffic 2019 10",
  Layer_Name: "US_Vessel_Traffic_2019_10_optimized",
  Month: 10,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2019_10_optimized/VectorTileServer",
  Year: 2019
}, {
  ArcGIS_Online_Item_ID: "cd91736504904e8e9fba2f4e3a472e50",
  Date: "2019_11",
  FC_item_id: "5357c64306e14c3e942585f88c79336d",
  FC_Name: "US_Vessel_Traffic_2019_11_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/5357c64306e14c3e942585f88c79336d/rest/services/AIS/2019_US_Vessel_Traffic/FeatureServer/10",
  Layer: "US Vessel Traffic 2019 11",
  Layer_Name: "US_Vessel_Traffic_2019_11_optimized",
  Month: 11,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2019_11_optimized/VectorTileServer",
  Year: 2019
}, {
  ArcGIS_Online_Item_ID: "93e0a3488f544c63a55437821d5aefec",
  Date: "2019_12",
  FC_item_id: "a70ee53da57a4d9a9061f5bf60cf5c9e",
  FC_Name: "US_Vessel_Traffic_2019_12_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/a70ee53da57a4d9a9061f5bf60cf5c9e/rest/services/AIS/2019_US_Vessel_Traffic/FeatureServer/11",
  Layer: "US Vessel Traffic 2019 12",
  Layer_Name: "US_Vessel_Traffic_2019_12_optimized",
  Month: 12,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2019_12_optimized/VectorTileServer",
  Year: 2019
}, {
  ArcGIS_Online_Item_ID: "f58e4fda1d7645cab6de8aca6c45f7b2",
  Date: "2020_01",
  FC_item_id: "52b935b85dd14b839c9735c2a6197b88",
  FC_Name: "US_Vessel_Traffic_2020_01_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/52b935b85dd14b839c9735c2a6197b88/rest/services/AIS/2020_US_Vessel_Traffic/FeatureServer/0",
  Layer: "US Vessel Traffic 2020 01",
  Layer_Name: "US_Vessel_Traffic_2020_01_optimized",
  Month: 1,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2020_01_optimized/VectorTileServer",
  Year: 2020
}, {
  ArcGIS_Online_Item_ID: "323496aadd7046df9b194d73b81d0ea9",
  Date: "2020_02",
  FC_item_id: "f82458ce064147a0b38c9c31f6eabcc8",
  FC_Name: "US_Vessel_Traffic_2020_02_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/f82458ce064147a0b38c9c31f6eabcc8/rest/services/AIS/2020_US_Vessel_Traffic/FeatureServer/1",
  Layer: "US Vessel Traffic 2020 02",
  Layer_Name: "US_Vessel_Traffic_2020_02_optimized",
  Month: 2,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2020_02_optimized/VectorTileServer",
  Year: 2020
}, {
  ArcGIS_Online_Item_ID: "208884a495a849eeb4129f2b46481129",
  Date: "2020_03",
  FC_item_id: "d95236df85834d7f9596d928980a5b2a",
  FC_Name: "US_Vessel_Traffic_2020_03_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/d95236df85834d7f9596d928980a5b2a/rest/services/AIS/2020_US_Vessel_Traffic/FeatureServer/2",
  Layer: "US Vessel Traffic 2020 03",
  Layer_Name: "US_Vessel_Traffic_2020_03_optimized",
  Month: 3,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2020_03_optimized/VectorTileServer",
  Year: 2020
}, {
  ArcGIS_Online_Item_ID: "59625bacf1a84ce290ff110b6f9ca3d1",
  Date: "2020_04",
  FC_item_id: "0b365d08eb444fb5a5631787195cbb51",
  FC_Name: "US_Vessel_Traffic_2020_04_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/0b365d08eb444fb5a5631787195cbb51/rest/services/AIS/2020_US_Vessel_Traffic/FeatureServer/3",
  Layer: "US Vessel Traffic 2020 04",
  Layer_Name: "US_Vessel_Traffic_2020_04_optimized",
  Month: 4,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2020_04_optimized/VectorTileServer",
  Year: 2020
}, {
  ArcGIS_Online_Item_ID: "fd784f39ed884f05845a96ee2744ec61",
  Date: "2020_05",
  FC_item_id: "d37e8ccf7d03484b96f3dd3cf1c53481",
  FC_Name: "US_Vessel_Traffic_2020_05_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/d37e8ccf7d03484b96f3dd3cf1c53481/rest/services/AIS/2020_US_Vessel_Traffic/FeatureServer/4",
  Layer: "US Vessel Traffic 2020 05",
  Layer_Name: "US_Vessel_Traffic_2020_05_optimized",
  Month: 5,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2020_05_optimized/VectorTileServer",
  Year: 2020
}, {
  ArcGIS_Online_Item_ID: "8619005f39564ece9a18035852aa2ec7",
  Date: "2020_06",
  FC_item_id: "3d01eb7323304d50b0c4dce1d40649ba",
  FC_Name: "US_Vessel_Traffic_2020_06_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/3d01eb7323304d50b0c4dce1d40649ba/rest/services/AIS/2020_US_Vessel_Traffic/FeatureServer/5",
  Layer: "US Vessel Traffic 2020 06",
  Layer_Name: "US_Vessel_Traffic_2020_06_optimized",
  Month: 6,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2020_06_optimized/VectorTileServer",
  Year: 2020
}, {
  ArcGIS_Online_Item_ID: "2d3e256306c647859637fb8032823d47",
  Date: "2020_07",
  FC_item_id: "0154e9568c914a37bf1296fab45f8eee",
  FC_Name: "US_Vessel_Traffic_2020_07_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/0154e9568c914a37bf1296fab45f8eee/rest/services/AIS/2020_US_Vessel_Traffic/FeatureServer/6",
  Layer: "US Vessel Traffic 2020 07",
  Layer_Name: "US_Vessel_Traffic_2020_07_optimized",
  Month: 7,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2020_07_optimized/VectorTileServer",
  Year: 2020
}, {
  ArcGIS_Online_Item_ID: "490789deebe84407970f7b7565838a68",
  Date: "2020_08",
  FC_item_id: "5dfec5f97f4240688468c497717faeef",
  FC_Name: "US_Vessel_Traffic_2020_08_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/5dfec5f97f4240688468c497717faeef/rest/services/AIS/2020_US_Vessel_Traffic/FeatureServer/7",
  Layer: "US Vessel Traffic 2020 08",
  Layer_Name: "US_Vessel_Traffic_2020_08_optimized",
  Month: 8,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2020_08_optimized/VectorTileServer",
  Year: 2020
}, {
  ArcGIS_Online_Item_ID: "33ecd9aa06a74d35beda7ef86de7d614",
  Date: "2020_09",
  FC_item_id: "c31c9fdcb237476aa9c91956cc9917c7",
  FC_Name: "US_Vessel_Traffic_2020_09_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/c31c9fdcb237476aa9c91956cc9917c7/rest/services/AIS/2020_US_Vessel_Traffic/FeatureServer/8",
  Layer: "US Vessel Traffic 2020 09",
  Layer_Name: "US_Vessel_Traffic_2020_09_optimized",
  Month: 9,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2020_09_optimized/VectorTileServer",
  Year: 2020
}, {
  ArcGIS_Online_Item_ID: "9239125d39dc4c88859b88735f99ddb5",
  Date: "2020_10",
  FC_item_id: "730295f2729c4da7ae3f2504aae50df2",
  FC_Name: "US_Vessel_Traffic_2020_10_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/730295f2729c4da7ae3f2504aae50df2/rest/services/AIS/2020_US_Vessel_Traffic/FeatureServer/9",
  Layer: "US Vessel Traffic 2020 10",
  Layer_Name: "US_Vessel_Traffic_2020_10_optimized",
  Month: 10,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2020_10_optimized/VectorTileServer",
  Year: 2020
}, {
  ArcGIS_Online_Item_ID: "c4cb32f15d094840a6f9bf306522824b",
  Date: "2020_11",
  FC_item_id: "d9717e99d9b149b2b4cf28d3ca8f6adb",
  FC_Name: "US_Vessel_Traffic_2020_11_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/d9717e99d9b149b2b4cf28d3ca8f6adb/rest/services/AIS/2020_US_Vessel_Traffic/FeatureServer/10",
  Layer: "US Vessel Traffic 2020 11",
  Layer_Name: "US_Vessel_Traffic_2020_11_optimized",
  Month: 11,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2020_11_optimized/VectorTileServer",
  Year: 2020
}, {
  ArcGIS_Online_Item_ID: "fd6238cfe546490fa5dafb52578e2c31",
  Date: "2020_12",
  FC_item_id: "1cfcafa8c10441f59448e8d155aebf62",
  FC_Name: "US_Vessel_Traffic_2020_12_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/1cfcafa8c10441f59448e8d155aebf62/rest/services/AIS/2020_US_Vessel_Traffic/FeatureServer/11",
  Layer: "US Vessel Traffic 2020 12",
  Layer_Name: "US_Vessel_Traffic_2020_12_optimized",
  Month: 12,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2020_12_optimized/VectorTileServer",
  Year: 2020
}, {
  ArcGIS_Online_Item_ID: "6d131b9a671a46c8b98da84e3ca72ba5",
  Date: "2021_01",
  FC_item_id: "e18ea71ee8fa44ba8d9f0c12d1e7b8ea",
  FC_Name: "US_Vessel_Traffic_2021_01_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/e18ea71ee8fa44ba8d9f0c12d1e7b8ea/rest/services/AIS/2021_US_Vessel_Traffic/FeatureServer/0",
  Layer: "US Vessel Traffic 2021 01",
  Layer_Name: "US_Vessel_Traffic_2021_01_optimized",
  Month: 1,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2021_01_optimized/VectorTileServer",
  Year: 2021
}, {
  ArcGIS_Online_Item_ID: "c5317229d5ee4da8ad0fe351e774b46b",
  Date: "2021_02",
  FC_item_id: "52e221afe10e4a63b52889f340333e5d",
  FC_Name: "US_Vessel_Traffic_2021_02_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/52e221afe10e4a63b52889f340333e5d/rest/services/AIS/2021_US_Vessel_Traffic/FeatureServer/1",
  Layer: "US Vessel Traffic 2021 02",
  Layer_Name: "US_Vessel_Traffic_2021_02_optimized",
  Month: 2,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2021_02_optimized/VectorTileServer",
  Year: 2021
}, {
  ArcGIS_Online_Item_ID: "28efa3b6d0674c71ad832581b0b21c61",
  Date: "2021_03",
  FC_item_id: "a74475cfc57f4c22a7b9887d84243d88",
  FC_Name: "US_Vessel_Traffic_2021_03_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/a74475cfc57f4c22a7b9887d84243d88/rest/services/AIS/2021_US_Vessel_Traffic/FeatureServer/2",
  Layer: "US Vessel Traffic 2021 03",
  Layer_Name: "US_Vessel_Traffic_2021_03_optimized",
  Month: 3,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2021_03_optimized/VectorTileServer",
  Year: 2021
}, {
  ArcGIS_Online_Item_ID: "c5299373eba541b79b7ad5dc6a7a4d67",
  Date: "2021_04",
  FC_item_id: "a215f0fda09d46e8abd5b96034ce8c9f",
  FC_Name: "US_Vessel_Traffic_2021_04_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/a215f0fda09d46e8abd5b96034ce8c9f/rest/services/AIS/2021_US_Vessel_Traffic/FeatureServer/3",
  Layer: "US Vessel Traffic 2021 04",
  Layer_Name: "US_Vessel_Traffic_2021_04_optimized",
  Month: 4,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2021_04_optimized/VectorTileServer",
  Year: 2021
}, {
  ArcGIS_Online_Item_ID: "e8ac52af4b754bebb965c6a3b1ab0062",
  Date: "2021_05",
  FC_item_id: "da6e43ec357c4922a770a7f54e1f2b06",
  FC_Name: "US_Vessel_Traffic_2021_05_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/da6e43ec357c4922a770a7f54e1f2b06/rest/services/AIS/2021_US_Vessel_Traffic/FeatureServer/4",
  Layer: "US Vessel Traffic 2021 05",
  Layer_Name: "US_Vessel_Traffic_2021_05_optimized",
  Month: 5,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2021_05_optimized/VectorTileServer",
  Year: 2021
}, {
  ArcGIS_Online_Item_ID: "6ad5d75e210a41468d358574ca09eac6",
  Date: "2021_06",
  FC_item_id: "2cb3e551667946aab733a6ec6ca19edf",
  FC_Name: "US_Vessel_Traffic_2021_06_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/2cb3e551667946aab733a6ec6ca19edf/rest/services/AIS/2021_US_Vessel_Traffic/FeatureServer/5",
  Layer: "US Vessel Traffic 2021 06",
  Layer_Name: "US_Vessel_Traffic_2021_06_optimized",
  Month: 6,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2021_06_optimized/VectorTileServer",
  Year: 2021
}, {
  ArcGIS_Online_Item_ID: "8401de63dbbc48fb9e775c6a714fd0cc",
  Date: "2021_07",
  FC_item_id: "79e512925c314b7b866cea4c0efc95e6",
  FC_Name: "US_Vessel_Traffic_2021_07_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/79e512925c314b7b866cea4c0efc95e6/rest/services/AIS/2021_US_Vessel_Traffic/FeatureServer/6",
  Layer: "US Vessel Traffic 2021 07",
  Layer_Name: "US_Vessel_Traffic_2021_07_optimized",
  Month: 7,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2021_07_optimized/VectorTileServer",
  Year: 2021
}, {
  ArcGIS_Online_Item_ID: "b75a7b5492324c09a9869aac8069e34d",
  Date: "2021_08",
  FC_item_id: "8089c2365b0d413e983bbdc71bd5176a",
  FC_Name: "US_Vessel_Traffic_2021_08_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/8089c2365b0d413e983bbdc71bd5176a/rest/services/AIS/2021_US_Vessel_Traffic/FeatureServer/7",
  Layer: "US Vessel Traffic 2021 08",
  Layer_Name: "US_Vessel_Traffic_2021_08_optimized",
  Month: 8,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2021_08_optimized/VectorTileServer",
  Year: 2021
}, {
  ArcGIS_Online_Item_ID: "3c2fd101f4194894b00c311f2e4bcb15",
  Date: "2021_09",
  FC_item_id: "8f4c1b54283f4355b7b083bda03a3bf5",
  FC_Name: "US_Vessel_Traffic_2021_09_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/8f4c1b54283f4355b7b083bda03a3bf5/rest/services/AIS/2021_US_Vessel_Traffic/FeatureServer/8",
  Layer: "US Vessel Traffic 2021 09",
  Layer_Name: "US_Vessel_Traffic_2021_09_optimized",
  Month: 9,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2021_09_optimized/VectorTileServer",
  Year: 2021
}, {
  ArcGIS_Online_Item_ID: "0bdf7e4933274c9b96808e1b36d09bc1",
  Date: "2021_10",
  FC_item_id: "8402ac2adfae43d0aeda8b15e52cb6e4",
  FC_Name: "US_Vessel_Traffic_2021_10_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/8402ac2adfae43d0aeda8b15e52cb6e4/rest/services/AIS/2021_US_Vessel_Traffic/FeatureServer/9",
  Layer: "US Vessel Traffic 2021 10",
  Layer_Name: "US_Vessel_Traffic_2021_10_optimized",
  Month: 10,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2021_10_optimized/VectorTileServer",
  Year: 2021
}, {
  ArcGIS_Online_Item_ID: "7389179acea8426a9482c057e0a97813",
  Date: "2021_11",
  FC_item_id: "f81597209e8047978cb5db31df701737",
  FC_Name: "US_Vessel_Traffic_2021_11_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/f81597209e8047978cb5db31df701737/rest/services/AIS/2021_US_Vessel_Traffic/FeatureServer/10",
  Layer: "US Vessel Traffic 2021 11",
  Layer_Name: "US_Vessel_Traffic_2021_11_optimized",
  Month: 11,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2021_11_optimized/VectorTileServer",
  Year: 2021
}, {
  ArcGIS_Online_Item_ID: "6fcc0c3970934db2ade644e323c83719",
  Date: "2021_12",
  FC_item_id: "0d3727df90464fb5af429c3adb8d4f38",
  FC_Name: "US_Vessel_Traffic_2021_12_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/0d3727df90464fb5af429c3adb8d4f38/rest/services/AIS/2021_US_Vessel_Traffic/FeatureServer/11",
  Layer: "US Vessel Traffic 2021 12",
  Layer_Name: "US_Vessel_Traffic_2021_12_optimized",
  Month: 12,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2021_12_optimized/VectorTileServer",
  Year: 2021
}, {
  ArcGIS_Online_Item_ID: "8174f21c7fb8452dbb8e421dbdee6673",
  Date: "2022_01",
  FC_item_id: "f422563114ab41aa8dff0252fe1cb84f",
  FC_Name: "US_Vessel_Traffic_2022_01_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/f422563114ab41aa8dff0252fe1cb84f/rest/services/AIS/2022_US_Vessel_Traffic/FeatureServer/0",
  Layer: "US Vessel Traffic 2022 01",
  Layer_Name: "US_Vessel_Traffic_2022_01_optimized",
  Month: 1,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2022_01_optimized/VectorTileServer",
  Year: 2022
}, {
  ArcGIS_Online_Item_ID: "36b12158763a4d7e9cd8bcf2ccb5961e",
  Date: "2022_02",
  FC_item_id: "e51482501db342e3a5298cd9a2ed050d",
  FC_Name: "US_Vessel_Traffic_2022_02_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/e51482501db342e3a5298cd9a2ed050d/rest/services/AIS/2022_US_Vessel_Traffic/FeatureServer/1",
  Layer: "US Vessel Traffic 2022 02",
  Layer_Name: "US_Vessel_Traffic_2022_02_optimized",
  Month: 2,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2022_02_optimized/VectorTileServer",
  Year: 2022
}, {
  ArcGIS_Online_Item_ID: "c6afc288e42c43729e07d0100a8ac899",
  Date: "2022_03",
  FC_item_id: "2db5be8c32c44d03afc48c952f34102d",
  FC_Name: "US_Vessel_Traffic_2022_03_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/2db5be8c32c44d03afc48c952f34102d/rest/services/AIS/2022_US_Vessel_Traffic/FeatureServer/2",
  Layer: "US Vessel Traffic 2022 03",
  Layer_Name: "US_Vessel_Traffic_2022_03_optimized",
  Month: 3,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2022_03_optimized/VectorTileServer",
  Year: 2022
}, {
  ArcGIS_Online_Item_ID: "6f197d8442634dbf860fdcad362012da",
  Date: "2022_04",
  FC_item_id: "7fdf4e8be4f34192bb4f463399a2b229",
  FC_Name: "US_Vessel_Traffic_2022_04_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/7fdf4e8be4f34192bb4f463399a2b229/rest/services/AIS/2022_US_Vessel_Traffic/FeatureServer/3",
  Layer: "US Vessel Traffic 2022 04",
  Layer_Name: "US_Vessel_Traffic_2022_04_optimized",
  Month: 4,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2022_04_optimized/VectorTileServer",
  Year: 2022
}, {
  ArcGIS_Online_Item_ID: "aa33c788bec540eb91191df0c1fa7753",
  Date: "2022_05",
  FC_item_id: "cc47b3a626f64d269a3b7e763d24756b",
  FC_Name: "US_Vessel_Traffic_2022_05_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/cc47b3a626f64d269a3b7e763d24756b/rest/services/AIS/2022_US_Vessel_Traffic/FeatureServer/4",
  Layer: "US Vessel Traffic 2022 05",
  Layer_Name: "US_Vessel_Traffic_2022_05_optimized",
  Month: 5,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2022_05_optimized/VectorTileServer",
  Year: 2022
}, {
  ArcGIS_Online_Item_ID: "0e86bcf360a846bb9cd2dcd402ec83b4",
  Date: "2022_06",
  FC_item_id: "796b4b7d3acc4806864026f088d4e4b9",
  FC_Name: "US_Vessel_Traffic_2022_06_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/796b4b7d3acc4806864026f088d4e4b9/rest/services/AIS/2022_US_Vessel_Traffic/FeatureServer/5",
  Layer: "US Vessel Traffic 2022 06",
  Layer_Name: "US_Vessel_Traffic_2022_06_optimized",
  Month: 6,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2022_06_optimized/VectorTileServer",
  Year: 2022
}, {
  ArcGIS_Online_Item_ID: "e4f60301d52a44d2823218a850a0b76a",
  Date: "2022_07",
  FC_item_id: "f0e695f375e2492c9f26158dde0c202f",
  FC_Name: "US_Vessel_Traffic_2022_07_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/f0e695f375e2492c9f26158dde0c202f/rest/services/AIS/2022_US_Vessel_Traffic/FeatureServer/6",
  Layer: "US Vessel Traffic 2022 07",
  Layer_Name: "US_Vessel_Traffic_2022_07_optimized",
  Month: 7,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2022_07_optimized/VectorTileServer",
  Year: 2022
}, {
  ArcGIS_Online_Item_ID: "a8c38a781e794cba97b4a1ca34d98bbc",
  Date: "2022_08",
  FC_item_id: "038890756b854da6a1f9bb8e7fb78660",
  FC_Name: "US_Vessel_Traffic_2022_08_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/038890756b854da6a1f9bb8e7fb78660/rest/services/AIS/2022_US_Vessel_Traffic/FeatureServer/7",
  Layer: "US Vessel Traffic 2022 08",
  Layer_Name: "US_Vessel_Traffic_2022_08_optimized",
  Month: 8,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2022_08_optimized/VectorTileServer",
  Year: 2022
}, {
  ArcGIS_Online_Item_ID: "f988ee309fbc415badef479e85950139",
  Date: "2022_09",
  FC_item_id: "fec3adced6c74bef90e0c756b2841555",
  FC_Name: "US_Vessel_Traffic_2022_09_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/fec3adced6c74bef90e0c756b2841555/rest/services/AIS/2022_US_Vessel_Traffic/FeatureServer/8",
  Layer: "US Vessel Traffic 2022 09",
  Layer_Name: "US_Vessel_Traffic_2022_09_optimized",
  Month: 9,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2022_09_optimized/VectorTileServer",
  Year: 2022
}, {
  ArcGIS_Online_Item_ID: "25c97a7390464405a4725c309d9c6f19",
  Date: "2022_10",
  FC_item_id: "3c8fed2f7b2447678fa87f941f59875d",
  FC_Name: "US_Vessel_Traffic_2022_10_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/3c8fed2f7b2447678fa87f941f59875d/rest/services/AIS/2022_US_Vessel_Traffic/FeatureServer/9",
  Layer: "US Vessel Traffic 2022 10",
  Layer_Name: "US_Vessel_Traffic_2022_10_optimized",
  Month: 10,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2022_10_optimized/VectorTileServer",
  Year: 2022
}, {
  ArcGIS_Online_Item_ID: "a42c37599c2b43c9ae68b33ddfea52e6",
  Date: "2022_11",
  FC_item_id: "5987f1eaa426445a9e5c2fe9b5f5d1cb",
  FC_Name: "US_Vessel_Traffic_2022_11_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/5987f1eaa426445a9e5c2fe9b5f5d1cb/rest/services/AIS/2022_US_Vessel_Traffic/FeatureServer/10",
  Layer: "US Vessel Traffic 2022 11",
  Layer_Name: "US_Vessel_Traffic_2022_11_optimized",
  Month: 11,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2022_11_optimized/VectorTileServer",
  Year: 2022
}, {
  ArcGIS_Online_Item_ID: "f0fcf62614d34a5a827fb0e7303e2726",
  Date: "2022_12",
  FC_item_id: "212918d0a89142f39edbd093ec1c44c9",
  FC_Name: "US_Vessel_Traffic_2022_12_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/212918d0a89142f39edbd093ec1c44c9/rest/services/AIS/2022_US_Vessel_Traffic/FeatureServer/11",
  Layer: "US Vessel Traffic 2022 12",
  Layer_Name: "US_Vessel_Traffic_2022_12_optimized",
  Month: 12,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2022_12_optimized/VectorTileServer",
  Year: 2022
}, {
  ArcGIS_Online_Item_ID: "41d6c1b1a68f4042a744021f5d8ab630",
  Date: "2023_01",
  FC_item_id: "2fe125d219474a8caf8162892751064b",
  FC_Name: "US_Vessel_Traffic_2023_01_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/2fe125d219474a8caf8162892751064b/rest/services/AIS/2023_US_Vessel_Traffic/FeatureServer/0",
  Layer: "US Vessel Traffic 2023 01",
  Layer_Name: "US_Vessel_Traffic_2023_01_optimized",
  Month: 1,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2023_01_optimized/VectorTileServer",
  Year: 2023
}, {
  ArcGIS_Online_Item_ID: "5fef5d256bda40458eb9d5e8a164b24b",
  Date: "2023_02",
  FC_item_id: "355023e76fe640179ee74280376dec58",
  FC_Name: "US_Vessel_Traffic_2023_02_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/355023e76fe640179ee74280376dec58/rest/services/AIS/2023_US_Vessel_Traffic/FeatureServer/1",
  Layer: "US Vessel Traffic 2023 02",
  Layer_Name: "US_Vessel_Traffic_2023_02_optimized",
  Month: 2,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2023_02_optimized/VectorTileServer",
  Year: 2023
}, {
  ArcGIS_Online_Item_ID: "d60ec66600e243d2bbb5a0b703b5dbc7",
  Date: "2023_03",
  FC_item_id: "4974980dbca04dbb9b173d517b677b0e",
  FC_Name: "US_Vessel_Traffic_2023_03_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/4974980dbca04dbb9b173d517b677b0e/rest/services/AIS/2023_US_Vessel_Traffic/FeatureServer/2",
  Layer: "US Vessel Traffic 2023 03",
  Layer_Name: "US_Vessel_Traffic_2023_03_optimized",
  Month: 3,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2023_03_optimized/VectorTileServer",
  Year: 2023
}, {
  ArcGIS_Online_Item_ID: "8fedddc98038497bb4ef39a82d5d4019",
  Date: "2023_04",
  FC_item_id: "e0609bca7c65401980673c6ca804edd1",
  FC_Name: "US_Vessel_Traffic_2023_04_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/e0609bca7c65401980673c6ca804edd1/rest/services/AIS/2023_US_Vessel_Traffic/FeatureServer/3",
  Layer: "US Vessel Traffic 2023 04",
  Layer_Name: "US_Vessel_Traffic_2023_04_optimized",
  Month: 4,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2023_04_optimized/VectorTileServer",
  Year: 2023
}, {
  ArcGIS_Online_Item_ID: "060cfa8cd2ce4547961213b818e222eb",
  Date: "2023_05",
  FC_item_id: "6a4a029c00fb44e4932c109fcb9387e5",
  FC_Name: "US_Vessel_Traffic_2023_05_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/6a4a029c00fb44e4932c109fcb9387e5/rest/services/AIS/2023_US_Vessel_Traffic/FeatureServer/4",
  Layer: "US Vessel Traffic 2023 05",
  Layer_Name: "US_Vessel_Traffic_2023_05_optimized",
  Month: 5,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2023_05_optimized/VectorTileServer",
  Year: 2023
}, {
  ArcGIS_Online_Item_ID: "5f26d6e78c3046d0ac95f75c90dbef8e",
  Date: "2023_06",
  FC_item_id: "64591aff37814f119a78fa106ad87bf7",
  FC_Name: "US_Vessel_Traffic_2023_06_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/64591aff37814f119a78fa106ad87bf7/rest/services/AIS/2023_US_Vessel_Traffic/FeatureServer/5",
  Layer: "US Vessel Traffic 2023 06",
  Layer_Name: "US_Vessel_Traffic_2023_06_optimized",
  Month: 6,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2023_06_optimized/VectorTileServer",
  Year: 2023
}, {
  ArcGIS_Online_Item_ID: "ec4ad4dc1f814357a5db4f8bd05929f8",
  Date: "2023_07",
  FC_item_id: "821e85439a744ef69afbaf912d0494c0",
  FC_Name: "US_Vessel_Traffic_2023_07_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/821e85439a744ef69afbaf912d0494c0/rest/services/AIS/2023_US_Vessel_Traffic/FeatureServer/6",
  Layer: "US Vessel Traffic 2023 07",
  Layer_Name: "US_Vessel_Traffic_2023_07_optimized",
  Month: 7,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2023_07_optimized/VectorTileServer",
  Year: 2023
}, {
  ArcGIS_Online_Item_ID: "1d4a0bda674e4270bb2f8949ae603d46",
  Date: "2023_08",
  FC_item_id: "258594d5814541999e10e9b371ba6ea2",
  FC_Name: "US_Vessel_Traffic_2023_08_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/258594d5814541999e10e9b371ba6ea2/rest/services/AIS/2023_US_Vessel_Traffic/FeatureServer/7",
  Layer: "US Vessel Traffic 2023 08",
  Layer_Name: "US_Vessel_Traffic_2023_08_optimized",
  Month: 8,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2023_08_optimized/VectorTileServer",
  Year: 2023
}, {
  ArcGIS_Online_Item_ID: "36fcb86f191141679f9555b94f751af9",
  Date: "2023_09",
  FC_item_id: "216244b789254b069dcb20a0b9459a0c",
  FC_Name: "US_Vessel_Traffic_2023_09_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/216244b789254b069dcb20a0b9459a0c/rest/services/AIS/2023_US_Vessel_Traffic/FeatureServer/8",
  Layer: "US Vessel Traffic 2023 09",
  Layer_Name: "US_Vessel_Traffic_2023_09_optimized",
  Month: 9,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2023_09_optimized/VectorTileServer",
  Year: 2023
}, {
  ArcGIS_Online_Item_ID: "23823f900f7b4aafaec038bf6f485311",
  Date: "2023_10",
  FC_item_id: "12ac7e5cacc242db81d92e74fbfd175f",
  FC_Name: "US_Vessel_Traffic_2023_10_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/12ac7e5cacc242db81d92e74fbfd175f/rest/services/AIS/2023_US_Vessel_Traffic/FeatureServer/9",
  Layer: "US Vessel Traffic 2023 10",
  Layer_Name: "US_Vessel_Traffic_2023_10_optimized",
  Month: 10,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2023_10_optimized/VectorTileServer",
  Year: 2023
}, {
  ArcGIS_Online_Item_ID: "f693e65cb3f34f508d9d413619d9a0a7",
  Date: "2023_11",
  FC_item_id: "69880d829f814229a491e35cd42908e7",
  FC_Name: "US_Vessel_Traffic_2023_11_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/69880d829f814229a491e35cd42908e7/rest/services/AIS/2023_US_Vessel_Traffic/FeatureServer/10",
  Layer: "US Vessel Traffic 2023 11",
  Layer_Name: "US_Vessel_Traffic_2023_11_optimized",
  Month: 11,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2023_11_optimized/VectorTileServer",
  Year: 2023
}, {
  ArcGIS_Online_Item_ID: "abe425e4ff6d4ebf989458ea4fffe6dc",
  Date: "2023_12",
  FC_item_id: "9344e972a44d4d5ba8992eb11718ca77",
  FC_Name: "US_Vessel_Traffic_2023_12_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/9344e972a44d4d5ba8992eb11718ca77/rest/services/AIS/2023_US_Vessel_Traffic/FeatureServer/11",
  Layer: "US Vessel Traffic 2023 12",
  Layer_Name: "US_Vessel_Traffic_2023_12_optimized",
  Month: 12,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2023_12_optimized/VectorTileServer",
  Year: 2023
}, {
  ArcGIS_Online_Item_ID: "ba14baeb332e4b3bbbf19b706f0420a3",
  Date: "2024_01",
  FC_item_id: "514429711d23445684682fd54289c74d",
  FC_Name: "US_Vessel_Traffic_2024_01_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/514429711d23445684682fd54289c74d/rest/services/AIS/2024_US_Vessel_Traffic/FeatureServer/0",
  Layer: "US Vessel Traffic 2024 01",
  Layer_Name: "US_Vessel_Traffic_2024_01_optimized",
  Month: 1,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2024_01_optimized/VectorTileServer",
  Year: 2024
}, {
  ArcGIS_Online_Item_ID: "73ddb391a19c4a428ae91a27ec3e508d",
  Date: "2024_02",
  FC_item_id: "02262ea33efe41f7bc209fd3bb6ad540",
  FC_Name: "US_Vessel_Traffic_2024_02_creds",
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/02262ea33efe41f7bc209fd3bb6ad540/rest/services/AIS/2024_US_Vessel_Traffic/FeatureServer/1",
  Layer: "US Vessel Traffic 2024 02",
  Layer_Name: "US_Vessel_Traffic_2024_02_optimized",
  Month: 2,
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2024_02_optimized/VectorTileServer",
  Year: 2024
}, {
  /**
   * Item Id of the Vessel Traffic Vector Tile Layer for this month
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
   * Item id of the Feature Service (with embedded credential) that contains the polylines from the raw AIS data
   */
  FC_item_id: "529f7976ce6a42ca91f546adc49352a2",
  /**
   * Name of the Feature Service
   */
  FC_Name: "US_Vessel_Traffic_2024_03_creds",
  /**
   * URL of the Feature Service (with embedded credential) that contains the polylines from the raw AIS data
   */
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/529f7976ce6a42ca91f546adc49352a2/rest/services/AIS/2024_US_Vessel_Traffic/FeatureServer/2",
  Layer: "US Vessel Traffic 2024 03",
  /**
   * Year and Month
   */
  Date: "2024_03",
  Month: 3,
  Year: 2024
},
{
  /**
   * Item Id of the Vessel Traffic Vector Tile Layer for this month
   */
  ArcGIS_Online_Item_ID: "a1733d808ce04a51a183e762e8b1a8c9",
  /**
  * Name of the Vessel Traffic Vector Tile Layer
  */
  Layer_Name: "US_Vessel_Traffic_2024_04_optimized",
  /**
   * URL of the Vessel Traffic Vector Tile Layer
   */
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2024_04_optimized/VectorTileServer",
  /**
   * Item id of the Feature Service (with embedded credential) that contains the polylines from the raw AIS data
   */
  FC_item_id: "feb9a72fc29a49b7a667219b73c1fd0b",
  /**
   * Name of the Feature Service
   */
  FC_Name: "US_Vessel_Traffic_2024_04_creds",
  /**
   * URL of the Feature Service (with embedded credential) that contains the polylines from the raw AIS data
   */
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/feb9a72fc29a49b7a667219b73c1fd0b/rest/services/AIS/2024_US_Vessel_Traffic/FeatureServer/3",
  Layer: "US Vessel Traffic 2024 04",
  /**
   * Year and Month
   */
  Date: "2024_04",
  Month: 4,
  Year: 2024
},
{
  /**
   * Item Id of the Vessel Traffic Vector Tile Layer for this month
   */
  ArcGIS_Online_Item_ID: "a2c60a84e2644a9e889c50a26d659078",
  /**
  * Name of the Vessel Traffic Vector Tile Layer
  */
  Layer_Name: "US_Vessel_Traffic_2024_05_optimized",
  /**
   * URL of the Vessel Traffic Vector Tile Layer
   */
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2024_05_optimized/VectorTileServer",
  /**
   * Item id of the Feature Service (with embedded credential) that contains the polylines from the raw AIS data
   */
  FC_item_id: "38cee93f775d44709c5f3bfe630a2686",
  /**
   * Name of the Feature Service
   */
  FC_Name: "US_Vessel_Traffic_2024_05_creds",
  /**
   * URL of the Feature Service (with embedded credential) that contains the polylines from the raw AIS data
   */
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/38cee93f775d44709c5f3bfe630a2686/rest/services/AIS/2024_US_Vessel_Traffic/FeatureServer/4",
  Layer: "US Vessel Traffic 2024 05",
  /**
   * Year and Month
   */
  Date: "2024_05",
  Month: 5,
  Year: 2024
},
{
  /**
   * Item Id of the Vessel Traffic Vector Tile Layer for this month
   */
  ArcGIS_Online_Item_ID: "5e5146dd37744272b2578c4910fa8508",
  /**
  * Name of the Vessel Traffic Vector Tile Layer
  */
  Layer_Name: "US_Vessel_Traffic_2024_06_optimized",
  /**
   * URL of the Vessel Traffic Vector Tile Layer
   */
  Service_URL: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2024_06_optimized/VectorTileServer",
  /**
   * Item id of the Feature Service (with embedded credential) that contains the polylines from the raw AIS data
   */
  FC_item_id: "400f6c41029c44d1b2c74705631e352a",
  /**
   * Name of the Feature Service
   */
  FC_Name: "US_Vessel_Traffic_2024_06_creds",
  /**
   * URL of the Feature Service (with embedded credential) that contains the polylines from the raw AIS data
   */
  Feature_Service: "https://utility.arcgis.com/usrsvcs/servers/400f6c41029c44d1b2c74705631e352a/rest/services/AIS/2024_US_Vessel_Traffic/FeatureServer/5",
  Layer: "US Vessel Traffic 2024 06",
  /**
   * Year and Month
   */
  Date: "2024_06",
  Month: 6,
  Year: 2024
}
]

// const AIS_APP_SOURCE_DATA_URL_PROD = 'https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/AIS_App_Source_Data/FeatureServer/0';
// const AIS_APP_SOURCE_DATA_URL_DEV = 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/AIS_App_Source_Data_DEV/FeatureServer/6/';
// const AIS_APP_SOURCE_DATA_URL = location.hostname === 'livingatlas.arcgis.com'
//   ? AIS_APP_SOURCE_DATA_URL_PROD
//   : AIS_APP_SOURCE_DATA_URL_DEV

// export const fetchShipTrafficLayersData = async():Promise<ShipTrafficLayerInfo[]>=>{

//   try {
//     const res = await queryFeatures({
//       url: AIS_APP_SOURCE_DATA_URL,
//     }) as IQueryFeaturesResponse;

//     if(res.features){

//       const data:ShipTrafficLayerInfo[] = res.features.map((feature:AIS_App_Source_Data_Feature)=>{

//         const {
//           Feat_URL,
//           Layer,
//           Month,
//           Tile_Item,
//           Tile_URL,
//           Year,
//           Source_Layer
//         } = feature.attributes;

//         const shipLayerInfo:ShipTrafficLayerInfo = {
//           Month,
//           Year,
//           Layer_Name: Source_Layer,
//           ArcGIS_Online_Item_ID: Tile_Item,
//           Service_URL: Tile_URL,
//           Feature_Service: Feat_URL
//         };

//         return shipLayerInfo

//       });

//       return data;

//     }
//   } catch(err){
//     console.error(err);
//   }

//   return []
// }

export const getLayerDataByDate = (year: number, month: number):ShipTrafficLayerInfo=>{

  // if(!shipTrafficLayersData){
  //   shipTrafficLayersData = await fetchShipTrafficLayersData()
  // }

  const layerInfo = shipTrafficLayersData.filter(d=>{
      return d.Year === year && d.Month === month;
  })[0];

  return layerInfo;
}
import { queryFeatures, IQueryFeaturesResponse  } from '@esri/arcgis-rest-feature-layer';

type AIS_App_Source_Data_Feature = {
  attributes: {
    Feat_URL: string;
    Layer: string;
    Month: number;
    Tile_Item: string;
    Tile_URL: string;
    Year: number;
    Source_Layer: string;
  }
}

export type ShipTrafficLayerInfo = {
  Month: number;
  Year: number;
  Layer_Name: string;
  ArcGIS_Online_Item_ID?: string;
  Service_URL: string;
  Feature_Service: string;
}

export const shipTrafficLayersData: ShipTrafficLayerInfo[] = [
  {
    Month: 1,
    Year: 2016,
    Layer_Name: 'US_Vessel_Traffic_2016_01_scaled',
    ArcGIS_Online_Item_ID: '8d95ec7ff2124fa297e318c83bda04c9',
    Service_URL: 'https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_01_scaled/VectorTileServer/',
    Feature_Service: ''
  },
  {
    Month: 2,
    Year: 2016,
    Layer_Name: 'US_Vessel_Traffic_2016_02_scaled',
    ArcGIS_Online_Item_ID: '',
    Service_URL: 'https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_02_scaled/VectorTileServer/',
    Feature_Service: ''
  },
  {
    Month: 3,
    Year: 2016,
    Layer_Name: 'US_Vessel_Traffic_2016_03_scaled',
    ArcGIS_Online_Item_ID: '',
    Service_URL: 'https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_03_scaled/VectorTileServer/',
    Feature_Service: ''
  },
  {
    Month: 4,
    Year: 2016,
    Layer_Name: 'US_Vessel_Traffic_2016_01_scaled',
    ArcGIS_Online_Item_ID: '',
    Service_URL: 'https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_04_scaled/VectorTileServer/',
    Feature_Service: ''
  },
  {
    Month: 5,
    Year: 2016,
    Layer_Name: 'US_Vessel_Traffic_2016_05_scaled',
    ArcGIS_Online_Item_ID: '',
    Service_URL: 'https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_05_scaled/VectorTileServer/',
    Feature_Service: ''
  },
  {
    Month: 6,
    Year: 2016,
    Layer_Name: 'US_Vessel_Traffic_2016_06_scaled',
    ArcGIS_Online_Item_ID: '',
    Service_URL: 'https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_06_scaled/VectorTileServer/',
    Feature_Service: ''
  },
  {
    Month: 7,
    Year: 2016,
    Layer_Name: 'US_Vessel_Traffic_2016_07_scaled',
    ArcGIS_Online_Item_ID: '',
    Service_URL: 'https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_07_scaled/VectorTileServer/',
    Feature_Service: ''
  },  {
    Month: 8,
    Year: 2016,
    Layer_Name: 'US_Vessel_Traffic_2016_08_scaled',
    ArcGIS_Online_Item_ID: '',
    Service_URL: 'https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_08_scaled/VectorTileServer/',
    Feature_Service: ''
  },
  {
    Month: 9,
    Year: 2016,
    Layer_Name: 'US_Vessel_Traffic_2016_09_scaled',
    ArcGIS_Online_Item_ID: '',
    Service_URL: 'https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_09_scaled/VectorTileServer/',
    Feature_Service: ''
  },  
  {
    Month: 10,
    Year: 2016,
    Layer_Name: 'US_Vessel_Traffic_2016_10_scaled',
    ArcGIS_Online_Item_ID: '',
    Service_URL: 'https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_10_scaled/VectorTileServer/',
    Feature_Service: ''
  },
  {
    Month: 11,
    Year: 2016,
    Layer_Name: 'US_Vessel_Traffic_2016_11_scaled',
    ArcGIS_Online_Item_ID: '',
    Service_URL: 'https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_11_scaled/VectorTileServer/',
    Feature_Service: ''
  },
  {
    Month: 12,
    Year: 2016,
    Layer_Name: 'US_Vessel_Traffic_2016_12_scaled',
    ArcGIS_Online_Item_ID: '',
    Service_URL: 'https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_12_scaled/VectorTileServer/',
    Feature_Service: ''
  }

];

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

export const getLayerDataByDate = async(year: number, month: number):Promise<ShipTrafficLayerInfo>=>{

  // if(!shipTrafficLayersData){
  //   shipTrafficLayersData = await fetchShipTrafficLayersData()
  // }

  const layerInfo = shipTrafficLayersData.filter(d=>{
      return d.Year === year && d.Month === month;
  })[0];

  return layerInfo;
}
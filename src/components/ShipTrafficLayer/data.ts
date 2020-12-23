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
  ArcGIS_Online_Item_ID: string;
  Service_URL: string;
  Feature_Service: string;
}

let shipTrafficLayersData: ShipTrafficLayerInfo[];

const fetchShipTrafficLayersData = async():Promise<ShipTrafficLayerInfo[]>=>{

  try {
    const res = await queryFeatures({
      url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/AIS_App_Source_Data/FeatureServer/0",
    }) as IQueryFeaturesResponse;

    if(res.features){

      const data:ShipTrafficLayerInfo[] = res.features.map((feature:AIS_App_Source_Data_Feature)=>{

        const {
          Feat_URL,
          Layer,
          Month,
          Tile_Item,
          Tile_URL,
          Year,
          Source_Layer
        } = feature.attributes;

        const shipLayerInfo:ShipTrafficLayerInfo = {
          Month,
          Year,
          Layer_Name: Source_Layer,
          ArcGIS_Online_Item_ID: Tile_Item,
          Service_URL: Tile_URL,
          Feature_Service: Feat_URL
        };

        return shipLayerInfo

      });

      return data;

    }
  } catch(err){
    console.error(err);
  }

  return []
}

export const getLayerDataByDate = async(date:Date):Promise<ShipTrafficLayerInfo>=>{

  if(!shipTrafficLayersData){
    shipTrafficLayersData = await fetchShipTrafficLayersData()
  }

  if(!date){
    return null
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  const layerInfo = shipTrafficLayersData.filter(d=>{
      return d.Year === year && d.Month === month;
  })[0];

  return layerInfo;
}
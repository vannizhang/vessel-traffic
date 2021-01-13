import { queryFeatures, IQueryFeaturesResponse  } from '@esri/arcgis-rest-feature-layer';

export type AISFileSizeInfo = {
    [key:string]: {
        size: number;
    }
}

enum AISFileSizeFeatureFields {
    key = 'Key_',
    size = 'Size'
}

type AISFileSizeFeature = {
    attributes: Record<AISFileSizeFeatureFields, any>
}

export const getAISFileSize = async():Promise<AISFileSizeInfo>=>{

    const output:AISFileSizeInfo = {};

    try {
        const res = await queryFeatures({
            url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/AIS_File_Download_Size_View/FeatureServer/0",
        }) as IQueryFeaturesResponse;

        if(res.features){

            res.features.forEach((feature:AISFileSizeFeature)=>{
                const { attributes } = feature;
                const {  Key_, Size }: { Key_:string; Size:number} = attributes;

                const filename = Key_.split('.')[0];

                // convert original size from byte to megabyte, 1 megabyte = 2^20 bytes
                const sizeInMB = Size / Math.pow(2, 20);

                output[filename] = {
                    size: sizeInMB
                };
            })
        }

        return output;

    } catch(err){
        console.error(err)
    }

    return output;
}
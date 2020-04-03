import * as React from 'react';
import axios from 'axios';

import AppConfig from '../../AppConfig';

interface BookmarkFeature {
    attributes: {
        Name: string;
        Lat: string;
        Long: string;
        Zoom: number;
    }
}

interface BookmarkData {
    name: string;
    lat: number;
    lon: number;
    zoom: number;
}

const Bookmarks:React.FC = ()=>{

    const [ bookmarkData, setBookmarkData ] = React.useState<BookmarkData[]>([])

    const fetchBookmarks = async()=>{
        const url = AppConfig.BookmarkLayerUrl + `/query?f=json&outFields=*&where=1=1`;

        try {
            const { data } = await axios.get(url);

            const bookmarkData:BookmarkData[] = data && data.features 
                ? data.features.map((d:BookmarkFeature)=>{

                    const {
                        Name, Lat, Long, Zoom
                    } = d.attributes;

                    return {
                        name: Name,
                        lat: +Lat,
                        lon: +Long,
                        zoom: Zoom
                    }
                }) : [];

            setBookmarkData(bookmarkData);

        } catch(err){
            console.log(err);
        }
        
    };

    const getBookmarks = ()=>{
        return bookmarkData.map((d, index)=>{

            const { name, lon, lat, zoom } = d;

            return (
                <div
                    key={`bookmark-${index}`}
                    style={{

                    }}
                >
                    <span className='text-white'>{name}</span>
                </div>
            );
        })
    }

    React.useEffect(()=>{
        fetchBookmarks();
    },[]);

    return (
        <div>
            <h5 className='text-white'>Bookmarks</h5>
            { getBookmarks() }
        </div>
    )
};

export default Bookmarks;
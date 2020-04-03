import './style.scss';
import * as React from 'react';
import axios from 'axios';

import AppConfig from '../../AppConfig';

interface Props {
    onSelect: (d:BookmarkData)=>void;
}

interface BookmarkFeature {
    attributes: {
        Name: string;
        Lat: string;
        Long: string;
        Zoom: number;
    }
}

export interface BookmarkData {
    name: string;
    lat: number;
    lon: number;
    zoom: number;
}

const Bookmarks:React.FC<Props> = ({
    onSelect
})=>{

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
                    className='bookmark'
                    style={{
                        'cursor': 'pointer'
                    }}
                    onClick={onSelect.bind(this, d)}
                >
                    <span className='text-white font-size--2'>{name}</span>
                </div>
            );
        })
    }

    React.useEffect(()=>{
        fetchBookmarks();
    },[]);

    return (
        <div>
            <h5 className='text-light-gray font-size--1 avenir-demi trailer-quarter'>Points of Interest</h5>
            { getBookmarks() }
        </div>
    )
};

export default Bookmarks;
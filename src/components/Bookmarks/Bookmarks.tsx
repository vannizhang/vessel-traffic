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
                        'display': 'flex',
                        'cursor': 'pointer'
                    }}
                    onClick={onSelect.bind(this, d)}
                >
                    {/* <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16"><path d="M12 11.49V4.066C12 1.852 10.209 1 8 1s-4 .852-4 3.067v7.422L8 15.5zM4.9 3.926C4.9 2.509 5.943 1.79 8 1.79s3.1.719 3.1 2.137v7.259L8 14.294l-3.1-3.108zM10 6a2 2 0 1 0-2 2 2 2 0 0 0 2-2zM7 6a1 1 0 1 1 1 1 1 1 0 0 1-1-1z"/><path fill="none" d="M0 0h16v16H0z"/></svg> */}
                    <span className='text-white font-size--2 margin-left-quarter'>{name}</span>
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
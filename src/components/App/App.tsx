import * as React from 'react';

import {
    MapView,
    ShipTrafficLayer,
    LayerList,
    TimeSlider,
    Bookmarks
} from '../';

import { BookmarkData } from '../Bookmarks/Bookmarks';

import AppConfig from '../../AppConfig';

const App:React.FC = ()=>{

    const [ sideBarVisible, setSidebarVisible ] = React.useState<boolean>(true);

    const [ selectedBookmark, setSelectedBookmark ] = React.useState<BookmarkData>();

    return (
        <>
            <div style={{
                'position': 'absolute',
                'top': '0',
                'bottom': '0',
                'left': '0',
                'right': '0'
            }}>
                
                <MapView 
                    webmapId={AppConfig.WebMapID}
                    paddingRight={sideBarVisible ? AppConfig.SideBarWidth : 0}
                    bookmark={selectedBookmark}
                >
                    <ShipTrafficLayer />

                    <TimeSlider/>
                </MapView>

                <div style={{
                    'position': 'absolute',
                    'bottom': '30px',
                    'left': '0',
                    'right': sideBarVisible ? AppConfig.SideBarWidth : 0,
                    'display': 'flex',
                    'justifyContent': 'center'
                }}>
                    <div id='timeSliderDiv'
                        style={{
                            'width': '1000px'
                        }}
                    ></div>
                </div>

            </div>


            <div style={{
                'position': 'absolute',
                'display': sideBarVisible ? 'block' : 'none',
                'top': '0',
                'right': '0',
                'padding': '1.5rem',
                'width': AppConfig.SideBarWidth,
                'height': '100%',
                'background': 'rgba(0,0,0,.8)',
                'color': '#efefef',
                'boxShadow': '0 1px 2px rgba(0, 0, 0, 0.3)',
                'boxSizing': 'border-box'
            }}>
                <div>
                    <h4>U.S. Marine Ship Traffic</h4>
                </div>

                <LayerList />

                <div className='leader-1'>
                    <Bookmarks 
                        onSelect={(bookmark:BookmarkData)=>{
                            setSelectedBookmark(bookmark);
                        }}
                    />
                </div>
                
            </div>

        </>
    );
};

export default App;
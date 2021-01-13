import React, { useContext, useMemo } from 'react'
import { BACKGROUND_COLOR, DEFAULT_BORDER_COLOR, DEFAULT_TEXT_COLOR } from '../../constants/UI'
import { ActiveLayerTimeInfo } from '../../types'
import { dateFns } from 'helper-toolkit-ts';
import { ENCLayerFeature } from '../ENCLayer/ENCLayer';
import { AppContext } from '../../contexts/AppContextProvider';
const DownloadIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="40" width="40"><path fill='#333' d="M31.8 16.704c0 3.489-2.765 6.296-5.238 6.296H24v-1h2.562c1.92 0 4.238-2.362 4.238-5.296a5.359 5.359 0 0 0-3.607-5.097l-.407-.138-.582-.198-.086-.608-.06-.425A7.953 7.953 0 0 0 18.462 3.2a7.647 7.647 0 0 0-6.683 4.187l-.259.488-.37.696-.763-.197-.535-.138a3.474 3.474 0 0 0-.874-.13 2.943 2.943 0 0 0-3.024 2.766l-.022.404-.031.573-.51.262-.357.183A5.173 5.173 0 0 0 2.2 16.897c0 2.653 2.166 5.085 4.545 5.103H11v1H6.737C3.733 22.978 1.2 19.988 1.2 16.897a6.169 6.169 0 0 1 3.378-5.493l.357-.183.022-.402a3.93 3.93 0 0 1 4.022-3.713 4.432 4.432 0 0 1 1.125.162l.534.138.26-.488A8.645 8.645 0 0 1 18.462 2.2a8.956 8.956 0 0 1 8.584 7.897l.06.425.408.138a6.358 6.358 0 0 1 4.285 6.044zM18 14h-1v15.354l-2.646-2.647-.707.707 3.853 3.854 3.854-3.854-.707-.707L18 29.354z"/><path fill="none" d="M0 0h32v32H0z"/></svg>;

const HOST_SERVER_URL = 'https://esri-vessel-traffic.s3.amazonaws.com'

type Props = {
    activeLayerTimeInfo: ActiveLayerTimeInfo;
    selectedENCFeature: ENCLayerFeature;
    onClose: ()=>void;
}

const DownloadScreen:React.FC<Props> = ({
    activeLayerTimeInfo,
    selectedENCFeature,
    onClose
}) => {

    const { AISLayersData, AISFileSizeLookup } = useContext(AppContext)

    const getFilenameByActiveLayerTime = ():string=>{
        const { year, month } = activeLayerTimeInfo;

        const monthStr = month < 10 ? `0${month}` : month.toString();

        return `AIS_Tracks_${year}_${monthStr}`;
    }

    const getUrlForZippedPackage = ():string=>{
        if(selectedENCFeature){
            return `${HOST_SERVER_URL}/${selectedENCFeature.attributes['File_']}`;
        }

        return `${HOST_SERVER_URL}/${getFilenameByActiveLayerTime()}.gdb.zip`
    }

    const fullTimeRange = useMemo(()=>{
        const firstItem = AISLayersData[0];

        const lastItem = AISLayersData[AISLayersData.length - 1];

        return `${dateFns.getMonthName(firstItem.Month - 1)} ${firstItem.Year} - ${dateFns.getMonthName(lastItem.Month - 1)} ${lastItem.Year}`;

    }, [AISLayersData])

    const getTimeRange = ():string=>{

        if(selectedENCFeature){
            return fullTimeRange;
        }

        const { year, month } = activeLayerTimeInfo;

        return `${dateFns.getMonthName(month - 1)}, ${year}`;
    }

    const getSize = ():string=>{

        const key = selectedENCFeature ? selectedENCFeature.attributes.File_.split('.')[0] : getFilenameByActiveLayerTime();
        // console.log(key)

        const filesizeData = AISFileSizeLookup[key] || { size: 0 }

        const { size } = filesizeData;
        // console.log(AISFileSizeLookup, size)

        if(size > 1000){
            return (size /1000).toFixed(1) + 'GB';
        }

        return size > 0 ? size.toFixed(0) + 'MB' : size.toFixed(3) + 'MB'
    }

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: 'border-box',
                padding: '2rem',
                background: `linear-gradient(0deg, rgba(27, 82, 139, .7) 0%, ${BACKGROUND_COLOR} 100%)`,
                zIndex: 10,

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                color: DEFAULT_TEXT_COLOR
            }}
        >
            <div
                style={{
                    position: 'relative',
                    display: 'flex',
                    border: `1px solid ${DEFAULT_BORDER_COLOR}`,
                    padding: '.5rem'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',

                        width: 80,
                        background: DEFAULT_TEXT_COLOR,
                        color: '#111',
                        textAlign: 'center',
                        paddingTop: '.65rem',
                        boxSizing: 'border-box'
                    }}
                    title='Download zipped package'
                >
                    <div>
                        <a
                            href={getUrlForZippedPackage()}
                            target='_blank'
                        >
                            { DownloadIcon }
                        </a> 
                        <br/>
                        <span className='font-size--2'>{getSize()}</span>
                    </div>
                </div>

                <div
                    className='margin-left-half margin-right-3 font-size--2'
                >
                    <span>Vessel track geodatabase</span>
                    <br/>
                    <span>All vessel types</span>
                    <br/>
                    <span>{ selectedENCFeature ? `Within ${selectedENCFeature.attributes.Name} area` : 'Full US extent'}</span>
                    <br/>
                    <span>{ getTimeRange() } </span>
                </div>

                <div
                    style={{
                        position: 'absolute',
                        top: '.1rem',
                        right: '.1rem',
                        cursor: 'pointer'
                    }}
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="32" width="32"><path fill={DEFAULT_TEXT_COLOR} d="M23.985 8.722L16.707 16l7.278 7.278-.707.707L16 16.707l-7.278 7.278-.707-.707L15.293 16 8.015 8.722l.707-.707L16 15.293l7.278-7.278z"/><path fill="none" d="M0 0h32v32H0z"/></svg>
                </div>
            </div>


        </div>
    )
}

export default DownloadScreen

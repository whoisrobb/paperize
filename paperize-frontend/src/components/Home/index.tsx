import css from './index.module.css'; 
import sevenzIcon from '../assets/7z.png';
import aacIcon from '../assets/aac.png';
import aviIcon from '../assets/avi.png';
import bmpIcon from '../assets/bmp.png';
import cssIcon from '../assets/css.png';
import datIcon from '../assets/dat.png';
import docxIcon from '../assets/docx.png';
import { useEffect, useState } from 'react';
import homeFolderIcon from '../assets/homeFolderIcon.png';


const Home = () => {

    const [theme, setTheme] = useState('light');


    useEffect(() => {
        const savedTheme = localStorage.getItem('themePreference');
        if (savedTheme) { setTheme(savedTheme); }
    }, [])


    return(
        <div className={`${css.homeParentDiv} ${theme === 'light' ? css.lightTheme : css.darkTheme}`}> 
            <div className={css.homeChildDiv}>
 
                <div className={css.homeDocumentsRecentDiv}>
                    <div className={css.homeDocumentsRecentItem}> 
                        <img className={css.homeDocumentTypeIcon} src={sevenzIcon} alt='document-icon'/>
                        <div className={css.homeDocumentsRecentTextDiv}> 
                            <p className={css.homeDocumentName}>Subspace Transmission Error Report</p> 
                            <p className={css.homeRecentDocumentSize}>
                                350 KB&nbsp;&nbsp;&nbsp;<span className={css.homeRecentDocumentDash}>|</span>&nbsp;&nbsp;&nbsp;docx
                            </p> 
                        </div> 
                    </div> 

                    <div className={css.homeDocumentsRecentItem}> 
                        <img className={css.homeDocumentTypeIcon} src={sevenzIcon} alt='document-icon'/>
                        <div className={css.homeDocumentsRecentTextDiv}> 
                            <p className={css.homeDocumentName}>Blueprint for the Unknown Future</p> 
                            <p className={css.homeRecentDocumentSize}>
                                350 KB&nbsp;&nbsp;&nbsp;<span className={css.homeRecentDocumentDash}>|</span>&nbsp;&nbsp;&nbsp;pdf
                            </p> 
                        </div> 
                    </div> 

                </div>

 
                <div className={css.homeDocumentsComponentDiv}>  
                    <div className={css.homeDocumentsUtilityBar}>  
                        <ul className={css.homeDocumentBreadcrumbs}>
                            <li><a href="#">Modular Cloud</a></li>
                            <li><a href="#">Celestia Mainnet</a></li>
                            <li><a href="#">Transactions</a></li> 
                        </ul>

                        <div className={css.homeDocumentsUtilityFlexDiv}>
                            <input  
                                type        = 'text' 
                                placeholder = 'Search...'
                                className   = {css.homeDocumentSearchInput} 
                            />
                        </div>
                    </div> 

                    <div className={css.homeDocumentsItemLabel}>  
                        <p className={css.homeDocumentLabelName}>File Name</p> 
                        <p className={css.homeDocumentLabelSize}>Size</p>
                        <p className={css.homeDocumentLabelSize}>Format</p>
                        <p className={css.homeDocumentLabelDate}>Date</p>
                    </div> 

                    <div className={css.homeDocumentsList}> 
                        <div className={css.homeDocumentsItem}> 
                            <img className={css.homeFolderIcon} src={homeFolderIcon} alt='folder-icon'/>
                            <p className={css.homeDocumentName}>Folders</p> 
                            <p className={css.homeDocumentSize}>350 KB</p>
                            <p className={css.homeDocumentFormat}>folder</p>
                            <p className={css.homeDocumentCreated}>30 Min Ago</p>
                        </div> 

                        <div className={css.homeDocumentsItem}> 
                            <img className={css.homeDocumentTypeIcon} src={sevenzIcon} alt='document-icon'/>
                            <p className={css.homeDocumentName}>Quantum Echo</p> 
                            <p className={css.homeDocumentSize}>350 KB</p>
                            <p className={css.homeDocumentFormat}>sevenz</p>
                            <p className={css.homeDocumentCreated}>30 Min Ago</p>
                        </div> 

                        <div className={css.homeDocumentsItem}> 
                            <img className={css.homeDocumentTypeIcon} src={aacIcon} alt='document-icon'/>
                            <p className={css.homeDocumentName}>Synthetic Mind Integration Notes</p> 
                            <p className={css.homeDocumentSize}>350 KB</p>
                            <p className={css.homeDocumentFormat}>acc</p>
                            <p className={css.homeDocumentCreated}>30 Min Ago</p>
                        </div> 

                        <div className={css.homeDocumentsItem}> 
                            <img className={css.homeDocumentTypeIcon} src={aviIcon} alt='document-icon'/>
                            <p className={css.homeDocumentName}>Encrypted Shadows</p> 
                            <p className={css.homeDocumentSize}>350 KB</p>
                            <p className={css.homeDocumentFormat}>avi</p>
                            <p className={css.homeDocumentCreated}>30 Min Ago</p>
                        </div> 

                        <div className={css.homeDocumentsItem}> 
                            <img className={css.homeDocumentTypeIcon} src={bmpIcon} alt='document-icon'/>
                            <p className={css.homeDocumentName}>Silent Signal Transmission</p> 
                            <p className={css.homeDocumentSize}>350 KB</p>
                            <p className={css.homeDocumentFormat}>bmp</p>
                            <p className={css.homeDocumentCreated}>30 Min Ago</p>
                        </div> 

                        <div className={css.homeDocumentsItem}> 
                            <img className={css.homeDocumentTypeIcon} src={sevenzIcon} alt='document-icon'/>
                            <p className={css.homeDocumentName}>Chrono Flux Report</p> 
                            <p className={css.homeDocumentSize}>350 KB</p>
                            <p className={css.homeDocumentFormat}>sevenz</p>
                            <p className={css.homeDocumentCreated}>30 Min Ago</p>
                        </div> 

                        <div className={css.homeDocumentsItem}> 
                            <img className={css.homeDocumentTypeIcon} src={cssIcon} alt='document-icon'/>
                            <p className={css.homeDocumentName}>Nebula Drift Logs</p> 
                            <p className={css.homeDocumentSize}>350 KB</p>
                            <p className={css.homeDocumentFormat}>css</p>
                            <p className={css.homeDocumentCreated}>30 Min Ago</p>
                        </div> 

                        <div className={css.homeDocumentsItem}> 
                            <img className={css.homeDocumentTypeIcon} src={datIcon} alt='document-icon'/>
                            <p className={css.homeDocumentName}>Encrypted Neural Pathway Logs</p> 
                            <p className={css.homeDocumentSize}>350 KB</p>
                            <p className={css.homeDocumentFormat}>dat</p>
                            <p className={css.homeDocumentCreated}>30 Min Ago</p>
                        </div> 

                        <div className={css.homeDocumentsItem}> 
                            <img className={css.homeDocumentTypeIcon} src={docxIcon} alt='document-icon'/>
                            <p className={css.homeDocumentName}>Void Circuit Breakdown</p> 
                            <p className={css.homeDocumentSize}>350 KB</p>
                            <p className={css.homeDocumentFormat}>docx</p>
                            <p className={css.homeDocumentCreated}>30 Min Ago</p>
                        </div> 

                    </div> 
                </div>

           </div>
        </div>
    );
}

export default Home;
import React, { useEffect, useState } from 'react';
import { ReadInterface } from "../data/bookData";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import "../styles/bookmodal.scss"
import { graphql } from 'gatsby'

export interface LearningBookModalProps extends ReadInterface{
    visibility: boolean;
    handleClose: () => void;
    data?: any;
}

export const LearningBookModal:React.FC<LearningBookModalProps> = ({visibility, handleClose, title, author, imagePath, rating, review, publishDate, takeAways, data}) => {
    
    const [internalVisibility, setInternalVisibility] = useState(visibility);
    
    console.log("data",data);
    
    useEffect(() => {
        setInternalVisibility(visibility);
    },[visibility])    
    

    return(
        <Dialog open={internalVisibility} onClose={() => handleClose()} >
            <div className={"book-modal-background"}>
            <DialogTitle>
                <div className={"book-modal-title-grid"}>  
                    <h2 className={"book-modal-title-text"}>{title}</h2> 
                    <h3 className={"book-modal-rating"}>{rating} / 10</h3>
                </div>
            </DialogTitle>
            <DialogContent >
                
                <div style={{display: 'flex', flexDirection:'row'}}>
                    <div>
                        <img src={imagePath} alt={"book cover"} height={"275px"} width={"183px"}/>
                        {/* <h3>{author}</h3>  */}
                    </div>
                    <div style={{paddingLeft: "15px"}}>
                        <h3>Review</h3>
                        <div>{review}</div>
                        <h3 style={{paddingTop: "10px"}}>Take Aways</h3>
                            <ul style={{paddingLeft: "25px"}}>
                                {
                                    takeAways?.map((element) => {
                                        return <li >{element}</li>
                                    })
                                }
                            </ul>
                        </div>
                </div>
                
                {/* <button onClick={() => handleClose()}>close</button> */}
            </DialogContent>
            </div>
        </Dialog>
    );
}



import React, { useEffect, useState } from 'react';
import { ReadInterface } from "../data/bookData";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export interface LearningBookModalProps extends ReadInterface{
    visibility: boolean;
    handleClose: () => void;
}

export const LearningBookModal:React.FC<LearningBookModalProps> = ({visibility, handleClose, title, author, imagePath, rating, review, publishDate, takeAways}) => {
    
    const [internalVisibility, setInternalVisibility] = useState(visibility);
    
    
    useEffect(() => {
        setInternalVisibility(visibility);
    },[visibility])    
    

    return(
        <Dialog open={internalVisibility} onClose={() => handleClose()}>
            <DialogTitle>
                <div style={{display: 'flex', flexDirection:'row', alignItems:'center', justifyContent:"space-between"}}>  
                    <h2 >{title}</h2> 
                    <h3 >{rating} / 10</h3>
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
                        <h3>Take Aways</h3>
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
        </Dialog>
    );
}
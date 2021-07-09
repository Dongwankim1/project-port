import React from 'react';
import Button from '@material-ui/core/Button';
import './ImageItem.css';
const ImageItem = ({ value, base64,handlefileChange }) => {
    
    return (
        <div className="ImageItem__Main">
            <div className="ImageItem__MainButton">
                <Button
                    variant="contained"
                    component="label"
                >
                    Upload File
                    <input
                        onChange={(e) => handlefileChange(e,value)}
                        type="file"
                        hidden
                    />
                </Button>

            </div>


            <div className="ImageItem__MainImage">
                {base64 ? <img src={base64}></img> : null}
            </div>
        </div>
    )
}

export default ImageItem;
import React, { useEffect } from 'react';
import ImageItem from './ImageItem/ImageItem';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import './ImageBoard.css'
import { InputLabel } from '@material-ui/core';
const ImageBoard = ({base64,setBase64}) =>{




    const handlefileChange = (e,index) => {
        e.preventDefault();
        let files = e.target.files;



        for (var i = 0; i < files.length; i++) {

            let file = files[i];

            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {

                // Make a fileInfo Object
                let fileInfo = {
                    name: file.name,
                    type: file.type,
                    size: Math.round(file.size / 1000) + ' kB',
                    base64: reader.result,
                    file: file,
                };

                setBase64(base64.slice(0,index).concat(fileInfo.base64));
 
            }
        }
    }

    const handleImageAdd =(e) =>{

        setBase64(base64.concat(''));
    }

    return (
        <div className="ImageBoard__UPLOAD">
            <div className="ImageBoard__Option">
            <InputLabel >이미지 추가</InputLabel>
            <AddCircleOutlineOutlinedIcon fontSize='large' onClick={handleImageAdd}/>
            </div>
            <div className="ImageBoard__ImageItem">
        {base64.map((data,key)=>(
            <ImageItem key={key} value={key} base64={data} handlefileChange={handlefileChange}/>
        ))}
        </div>
    </div>

    )
}

export default ImageBoard;
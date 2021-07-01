import React, { useState } from 'react';
import './Main.css';
import { useHistory } from 'react-router';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Input } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Editor } from "react-draft-wysiwyg";
import { EditorState,convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import * as api from '../../../api/database';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const Main = () => {
    const classes = useStyles();
    const [category, setCategory] = useState('');
    const [base64,setBase64] = useState('');
    const [title,setTitle] = useState('');
    const [startdate,setStartdate] = useState('2017-05-24');
    const [completedate,setCompletedate] = useState('2017-05-24');

    const history = useHistory();

    const [editorState,setEditorState] = useState(() =>EditorState.createEmpty())
    const handleChange = (event) => {
        setCategory(event.target.value);
    }

  

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
        const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        console.log(startdate);
        console.log(completedate);
        const result = api.setDoc(category,title,content,startdate,completedate,base64,history);

    }

    const handlefileChange= (e)=>{
        e.preventDefault();
        let files = e.target.files;
        

        const reader = new FileReader();
        console.log(reader);

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

              setBase64(fileInfo.base64);
            }
        }
    }

    return (
        <div className="Main">
            
            <div className="Main__Content">
                <form className="Main__form">
                    <div>
                        <InputLabel>카테고리</InputLabel>
                        <Select
                            value={category}
                            onChange={handleChange}
                            displayEmpty
                            className={classes.selectEmpty}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="" disabled>
                                Placeholder
                            </MenuItem>
                            <MenuItem value={1}>Main</MenuItem>
                            <MenuItem value={2}>Side</MenuItem>

                        </Select>
                    </div>
                    <div className="">
                        <InputLabel>타이틀</InputLabel>
                        <Input onChange={(e)=>setTitle(e.target.value)} value={title}/>
                    </div>

                    <div className="Main_dateField">
                        <InputLabel>날짜</InputLabel>
                        <TextField
                            id="date"
                            label="startday"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e)=>setStartdate(e.target.value)}
                        />
                        ~
                        <TextField
                            id="date"
                            label="completeday"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e)=>setCompletedate(e.target.value)}
                        />


                    </div>

                    <div>
                        <InputLabel>상세내용</InputLabel>
                        <Editor
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={setEditorState}
                        />
                    </div>

                    <div>
                        <Button
                            variant="contained"
                            component="label"
                        >
                            Upload File
                            <input
                                onChange={handlefileChange}
                                type="file"
                                hidden
                            />
                        </Button>
                    </div>
                </form>
            </div>
            <div className="Main__Bottom">

                <Button onClick={handleSubmit} className="bt__Main" variant="contained" color="primary">
                    등록
                </Button>
            </div>
        </div>
    )
}

export default Main;
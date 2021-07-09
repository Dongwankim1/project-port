import React, { useEffect, useState } from 'react';
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
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import * as api from '../../../api/database';
import { useDispatch, useSelector } from 'react-redux';
import DraftPasteProcessor from 'draft-js/lib/DraftPasteProcessor';
import { createBoard, updateBoard } from '../../../actions/board';
import ImageBoard from '../ImageAdd/ImageBoard';
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


const Main = ({ currentId, setCurrentId }) => {
    const classes = useStyles();
    const [category, setCategory] = useState('');
    const [base64, setBase64] = useState(['a',]);
    const [title, setTitle] = useState('');
    const [startdate, setStartdate] = useState('2017-05-24');
    const [completedate, setCompletedate] = useState('2017-05-24');

    const boarddata = useSelector((state) => (currentId ? state.board.find((message) => message.id === currentId) : null))
    const dispatch = useDispatch();
    const history = useHistory();

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    const handleChange = (event) => {
        setCategory(event.target.value);
    }

    useEffect(() => {
        if (boarddata) {
            setCategory(boarddata.category);
            setBase64(boarddata.image);
            setTitle(boarddata.title);
            setStartdate(boarddata.startdate);
            setCompletedate(boarddata.completedate);
            const processedHTML = DraftPasteProcessor.processHTML(boarddata.content)
            setEditorState(EditorState.createWithContent(ContentState.createFromBlockArray(processedHTML)))

            //setEditorState(boarddata.content);
        }
    }, [boarddata,base64])
    

    const clear = () => {
        setCategory('');
        setBase64(['a',]);
        setTitle('');
        setStartdate('');
        setCompletedate('');
        setEditorState(EditorState.createEmpty())
        setCurrentId(0);

    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId === 0) {
            const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
            //console.log(convertToRaw(editorState.getCurrentContent()))
            dispatch(createBoard(category, title, content, startdate, completedate, base64,clear));
            //const result = api.setDoc(category,title,content,startdate,completedate,base64,history);
        } else {
            const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
            //console.log(convertToRaw(editorState.getCurrentContent()))
            dispatch(updateBoard(currentId, category, title, content, startdate, completedate, base64));
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
                        <Input onChange={(e) => setTitle(e.target.value)} value={title} />
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
                            onChange={(e) => setStartdate(e.target.value)}
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
                            onChange={(e) => setCompletedate(e.target.value)}
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

                    <ImageBoard base64={base64} setBase64={setBase64}/>
                </form>
            </div>
            <div className="Main__Bottom">

                <Button onClick={clear} className="bt__Main" variant="contained" color="primary">
                    클리어
                </Button>
                <Button onClick={handleSubmit} className="bt__Main" variant="contained" color="primary">
                    등록
                </Button>
            </div>
        </div>
    )
}

export default Main;
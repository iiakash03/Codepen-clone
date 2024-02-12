import {Box,styled} from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as CodeMirror} from 'react-codemirror2'
import { useState } from 'react';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import '../App.css'

const Container = styled(Box)({
    flexGrow: "1",
    flexBasis: "0",
    display: "flex",
    flexDirection: "column",
    padding: "0 8px",
});


const Heading=styled(Box)({
    background: "#1d1e22",
    display: "flex",
    padding: "9px 10px"
})

const Header=styled(Box)({
   display: "flex", 
   background: "#060606",
    color:"#AAAEBC",
    justifyContent: "space-between",
    fontWeight: 600  
})


const Editor=({heading,icon,color,value,onChange})=>{

    const[open,setOpen]=useState(true)
    function handleChange(editor,data,value){
        onChange(value)
    }
    return (
        <Container style={open?null:{flexGrow:0}}>
            <Header>
                <Heading>
                    <Box component="span" 
                    style={{
                        background:color,
                        height:20,
                        width:20,
                        display:'flex',
                        placeContent:'center',
                        borderRadius:5,
                        marginRight:5,
                        paddingBottom:2,
                        color:"#000"
                    }}
                    >
                        {icon}
                    </Box>
                    {heading}
                </Heading>
                <CloseFullscreenIcon
                fontSize='small'
                style={{alignSelf:"center"}} 
                onClick={()=>{setOpen(prevState=>!prevState)}}
                />
            </Header>
            <CodeMirror
                onBeforeChange={handleChange}
                value={value}
                className="controlled-editor"
                options={{
                    lineWrapping: true,
                    lint: true,
                    lineNumbers: true,
                    theme: 'material'
                }}
            />
        </Container>
    )
}

export default Editor
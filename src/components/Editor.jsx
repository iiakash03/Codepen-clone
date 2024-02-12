import {Box,styled} from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as CodeMirror} from 'react-codemirror2'

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
    return (
        <Container>
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
                <CloseFullscreenIcon/>
            </Header>
            <CodeMirror 
            className='controlled-editor'
            options={{
                theme:'material',
                lineNumbers: true,
                value:{value}
            }}
            />
        </Container>
    )
}

export default Editor
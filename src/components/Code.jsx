import Editor from "./Editor"
import {Box,styled} from "@mui/material"
import { useContext } from "react"

import { DataContext } from "../context/DataProvider"

const Code=()=>{

    const[html,css,js,setHtml,setCss,setJs]=useContext(DataContext)

    const Container=styled(Box)({
        display:"flex",
        background:"#060606",
    })
    return(
        <Container>
            <Editor
                heading="HTML"
                icon="/"
                color="#FF3C41"
                value={html}
                onChange={setHtml}
            />
            <Editor 
                heading="CSS"
                icon="*"
                color="#0ebeff"
                value={css}
                onChange={setCss}

            />
            <Editor
                heading="JAVASCRIPT"
                icon="{}"
                color="#fcd000"
                value={js}
                onChange={setJs}
            
            />
        </Container>
    )
}

export default Code
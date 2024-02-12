import {AppBar,Toolbar,styled} from "@mui/material";

const Container=styled(AppBar)({
    background: "#060606",
    height:"9vh"
})

const Header=()=>{
    return (
        <div>
            <Container position="static">
                <Toolbar>
                    Hello
                </Toolbar>
            </Container>

        </div>
    )
}

export default Header;
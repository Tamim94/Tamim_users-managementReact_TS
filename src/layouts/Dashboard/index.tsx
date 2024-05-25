import React from "react";
import {Box} from "@mui/material";
import TopBar from "./TopBar";

interface Props {
    children : React.ReactNode;
}

const DashboardLayout = ({children}:Props): JSX.Element => {

    return(
        <Box><TopBar/>
            <Box
                sx = {{
                    marginTop:5,
                    height: 'auto'
                }}
            >
            </Box>
            {children}
        </Box>
    );
};

export default DashboardLayout;

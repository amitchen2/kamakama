import { Typography } from "@mui/material";
import styled from "styled-components";

export const AppBar = styled.div`
    position: static;
    border-bottom: 1px solid #e0e0e0;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    padding: 16px;
    justify-content: space-between;
`;

export const AppBarTitle = styled(Typography)(({theme})=>(
    {
        fontWeight: 600,
        [theme.breakpoints.up('sm')]: {
            fontSize: "16px",
        }
    }
))
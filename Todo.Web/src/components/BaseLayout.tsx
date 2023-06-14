import React from "react";
import { ColorModeContext } from "../App";
import IconButton from '@mui/material/IconButton';
import { AppBar, Box, Container, Grid, Toolbar, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import AdbIcon from '@mui/icons-material/Adb';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import useScrollTrigger from '@mui/material/useScrollTrigger';

function ElevationScroll({ children }: any) {

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

export default function BaseLayout({ children }: any) {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    return (
        <>
            <CssBaseline enableColorScheme />
            <ElevationScroll {...children}>
                <AppBar position="sticky" enableColorOnDark>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Grid container>
                                <Grid item><AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /></Grid>
                                <Grid item xs><Typography align="center">
                                    My First Application
                                </Typography>
                                </Grid>
                                <Grid item>
                                    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
            <Box sx={{ m: 2 }}>
                <Grid container>{children}</Grid>
            </Box>
        </>
    )
}
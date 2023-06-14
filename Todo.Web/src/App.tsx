import React, { lazy, Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/MainTheme';
import BaseLayout from './components/BaseLayout';


const Home = lazy(() => import('./pages/Home'));
const Start = lazy(() => import('./pages/Start'));
export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function App() {

    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const colorMode = React.useMemo(() => ({
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
    }), [],);


    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme(mode)}>
                <BaseLayout>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/start" element={<Start />} />
                        </Routes>
                    </Suspense>
                </BaseLayout>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;

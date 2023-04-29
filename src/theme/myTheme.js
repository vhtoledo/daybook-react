import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const myTheme = createTheme({
    palette: {
        primary: {
            main: '#910F0F'
        },
        secondary: {
            main: '#fff'
        },
        error: {
            main: red.A400
        }
    }
})

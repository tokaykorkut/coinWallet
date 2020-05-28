import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette:{
        primary:{
            main:'#212121',
            light:'#484848',
            dark:'#000000',
            contrastText:'#fff'
        },
        secondary:{
            main:'#ffee58',
            light:'#ffff8b',
            dark:'#c9bc1f',
            contrastText:'#000'
        }
    }
})

export default theme
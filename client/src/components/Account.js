import React from 'react';

import { Grid } from '@material-ui/core';
import AccountCards from './AccountCards'


class Account extends React.Component{

   render(){
       return(
        <div>
       
        <Grid container direction='row' >
            <Grid item container>
            <Grid item xs={false} sm={1}/>
            <Grid item xs={12} sm={10}>
                <AccountCards />
            </Grid>
            <Grid item xs={false} sm={1}/>
            </Grid>
        </Grid>
        
        </div>
   )}
}


export default Account
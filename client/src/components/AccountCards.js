import React from 'react';

import {connect} from 'react-redux'
import { Grid } from '@material-ui/core';
import MCard from './MCard'

class AccountCards extends React.Component{

    
   render(){
        if(this.props.wallet){
       const keysarray = Object.keys(this.props.wallet) 
       return(
       <>
            <Grid container spacing={3} >
            {keysarray.map((item)=>(
                <Grid item xs={4} key={item}>
                <MCard currency={item} amount={parseFloat(this.props.wallet[item])} />
                </Grid>
            ))
            
            }
            </Grid>
         
       </>   
   )}else{return(<h1>Loading...</h1>)}}
}

const mapStateToProps =(state) =>({
    wallet: state.wallet.wallet
})


export default connect(mapStateToProps,{})(AccountCards)
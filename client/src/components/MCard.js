import React from 'react';
import {connect} from 'react-redux'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import SellModal from './SellModal'
import BuyModal from './BuyModal'
import theme from '../theme'
class MCard extends React.Component{



   render(){
    const useStyles ={
      root: {
        flexGrow: 1
      },
      paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
      },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12
        }
      }
       return(
         <div style={useStyles.root}>
            <Paper elevation={3} >
          <Card >
            <CardContent>
        <Typography style={useStyles.title} color="textSecondary"  gutterBottom>
          {this.props.currency}
        </Typography>
        <Typography variant="h5" component="h2" >
        {this.props.amount}
        </Typography>
      </CardContent>
      <CardActions>
        <SellModal currency={this.props.currency} amount={this.props.amount} />
        <BuyModal currency={this.props.currency} amount={this.props.amount}/>
      </CardActions>
    </Card>
    </Paper>
    </div>
   )}
}


export default MCard
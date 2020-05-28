import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import theme from '../theme'
import {connect} from 'react-redux'
import {logoutUser} from '../actions/authActions'

class Header extends React.Component{

 
  handleLogOut = ()=>{
    this.props.logoutUser()
  }


  render(){
    const useStyles = {
      root: {
        flexGrow: 1,
      },
      menuButton: {
       marginRight: theme.spacing(2),
     },
    title: {
      flexGrow: 1,
    }
   }
   if(this.props.user){
      return (
        <div style={useStyles.root}>
          <AppBar position="static" color='primary'>
            <Toolbar>
              <Typography variant="h6"  color='secondary' style={useStyles.title}>
                welcome {this.props.user.firstname}  {this.props.user.surname}
              </Typography>
              <IconButton  onClick={this.handleLogOut} color='secondary'>
                  <ExitToAppRoundedIcon/>
              </IconButton>
            </Toolbar>
          </AppBar>
        </div>
        
      )}else{return(<h1>Loading...</h1>)}
      
  }
}
const mapStateToProps = (state) =>({
  user: state.auth.user
})

export default connect(mapStateToProps,{logoutUser})(Header)
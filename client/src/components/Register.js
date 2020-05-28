import React from 'react'

import { connect} from 'react-redux';
import {clear_error} from '../actions/errorActions'
import {registerUser} from '../actions/authActions'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import theme from '../theme'
import Alert from '@material-ui/lab/Alert'
class Register extends React.Component{
    state={
        msg:null,
        password:'',
        firstname:'',
        surname:'',
        email:''
    }

    componentDidUpdate(prevProps){
        const {isAuthenticated,error} = this.props
        if(error !== prevProps.error){
            if(error.id === 'REGISTER_FAILED'){
                this.setState({msg:error.msg.msg})
            }else{
                this.setState({msg:null})
            }
        }
        if(isAuthenticated){
            this.props.clear_error()
            this.props.history.push('/')
        }
    }


    handleSubmit = (e) =>{
        e.preventDefault()

        const userInfo = {
            firstname: this.state.firstname,
            surname: this.state.surname,
            email: this.state.email,
            password: this.state.password
        }
        this.props.registerUser(userInfo)
    }
    
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    
    render(){
        const useStyles = {
            paper: {
              marginTop: theme.spacing(8),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            },
            avatar: {
              margin: theme.spacing(1),
              backgroundColor: theme.palette.secondary.main,
            },
            form: {
              width: '100%', // Fix IE 11 issue.
              marginTop: theme.spacing(3),
            },
            submit: {
              margin: theme.spacing(3, 0, 2),
            },
          }
        return(
            <div>
               
            <Container component="main" maxWidth="xs" style={useStyles.paper}>
               
                <div style={useStyles.paper}>
                    <Avatar style={useStyles.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Register
                    </Typography>
                    {this.state.msg ?
                 <Alert variant="outlined" severity="warning">
                    {this.state.msg}
                 </Alert>:null}
                    <form style={useStyles.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="fname"
                            name="firstname"
                            variant="outlined"
                            required
                            fullWidth
                            id="firstname"
                            label="First Name"
                            autoFocus
                            onChange={this.handleChange}
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="surname"
                            label="Last Name"
                            name="surname"
                            autoComplete="lname"
                            onChange={this.handleChange}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={this.handleChange}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={this.handleChange}
                        />
                        </Grid>
                    
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={useStyles.submit}
                        onClick={this.handleSubmit}
                    >
                        Register
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                        <Link href="/login" variant="body2">
                            Already have an account? Sign in
                        </Link>
                        </Grid>
                    </Grid>
                    </form>
                </div>
                </Container>
            
          </div>
        )
    }
}



const mapStateToProps = (state) =>({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(mapStateToProps,{registerUser,clear_error})(Register)
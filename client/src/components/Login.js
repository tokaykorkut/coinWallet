import React from 'react'
import {connect} from 'react-redux'
import {clear_error} from '../actions/errorActions'
import {loginUser} from '../actions/authActions'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert'
import theme from '../theme'


class Login extends React.Component{

    state={
        password:'',
        email:'',
        msg:null
    }
 

    componentDidUpdate(prevProps){
        const {error , isAuthenticated} = this.props
        if (error !== prevProps.error){
            if(error.id === 'LOGIN_FAILED'){
                this.setState({msg:error.msg.msg})
            }else{
                this.setState({msg:null})
            }
        }
        if (isAuthenticated){
            this.props.clear_error()
            this.props.history.push('/')
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault()

        const userInfo = {
            password: this.state.password,
            email: this.state.email
        }

        this.props.loginUser(userInfo)
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
   
    render(){
        const useStyles ={
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
              marginTop: theme.spacing(1),
            },
            submit: {
              margin: theme.spacing(3, 0, 2),
            },
          }
        return (
            <div>
            <Container component="main" maxWidth="xs">
            
            <div style={useStyles.paper}>
                <Avatar style={useStyles.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
                {this.state.msg ?
                 <Alert variant="outlined" severity="warning">
                    {this.state.msg}
                 </Alert>:null}
                <form  style={useStyles.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={this.handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.handleChange}
                />
                
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.handleSubmit}
                >
                    Sign In
                </Button>
                <Grid container justify="flex-end">
                    
                    <Grid item>
                    <Link href='/register' variant="body2">
                        {"Don't have an account? Sign Up"}
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

export default connect(mapStateToProps,{loginUser,clear_error})(Login)
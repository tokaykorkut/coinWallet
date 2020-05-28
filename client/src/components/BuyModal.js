import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from 'react-redux'
import {buyMoney} from '../actions/walletActions'
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import theme from '../theme'
import TextField from '@material-ui/core/TextField';

class BuyModal extends React.Component{

    state={
        modal:false,
        from:'',
        to:this.props.currency,
        msg:null,
        havingamount:0,
        amount:0
    }

    componentDidUpdate(prevProps){
        const {error,loadingData} = this.props
        if (error !== prevProps.error){
            if(error.id === 'BUY_FAILED'){
                this.setState({msg:error.msg.msg})
            }else{
                this.setState({msg:null})
            }
        }
    }

    toggle = ()=>{
        this.setState({
            modal: !this.state.modal
        })
    }


    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleBuy = (e)=>{
        e.preventDefault()

        const info = {
            to: this.state.to,
            from: this.state.from,
            amount: this.state.amount
        }
        this.props.buyMoney(info)
        this.toggle()
    
    }



    render(){
        const marr = ['BTC','XRP','DASH','ETH','LTC','TL']
        const useStyles ={
            container: {
              display: 'flex',
              flexWrap: 'wrap',
            },
            formControl: {
              margin: theme.spacing(3),
              minWidth: 220
            }
          }
          
        return(
            <div>
            <Button size="small" variant='outlined'color='primary' onClick={this.toggle}  fullWidth>BUY</Button>
            <Dialog open={this.state.modal} onClose={this.toggle} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Buy {this.props.currency}</DialogTitle>
              <Divider variant="middle" />
              <DialogContent>
              <form style={useStyles.container}>
              <FormControl style={useStyles.formControl}>
            <TextField
            id="amount"
            label="Amount"
            type="number"
            name='amount'
            onChange={this.handleChange}
            InputLabelProps={{
                shrink: true,
            }}
            variant="outlined"
            />
            </FormControl>
            
            <FormControl variant="outlined" style={useStyles.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple"> From Which Currency Type</InputLabel>
            <Select
             native
             id='to'
             name='from'
             onChange={this.handleChange}
             label="Currency Type"
                 >
                 <option value='N/A' key={0}></option>
                  {marr.map((item)=>{
                     return item !== this.props.currency ? (<option value={item} key={item}>{item}</option>) : null
                 })}
                 </Select>
            </FormControl>
            
          </form>
              </DialogContent>
              <DialogActions>
              <Divider variant="middle" />
                <Button onClick={this.toggle} variant='outlined'  fullWidth  color="primary">
                  Cancel
                </Button>
                <Button onClick={this.handleBuy} variant='outlined'  fullWidth  color="primary">
                  Buy
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        )
    }
}

const mapStateToProps = (state)=>({
    laodingData: state.wallet.isLoading,
    error: state.error
})

export default connect(mapStateToProps,{buyMoney})(BuyModal)
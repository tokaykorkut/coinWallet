import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {sellMoney,getWallet} from '../actions/walletActions'
import {connect} from 'react-redux'
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import theme from '../theme'
import {clear_error} from '../actions/errorActions'
class SellModal extends React.Component{

    state={
        modal:false,
        to:'',
        from:this.props.currency,
        msg:null,
        havingamount:0,
        amount:0
    }

    componentDidUpdate(prevProps){
        const {error,loadingData} = this.props
        if (error !== prevProps.error){
            if(error.id === 'SELL_FAILED'){
                this.setState({msg:error.msg.msg})
            }else{
                this.setState({msg:null})
            }
    }   }


    handleChange = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
        
    }

    toggle = ()=>{
        this.setState({
            modal: !this.state.modal
        })
    }

    handleSell = (e)=>{
        e.preventDefault()

        const info = {
            to: this.state.to,
            from: this.state.from,
            amount: this.state.amount
        }
        this.props.sellMoney(info)
        this.toggle()
    
    }

    render(){
        const useStyles ={
            container: {
              display: 'flex',
              flexWrap: 'wrap',
            },
            formControl: {
              margin: theme.spacing(3),
              minWidth: 120,
            }
          }
          const marr = ['BTC','XRP','DASH','ETH','LTC','TL']
        return(
            <div>
            <Button size="small" variant='outlined' color='primary' onClick={this.toggle} fullWidth>SELL</Button>
            <Dialog open={this.state.modal} onClose={this.toggle} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Sell {this.props.currency}</DialogTitle>
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
            <InputLabel htmlFor="outlined-age-native-simple"> To Which Currency Type</InputLabel>
            <Select
            native
            id='to'
            name='to'
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
                <Button onClick={this.toggle} variant='outlined'  fullWidth color="primary">
                  Cancel
                </Button>
                <Button onClick={this.handleSell} variant='outlined'  fullWidth  color="primary">
                  Sell
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

export default connect(mapStateToProps,{sellMoney})(SellModal)
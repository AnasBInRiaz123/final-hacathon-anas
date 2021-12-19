import React from 'react'
import '../styles/Branch.css'
// import User from '../images/kishan.jpg' 
import Menu from '../components/Menu'
import data from '../data/data.json'
import MyCart from '../components/MyCart'
import LoginPage from './LoginPage';
import TextInput from '../components/TextInput'


class Branch extends React.Component {
    constructor(){
        super();
        this.state = {
            list: data,
            id:'',
            newList:[],
            price:'',
            name:[],
            total:0,
            quantity:0,
            clickable: false
        };
    }

    componentWillMount(){
        const hotel = this.props.history.location.pathname.slice(7)
        const List = this.state.list.filter(function (rec) { return rec.name === hotel})
        this.setState({
            id:hotel,
            newList: List
        })
    }

    childHandler = (ChildPrice,ChildName,ChildQuantity) => {
        const names = this.state.name; 
        names.push(ChildName);
        this.setState(
            {price: ChildPrice,
            name: names,
            quantity : ChildQuantity+1,
            clickable: true }
        )};

    incrementQuantity = (incQuan) => {
        this.setState(
            {
                quantity: incQuan+1
                
            }
        )
    };

    decrementQuantity = (decQuan) => {
        if(this.state.quantity>=1){
            this.setState(
                {
                    quantity: decQuan-1
                    
                }
            )
        }
        
    };

    total = (p,q) => {
        this.setState(
            {
                total:p*q
            }
        )
    }
   

    render(){
        return(
        <div>
            <div className="nav">
                <div id="logo">
                    <h2>SAYLANI FOOD DRIVE</h2>
                </div>

                <div id="user">
                    <div className="name">Hello, Admin</div>
                 
                </div>
            
                
            </div>

            <div id="content">
               
                <div id="panel">
                    <div id="logo">               
                    </div> 
                    <div id="right">
                        <div id= "right-in">
                            <h4>Branch manager Control From Admin</h4>
                                
                            { this.state.clickable && 
                                <div>
                                    <MyCart 
                                        name={this.state.name}
                                        price={this.state.price}
                                        quantity={this.state.quantity} 
                                        increment={this.incrementQuantity} 
                                        decrement={this.decrementQuantity}>
                                    </MyCart>
                                </div>
                            }
    
                            <div id="total">
                              
                               

                                <br/>
                                <form action="#" id="form">
                        <TextInput className = 'input' type="text" name="username" placeholder="Enter Email"  onChange={(e)=>{this.setState({username: e.target.value})}} />
                        <TextInput className = 'input' type="password" name="password" placeholder="Enter Password"  onChange={(e)=>{this.setState({password: e.target.value})}}/>
                    
                        <button id="pay1"
                                onClick = {LoginPage} >Add New B.M +</button>
                    </form>
                                {/* <input id="pay1" type="button" value="Pay Now"/> */}
                            </div>
                        </div>                
                    </div>
                </div>

            </div>
        </div>
        )
    };
}

export default Branch;
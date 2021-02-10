import React from 'react';
import './App.css';
import Form from './components/form/form';
import Novalue from './components/novalue/novalue';
import Company from './components/company/company';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      inputValue : 'AMRN',
      data : {},
      loading:false,
      error:false,
      symbolError:'',
      tableDataType:'incomeStatementHistory',
      toggleNav:false,
    }
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({inputValue: e.target.value.toUpperCase()});
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({loading:true});

    const symbol= this.state.inputValue;
    if(symbol && symbol.length > 1){
        await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials?symbol=${symbol}`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-key": "7d10be56ebmsh8c8c1b2c9291cccp13172djsn51a60a6ea909",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
          }
        })
        .then(response => response.json())
          .then(res => {
            console.log(res)
            this.setState({
              data:{...res},
              loading:false,
              error:false,
              symbolError:'',
            })
          })
        .catch(err => {
          console.error(err);
          this.setState({error:true, loading:false});
        });
      }
        else{
          let symbolError;
          if(symbol.length<2){
            symbolError = 'Try at least 2 chars'
          }
          else{
            symbolError = 'Undefined Symbol'
          }
          this.setState({symbolError:symbolError,loading:false})
        }
  }

  changeDataType = (dataType) => {
    if(this.state.tableDataType !== dataType){
        this.setState({tableDataType: dataType})
      }
  }

  componentDidMount(){
    this.setState({loading:true})
    //fetch
    fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials?symbol=AMRN&region=US`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-key": "7d10be56ebmsh8c8c1b2c9291cccp13172djsn51a60a6ea909",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
          }
        })
        .then(response =>response.json())
          .then(res => {
            console.log(res)
            this.setState({
              data:{...res},
              loading:false,
            })
          })
        .catch(async err => {
          console.error(err);
          await this.setState({error:true, loading:false});
          console.log('there is error',this.state.error)
        });

  }

  toggleMenu = async () => {
    await this.setState({toggleNav:!this.state.toggleNav})
    console.log('changed nav toggle to' ,this.state.toggleNav);
  }

  

  
  render(){
    const {inputValue, loading, data,error, symbolError, tableDataType , toggleNav} =this.state;

    return (
      <div className="App">
        <Header inputValue={inputValue}
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
          loading={loading} 
          toggleMenu={this.toggleMenu}
          toggleNav={toggleNav}
          symbolError={symbolError}/>
        
        <Navbar toggleNav={toggleNav} />
        {
          error ? 
          <Novalue string='Error Loading data ' /> 
          : 
          loading ?
          <div className="loader"></div>
          :
          <Company 
            data={data} 
            tableDataType={tableDataType} 
            changeDataType={this.changeDataType}/>
        }
        <Footer />
      </div>
    );
  }
}
   
export default App;

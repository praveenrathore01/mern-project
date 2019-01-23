// client/src/App.js
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      objectToUpdate: null,
      btnStatus: false,
    };
  }
  _handleChange = (checked, val)=> {
    // alert(checked)
    // alert(val)\
    let thisdata = this.state.data;
    // thisdata
    if(checked){
      let tempVal = {checked, val}
      thisdata.push(tempVal)
    }else{
      thisdata.map((el, index)=>{
          if(el.val == val){
            thisdata.splice(index, 1);
          }
      })
    }

    this.setState({
      data: thisdata,
      btnStatus: thisdata.length > 0 ? true : false
    })
  }
  handleChange= (e) => {
    this._handleChange(e.target.checked, e.target.value);
  }
  mySubmit = ()=>{
    
    fetch('http://localhost:3001/api/saveData', {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': 'http://localhost:3001/api/saveData'
      },
      body:JSON.stringify({
          fielddata: this.state.data,
      }),
  }).then((response) => response.json()
      ).then(responseJson=> {
        //console.log('success', responseJson);
        alert("data successfully adding");
      })

  // axios.post("http://localhost:3001/api/saveData", {
  //     fielddata: this.state.data
  // });
  }
  render() {
    return (
      <div>
        <form>
          <input type="checkbox" id="chck_1" value="chck_1" 
            onChange={ this.handleChange }
           />
          <label for="chck_1">checkbox number 1</label>
          <input type="checkbox" id="chck_2" value="chck_2" 
            onChange={ this.handleChange }
           />
          <label for="chck_2">checkbox number 2</label>
          <input type="checkbox" id="chck_3" value="chck_3" 
            onChange={ this.handleChange }
           />
          <label for="chck_3">checkbox number 3</label>
          <input type="checkbox" id="chck_4" value="chck_4" 
            onChange={ this.handleChange }
           />
          <label for="chck_4">checkbox number 4</label>
          <input type="checkbox" id="chck_5" value="chck_5" 
            onChange={ this.handleChange }
           />
          <label for="chck_5">checkbox number 5</label>
          <input type="checkbox" id="chck_6" value="chck_6" 
            onChange={ this.handleChange }
           />
          <label for="chck_6">checkbox number 6</label>
          <input type="checkbox" id="chck_7" value="chck_7" 
            onChange={ this.handleChange }
           />
          <label for="chck_7">checkbox number 7</label>
          <input type="checkbox" id="chck_8" value="chck_8" 
            onChange={ this.handleChange }
           />
          <label for="chck_8">checkbox number 8</label>
          <input type="checkbox" id="chck_9" value="chck_9" 
            onChange={ this.handleChange }
           />
          <label for="chck_9">checkbox number 9</label>
          <input type="checkbox" id="chck_10" value="chck_10" 
            onChange={ this.handleChange }
           />
          <label for="chck_10">checkbox number 10</label>
          <input type="checkbox" id="chck_11" value="chck_11" 
            onChange={ this.handleChange }
           />
          <label for="chck_11">checkbox number 11</label>
          <input type="checkbox" id="chck_12" value="chck_12" 
            onChange={ this.handleChange }
           />
          <label for="chck_12">checkbox number 12</label>
          <button type="button"
          onClick={()=>{
            this.mySubmit()
          }}
           disabled={this.state.btnStatus ? '': 'disabled'}>Confirm</button>

          <br />
          <p>{this.state.data.map(function(el){
            return `${el.checked, el.val}`
          })}</p>
        </form>
    </div>
    )
  }
}

export default App;
import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

  }

  addItem(itemName,itemUnit)
  {
    var amount = Math.floor(Math.random()*10)+1;
    console.log(itemName+amount);
    var currentItem = this.state.items.find(x=>x.value==itemName);
    console.log(currentItem);
    if(currentItem)
    {
      currentItem.qty+=amount;
    }
    else
    {
      this.state.items.push({ id: this.state.items.length+1, value: itemName, qty: amount, unit: itemUnit });
    }
    

    console.log(this.state.items);



    this.setState({items:this.state.items});
  }



  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <div className = "btnStyle">
        <button onClick={() => this.addItem("Bananas","pcs")}>Bananas</button>
        <button onClick={() => this.addItem("Milk","ltr")}>Milk</button>
        <button onClick={() => this.addItem("Bread","x")}>Bread</button>
        <button onClick={() => this.addItem("Hamburger","x")}>Hamburger</button>
      </div>
    </div>
  }
}

export default App;
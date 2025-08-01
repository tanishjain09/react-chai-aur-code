import React, {useId} from "react";

//useId hook is used to generate a unique id for the component
//this is useful when we want to use the same component multiple times and we want to give unique id to each component
function InputBox({
  //the props that are passed to the InputBox component
  label, //used to display the label that is from and to in currency convertor
  amount, //used to display the amount in currency convertor
  onAmountChange, //this is method that is used to change the amount in currency convertor
  onCurrencyChange, //to change the currency type in currency convertor
  currencyOptions = [], //this is the list of currency options that are passed to the InputBox component 
  selectedCurrency = "usd", //this is the default currency type that is passed to the InputBox component
  amountDisabled = false, //this is used to disable the amount input field
  currencyDisabled = false, //this is used to disable the currency select field
  className = "", //this is used to add additional classes to the InputBox component 
}) {

  const amountInputId = useId(); //generate a unique id for the amount input field

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} 
          className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId} //use the unique id for the input field
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Enter Amount"
          disabled={amountDisabled}
          value={amount} 
          onChange={(e) => //onChange event to handle amount input
            onAmountChange && onAmountChange((e.target.value)) //e.target.value is good but js is natorius and can return string so we use Number to convert it to number
          }
          //event fire when the input value changes and the call the onAmountChange function with the new value
          //the first amountChange is given as to check the the fucntion contain something or not 
          // and second actually change the value using this becox if the amountChange is empty it could creash the website
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} //use to change when the currency type is changed
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} 
              value={currency}> 
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}//jab bhi loop lagayeneg jsx mai to 
//key prop dena padega to react ko pata chalega ki ye option unique hai this is important for performance
//otherwise react will re-render all the options
//and the performance will be affected
 //showing the currency name in the select box

export default InputBox;

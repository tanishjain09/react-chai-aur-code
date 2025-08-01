import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState("");
  const [fromAmount, setFromAmount] = useState("usd");
  const [toAmount, setToAmount] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("0");

  const currencyInfo = useCurrencyInfo(fromAmount);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFromAmount(toAmount);
    setToAmount(fromAmount);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    const result = amount * currencyInfo[toAmount];
    const rounded = (result.toFixed(2));
    setConvertedAmount(rounded);
};


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFromAmount(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={fromAmount}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setToAmount(currency)}
                selectedCurrency={toAmount}
                amountDisabled
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {fromAmount.toUpperCase()} to {toAmount.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

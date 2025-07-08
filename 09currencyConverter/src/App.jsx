import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
// import './App.css'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  const currenceInfo = useCurrencyInfo(from)

  const options = Object.keys(currenceInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // const swap = () => {
  //   setFrom(prevFrom => {
  //     setTo(prevFrom)
  //     return to
  //   })

  //   setAmount(prev => {
  //     setConvertedAmount(prev)
  //     return convertedAmount
  //   })
  // }


  const convert = () => {
    setConvertedAmount(amount * currenceInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images4.alphacoders.com/105/thumbbig-1054250.webp')`,
        //   backgroundColor: #2f2f2f;
        }}
    >
      <div className="w-900">
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5
          backdrop-blur-sm bg-white/30'>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}
            >
              <div className='-fuwll mb-1'>
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className='relative w-full h-0.5'>
                  <button
                    type="button"
                    className="absolute left-1/2 
                    -translate-x-1/2
                    -translate-y-1/2 border-2
                    border-white rounded-md
                    bg-blue-600 text-white px-2 py-0.5"
                    onClick={swap}
                  >
                    Swap
                  </button>
              </div>

              <div className="w-full mt-1 mb-4">
                <InputBox 
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button type='submit'
                className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default App

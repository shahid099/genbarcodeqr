import { ReactBarcode } from "react-jsbarcode";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const ProductwithBarcode = () => {

  const [textValue, setTextValue] = useState('');
  const [ptextValue, setPtextValue] = useState('');
  const handleChange1 = (event)=> {
    setTextValue(event.target.value);
  }

  const handleChange2 = (event)=> {
    setPtextValue(event.target.value);
  }
    // States 
  const [ count, setCount ] = useState(0);
  const [barcodeArray, setBarcodeArray] = useState([]);
  const [pArray, setParray] = useState([]);
  const [selectedValue, setSelectedValue] = useState('code128');
  const [selectedbgColor, setSelectedbgColor] = useState('#ffff')
  const [lineColor, setLineColor] = useState('#000');
  const [width, setWidth] = useState(2);
  const [height, setHeight] = useState(60);
  const [fontsize, setFontsize] = useState(20);
  const filteredArr = barcodeArray.filter(item => item !== '');
  const filteredArr2product = pArray.filter(item => item !== '');
  // Function Handlers

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  }

  const handlebgColorchange = (event)=> {
    setSelectedbgColor(event.target.value);
  }

  const handleLineColorChange = (event)=> {
    setLineColor(event.target.value);
  }

  const handleWithChange = (event)=> {
    setWidth(event.target.value)
  }

  const handleHeightChange = (event)=> {
    setHeight(event.target.value)
  }

  const handleFontSizeChange = (event)=> {
    setFontsize(event.target.value);
  }

  const handleClick =()=> {

            const arrayofBarcode = textValue.split(/\s+/);
            const arrayofBarcode2 = ptextValue.split(/\s+/);
            setBarcodeArray(arrayofBarcode);
            setParray(arrayofBarcode2);

            let toastText = textValue.trim();
            let toastText2 = ptextValue.trim();
            if(toastText && toastText2) {
            toast("Barcode Generated Successfully!")
            } else {
            toast("Enter text to Generate Barcodes!")
            }

            setCount(count + 1);
        }

        const handlePressEnter = (event)=> {
            if(event.key === 'Enter') {
            handleClick();
        }
}


  return (
    <>
      <div className="w-full h-full relative">
        <div className="toast">
          <ToastContainer />
        </div>
        <section className="flex items-center justify-around">

          {/* Product text */}
          <textarea id="ptextarea"
            className="flex rounded-md p-2 border-red-200 outline-none max-md:w-[20em] max-md:h-[5em] max-md:mt-4" 
            value={ptextValue} 
            onChange={handleChange2} 
            onKeyDown={handlePressEnter}
            cols={25} rows={10} placeholder="Type Product Name...">
          </textarea>

          {/* Barcode Text */}
          <textarea id="textarea"
            className="flex rounded-md p-2 border-red-200 outline-none max-md:w-[20em] max-md:h-[5em] max-md:mt-4" 
            value={textValue} 
            onChange={handleChange1} 
            onKeyDown={handlePressEnter}
            cols={25} rows={10} placeholder="Type Barcode...">
          </textarea>

          <div className="setting max-md:hidden">
            <div className="formate flex gap-1">
              <h4>Select Format</h4>
              <select className="p-[2px] rounded-md" value={selectedValue} onChange={handleSelectChange} >
                <option value="code128">code128</option>
                <option value="code39">code39</option>
              </select>
            </div>
            <div className="bgColor" >
              <h4>Select Background Color</h4>
              <input className="rounded-lg" type="color" value={selectedbgColor} onChange={handlebgColorchange} />
            </div>
            <div className="lineColor">
              <h4>Select Line Color</h4>
              <input className="rounded-lg" type="color" value={lineColor} onChange={handleLineColorChange} />
            </div>
            <div className="widthHeight">
              <div className="with">
                <h4>Set With</h4>
                <input className="p-1 rounded-md w-20 text-center" type="number" value={width} onChange={handleWithChange} />
              </div>
              <div className="height">
                <h4>Set Height</h4>
                <input className="p-1 rounded-md w-20 text-center" type="number" value={height} onChange={handleHeightChange} />
              </div>
              <div className="fontSize">
                <h4>Set FontSize</h4>
                <input className="p-1 rounded-md w-20 text-center" type="number" value={fontsize} onChange={handleFontSizeChange} />
              </div>
            </div>
          </div>
        </section>
        <section className="sectionButton flex justify-center">
          <button 
            className={`buttonGen bg-slate-700 rounded-m text-xl`}
            onClick={handleClick} >
              Generate
          </button>
        </section>
        <section>
            <div className="w-full px-2 flex justify-center items-center mt-10 gap-2 flex-wrap">
             {filteredArr.map((value, index) => {
                const productIs = filteredArr2product[index]
                return (
                    <div key={index} className="marginimg flex flex-col justify-center items-center"> 
                    <p>{productIs}</p>
                        <ReactBarcode
                        value={value}
                        options={{
                            format: `${selectedValue}`,
                            lineColor: `${lineColor}`,
                            width: `${width}px`,
                            height: `${height}px`,
                            fontSize: `${fontsize}`,
                            background: `${selectedbgColor}`
                        }}
                        renderer="svg"
                        />
                    </div>
                )
            })}
          </div>
        </section>
      </div>
    </>
  )
}

export default ProductwithBarcode

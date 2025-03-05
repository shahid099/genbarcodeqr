import { ReactBarcode } from "react-jsbarcode";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const Barcodegenerate = () => {

  const [textValue, setTextValue] = useState('');
  const handleChange = (event)=> {
    setTextValue(event.target.value);
  }
    // States 

  const [ buttonbg, setButtonbg ] = useState("buttonBackground");
  const [barcodeArray, setBarcodeArray] = useState([]);
  const [selectedValue, setSelectedValue] = useState('code128');
  const [selectedbgColor, setSelectedbgColor] = useState('#ffff')
  const [lineColor, setLineColor] = useState('#000');
  const [width, setWidth] = useState(2);
  const [height, setHeight] = useState(60);
  const [fontsize, setFontsize] = useState(20);
  const filteredArr = barcodeArray.filter(item => item !== '');
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
    setBarcodeArray(arrayofBarcode);
    // SetThe Background of the Buttton When User Click the Button.
    setButtonbg("onclickButtonBackground");
    // After some time {onclickButtonBackground} will be removed.
    setTimeout(() => {
      setButtonbg("buttonBackground")
    }, 2000); 

      toast("Barcode Generated Successfully!")

  }

  const handlePressEnter = (event)=> {
    if(event.key === 'Enter') {
      handleClick();
  }
}

    // Function to Upload Data to Database
    const dataUpload = async () => { 
      console.log("Muhammad Shahid!", textValue);
      const token = localStorage.getItem('token'); // Get the token from local storage
      const response = await fetch('https://barcodeqrapi.onrender.com/postdata', {
          method: 'POST', 
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `${token}`, // Add token to Authorization header
          },
          body: JSON.stringify({textValue})
      })
      const data = await response.json();

      if (response.ok) {
        toast(data.message); // Show success alert
      } else {
        toast(data.message); // Show error alert
      }

   }
  //  END OF Upload Data to Database

  return (
    <>
<<<<<<< HEAD
      <div className="w-full min-h-[105vh] relative">
=======
      <div className="w-full h-full relative">
        <div className="toast">
          <ToastContainer />
        </div>
>>>>>>> 979fa15 (Added react-toastify)
        <section className="flex items-center justify-around">
          <textarea id="textarea"
            className="flex rounded-md p-2 border-red-200 outline-none max-md:w-[20em] max-md:h-[5em] max-md:mt-4" 
            value={textValue} 
            onChange={handleChange} 
            onKeyDown={handlePressEnter}
            cols={45} rows={5} placeholder="Type something...">

          </textarea>
          <div className="setting max-md:hidden">
            <div className="formate flex gap-1">
              <h4>Select Format</h4>
              <select className="p-[2px] rounded-md" value={selectedValue} onChange={handleSelectChange} >
                <option value="code128">code128</option>
                <option value="code39">code39</option>
              </select>
              {/* Button to Upload the data to Mongodb */}
              <button className="px-4 py-1 bg-white rounded-md" onClick={dataUpload}>ucode128</button>
            </div>
            {/* End Button to Upload the data to Mongodb*/}
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
            className={`buttonGen ${buttonbg} rounded-m text-xl`}
            onClick={handleClick} >
              Generate
          </button>
        </section>
        <section>
            <div className="w-full px-10 flex justify-center items-center mt-10 flex-col">
             {filteredArr.map((value, index) => (
              <div key={index} className="marginimg"> 
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
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Barcodegenerate

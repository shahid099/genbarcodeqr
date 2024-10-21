import React, { useRef, useState } from 'react'
import { QRCodeSVG } from "qrcode.react"
const Qrcode = () => {

    const [ textValue, setTextValue ] = useState('');
    const svgRef = useRef(null);

    // States for Changing the Properties of QR CODE
    const [ size, setSize ] = useState(160);
    const [ bgColor, setBgColor ] = useState("#ffffff");
    const [ fgColor, setGgColor ] = useState("#00000");
    const [ marginSize, setMarginSize ] = useState(3);

    // Set the Updated User input
    const handleChange = (event) => {
        setTextValue(event.target.value);
    }

    // Function to trigger download of the QR code
    const downloadQRCode = () => {
        const svgElement = svgRef.current.querySelector("svg");
        const svgData = new XMLSerializer().serializeToString(svgElement);
        const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "qrcode.svg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='w-full h-auto flex justify-start items-center flex-col gap-3'>
            <div className='flex flex-col justify-center items-center mt-14 gap-4'>
                <div className='flex justify-around gap-32'>
                    <section className='flex flex-col gap-3 mt-10'>
                        <input onChange={handleChange} className='px-3 py-2 rounded-md w-[30em]' type='text' placeholder='Enter the text...' />
                    </section>
                    <section className='w-52 h-52 flex flex-col'>
                        <div>
                            <label htmlFor="">Enter QR Code Size: </label>
                            <input className='rounded-md px-2' type="number" name="size" id="size"
                            value={size}
                            onChange={(e)=> setSize(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="">Enter Background Color: </label>
                            <input className='rounded-md' type="color" name="bgColor" id="bgColor" 
                            value={bgColor}
                            onChange={(e)=> setBgColor(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="">Enter the Text Color: </label>
                            <input className='rounded-md' type="color" name="fgColor" id="fgColor" 
                            value={fgColor}
                            onChange={(e)=> setGgColor(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="">Enter Margin: </label>
                            <input className='rounded-md px-2' type="number" name="marginSize" id="marginSize" 
                            value={marginSize}
                            onChange={(e)=> setMarginSize(e.target.value)}
                            />
                        </div>
                    </section>
                </div>
                <section ref={svgRef} >
                    <QRCodeSVG 
                        value={textValue}
                        size={size}
                        bgColor={bgColor}
                        fgColor={fgColor}
                        level="H"
                        marginSize={marginSize}
                    />
                </section>
                <button
                onClick={downloadQRCode}
                className="px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                Download QR Code
                </button>
            </div>
        </div>
    )
}

export default Qrcode
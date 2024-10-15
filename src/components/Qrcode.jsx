import React, { useState } from 'react'
import { QRCodeSVG } from "qrcode.react"
const Qrcode = () => {

    const [textValue, setTextValue] = useState('');
    const handleChange = (event) => {
        setTextValue(event.target.value);
    }

    return (
        <div className='w-full min-h-[40em] flex justify-start items-center flex-col gap-3 bg-red-300'>
            <div className='flex flex-col justify-center items-center mt-16 gap-4'>
                <h1 className='flex text-6xl my-5'>Generate QRCode</h1>
                <section className='flex flex-col gap-3'>
                    <input onChange={handleChange} className='px-3 py-2 rounded-md w-[30em]' type='text' placeholder='Enter the text...' />
                    <button className='py-3 bg-orange-300'>Generate</button>
                </section>
                <section>
                    <QRCodeSVG
                        value={textValue}
                        size={128}
                        bgColor="#ffffff"
                        fgColor="#00000"
                        level="H"
                        marginSize={4}
                    />
                </section>
                <p>{textValue}</p>
            </div>
        </div>
    )
}

export default Qrcode
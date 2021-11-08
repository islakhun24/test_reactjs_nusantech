
import React, {useState} from "react";
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/lib/css/marvel-devices.min.css';
import '../assets/style/iphon.css'
const Phone = (props) => {
    const [operasi, setOperasi] = useState('');
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [hasil, setHasil] = useState('');
   const onChangeCheck1 = () =>{
    setCheck1(!check1)
   }
   const onChangeCheck2 = () =>{
    setCheck2(!check2)
   }
   const onChangeCheck3 = () =>{
    setCheck3(!check3)
   }
   const changeInput1 = (e) =>{
       setInput1(e.target.value)
   }
   const changeInput2 = (e) =>{
    setInput2(e.target.value)
}
const changeInput3 = (e) =>{
    setInput3(e.target.value)
}
   const handleClick= (e) =>{
       let mHasil = 0;
    if(e=='x'){
        mHasil = check1 && check2 && check3  ? parseInt(input1) * parseInt(input2) * parseInt(input3) : (
            check1 && check2 ? parseInt(input1) * parseInt(input2) : (
                check1 && check3 ? parseInt(input1) * parseInt(input3) : (
                    check2 && check3 ? parseInt(input1) * parseInt(input3) : alert('field dicentang minimal 2')
                )
            )
        )
        setHasil(mHasil? mHasil : '-');
        setOperasi('Perkalian')
    }else if(e=='-'){
        mHasil = check1 && check2 && check3  ? parseInt(input1) - parseInt(input2) - parseInt(input3) : (
            check1 && check2? parseInt(input1) - parseInt(input2) : (
                check1 && check3 ? parseInt(input1) - parseInt(input3) : (
                    check2 && check3? parseInt(input1) - parseInt(input3) : alert('field dicentang minimal 2')
                )
            )
        )
        setHasil(mHasil? mHasil : '-');
        setOperasi('Pengurangan')
    }else if(e=='+'){
        mHasil = check1 && check2 && check3 ? parseInt(input1) + parseInt(input2) + parseInt(input3) : (
            check1 && check2? parseInt(input1) + parseInt(input2) : (
                check1 && check3 ? parseInt(input1) + parseInt(input3) : (
                    check2 && check3? parseInt(input1) + parseInt(input3) : alert('field dicentang minimal 2')
                )
            )
        )
        setHasil(mHasil? mHasil : '-');
        setOperasi('Penjumlahan')
    }else if(e=='/'){
        mHasil = check1 && check2 && check3 ? parseInt(input1) / parseInt(input2) / parseInt(input3) : (
            check1 && check2 ? parseInt(input1) / parseInt(input2) : (
                check1 && check3 ? parseInt(input1) / parseInt(input3) : (
                    check2 && check3 ? parseInt(input1) / parseInt(input3) : alert('field dicentang minimal 2')
                )
            )
        )
        setHasil(mHasil? mHasil : '-');
        setOperasi('Pembagian')
    }
   }
  return (
    <DeviceFrameset  device="MacBook Pro" color="black" potrait>
        <div className="p-16 w-full h-full bg-gradient-to-r from-green-400 to-blue-500 ">
            <div className="flex flex-row">
                <div className="flex flex-col flex-grow items-start justify-start">
                    <span className="text-4xl text-gray-700 font-bold mr-2">TEST <span className="text-2xl text-gray-700 font-bold ">CALCULATOR</span></span>
                    
                    <span className="text-xl text-gray-700 font-bold">PT. Nusantech</span>

                    <span className="text-xl text-gray-700 font-bold mt-20">create by: ISLAKHUN NUR DZAKI</span>

                </div>
                <div className="flex-none">
                <div className="iphone">
                    <div className="iphone-header">
                        <div className="iphone-camera" />
                        <div className="iphone-speaker" />
                    </div>
                    <div className="iphone-screen">
                        <div className="px-4 py-8  space-y-2 flex flex-col bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 h-full w-full">
                            
                            <div className="flex justify-center items-center flex-row space-x-4">
                                <input type="number" onChange={changeInput1} defaultValue={input1} className="form-checkbox bg-gray-600 px-2 text-white rounded-md flex-grow" />
                                <input type="checkbox"  defaultChecked={check1} onChange={()=> onChangeCheck1()} className="form-checkbox flex-wrap"  />
                            </div>
                            <div className="flex justify-center items-center flex-row space-x-4">
                                <input type="number" onChange={changeInput2} defaultValue={input2} className="form-checkbox bg-gray-600 px-2 text-white rounded-md flex-grow" />
                                <input type="checkbox" defaultChecked={check2} onChange={()=> onChangeCheck2()} className="form-checkbox flex-wrap"  />
                            </div>
                            <div className="flex justify-center items-center  flex-row space-x-4">
                                <input type="number" onChange={changeInput3} defaultValue={input3} className="form-checkbox bg-gray-600 px-2 text-white ring-0 border-0 rounded-md flex-grow" />
                                <input type="checkbox" defaultChecked={check3}  onChange={()=> onChangeCheck3()} className="form-checkbox flex-wrap"  />
                            </div>
                            <br />
                            <div className="flex flex-row space-x-2 mt-8">
                                <button onClick={()=>handleClick('+')} className="flex-1 bg-blue-700 rounded-md text-white font-bold">+</button>
                                <button onClick={()=>handleClick('-')} className="flex-1 bg-blue-700 rounded-md text-white font-bold">-</button>
                                <button onClick={()=>handleClick('/')} className="flex-1 bg-blue-700 rounded-md text-white font-bold">/</button>
                                <button onClick={()=>handleClick('x')} className="flex-1 bg-blue-700 rounded-md text-white font-bold">X</button>
                            </div>
                            <div className="h-1 bg-gray-500"></div>
                            <div className="flex items-start justify-start flex-col space-y-1">
                                <p className="text-white">Input 1: {input1 == ''? '-': input1 } </p>
                                <p className="text-white">Input 2: {input2 == ''? '-': input2 }</p>
                                <p className="text-white">Input 3: {input3 == ''? '-': input3 }</p>
                                <p className="text-white">Checklist: {
                                    check1 && check2 && check3 ? 'Semua' : (
                                        check1 && check2 ? 'Input 1 dan 2' : (
                                            check1 && check3 ? 'Input 1 dan 3' : (
                                                check2 && check3 ? 'Input 2 dan 3' : (
                                                    check1 ? 'Input 1' : (
                                                        check2 ? 'Input 2' : (
                                                            check3 ? 'Input 3' : 'Tidak ada'
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                } </p>
                                <p className="text-white">Operasi: {operasi === '' ? '-': operasi} </p>
                                <p className="text-white">Hasil: {hasil === '' ? '-': hasil}</p>
                            </div>
                        </div>
                    </div>
                    <div className="iphone-footer">
                    </div>
                </div>
                </div>
            </div>
       

        </div>
    </DeviceFrameset>

  );
};

export default Phone;

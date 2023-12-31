import React, {ReactNode } from "react"

interface ButtonOptions{
    buttonText? : string,
    className? : string,
    children? : ReactNode,
    onClick? : ()=> void,
}

const GeneralButton : React.FC<ButtonOptions> = ({buttonText, className,children, onClick }) => {
  return (
    <button onClick={onClick} className={`m-1 p-1 bg-sky-500 text-white rounded-lg ${className}`} >
        {children || buttonText || "I am Button"}
    </button>
  )
}

export default GeneralButton
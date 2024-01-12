// function Box

// function foo(){
//
// }
//
// export default foo()

import {useId, useState} from "react";

export const Box = ({children, ruzan, age}) => {   //
    // hook
    const id = useId()

    // useState, useEffect, useContext, useMemo, useCallBack, useId

    const [counterState, setCounterState] = useState(0)
    const [isCheck, setIsCheck] = useState(false)
    const [formData, setFormData] = useState({
        firstName:'sadsdf',
        lastName:'sdads',
        position:'sdfkjsdhf'
    })




    //  araji parametr@ handisanum e ayn popoxakan@  vor@ petq e kirarvi  tvyal componenti nersum
    //  ekrord parametr@ handisanum e ayn funkcian vor@ petq e popoxi trvac popoxakani arjeq@
    // useState() aydd tiruytum haytararum enq trvyac popoxakani naxnakan arjeq@




    let counterValue = 0

    function counter() {
        counterValue++

        setCounterState(counterState + 1)

        console.log(counterValue)
    }


    return <div>
        <p>{ruzan}</p>
        <h1>{age}</h1>

        <button onClick={counter}>Click</button>
        {counterValue}
        {counterState}
        {children}
    </div>
}

// export default Box


function foo(title) {

}




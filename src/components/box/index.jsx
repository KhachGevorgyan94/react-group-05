// function Box

// function foo(){
//
// }
//
// export default foo()

import {useEffect, useId, useState} from "react";

export const Box = ({children, ruzan, age}) => {   //
                                                   // hook
    const id = useId()

    // useState, useEffect, useContext, useMemo, useCallBack, useId

    const [counterState, setCounterState] = useState(0)
    const [isCheck, setIsCheck] = useState(false)
    const [formData, setFormData] = useState({
        firstName: 'sadsdf',
        lastName: 'sdads',
        position: 'sdfkjsdhf'
    })

    //  araji parametr@ handisanum e ayn popoxakan@  vor@ petq e kirarvi  tvyal componenti nersum
    //  ekrord parametr@ handisanum e ayn funkcian vor@ petq e popoxi trvac popoxakani arjeq@
    // useState() aydd tiruytum haytararum enq trvyac popoxakani naxnakan arjeq@

    let counterValue = 0

    function counter() {
        setCounterState(counterState + 1)
        console.log(counterState, 'counter function')
        // console.log(counterValue)
    }

    console.log('----------------------------')
    console.log('2 console.log')
    // useEffect@ baxkacac e  2 masic
    // 1 mas, funkcia vor@ naxatesvac e  usEfect@ ashxatelu
    useEffect(() => {
        console.log('1 useEffect')
    //     componentDidMount
    //     useEffect@ ashxatum e 1 angam  qani vor kaxvacutyun (deps) chuni vorevic e popoxakanic
    }, []);


    useEffect(() => {

        console.log('5 update state')
        console.log(counterState,' after update')

    //     componentDidUpdate

    }, [counterState]);


    useEffect(() => {


        return ()=>{
            console.log('6 useEffect unmount')

            
        }

    }, []);


    console.log('3 console.log')

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




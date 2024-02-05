import './style.scss'
import {useState} from "react";
import {CustomCheckbox} from "../../components/CustomCheckbox";

export const InputForms = () => {
    const [inputValue, setInputValue] = useState('')
    const [colorValue, setColorValue] = useState('')
    const [rangeValue, setRangeValue] = useState('')
    const [selectMerc, setSelectMerc] = useState(false)

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: '',
        age: '',
        email: ''
    })

    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})
    }
    // console.log(userData['firstName'])
    // console.log(userData['lastName'])

    console.log(userData)

    const handleColorChange = (e) => {
        setColorValue(e.target.value)
    }

    const handleRangeChange = (e) => {
        setRangeValue(e.target.value)

    }
    return <div>
        <div style={{margin: '0 auto'}} className={'width-400 gap-15 G-flex G-flex-column'}>
            {/*<div className='input-block'>*/}
            {/*    <label>*/}
            {/*        <input type="text"/>*/}
            {/*    </label>*/}
            {/*</div>*/}
            {/*<div className='input-block'>*/}
            {/*    <label>*/}
            {/*        <input type="text"/>*/}
            {/*    </label>*/}
            {/*</div>*/}
            <div className='input-block'>
                <label>
                    <input name={'firstName'} placeholder={'first name'} value={userData.firstName}
                           onChange={handleChange} type="text"/>
                </label>
                <label>
                    <input name={'lastName'} placeholder={'last name'} value={userData.lastName} onChange={handleChange}
                           type="text"/>
                </label>
                <label>
                    <input name={'age'} placeholder={'age '} value={userData.age} onChange={handleChange} type="text"/>
                </label>
                <label>
                    <input name='email' placeholder={'email'} value={userData.email} onChange={handleChange}
                           type="text"/>
                </label>
                {/*<label >*/}
                {/*    <input onChange={handleColorChange} type="color"/>*/}
                {/*</label>*/}
                {/*<label >*/}
                {/*    <input min={10} max={1000} step={5}  onChange={handleRangeChange} type="range"/>*/}
                {/*</label>*/}
                {/*<p style={{color:colorValue}}>{inputValue}</p>*/}
                {/*<p>{rangeValue}</p>*/}


                {/*<CustomCheckbox value={selectMerc}*/}
                {/*                onChange={()=>{*/}
                {/*    setSelectMerc(!selectMerc)*/}
                {/*}} label={'BMW'}/>*/}
                {/*<CustomCheckbox value={true} label={'Mercedes'}/>*/}
            </div>
        </div>


    </div>
}

//
//
// /**
//  *
//  * 1. unenq 1 input dasht
//  *    input dashtum  grum eq inch vor teqstain artahayutyun  ev da  animapes cuyc eq talis inch vor tegi mej
//  *
//  * 2. unenq input  ev button
//  *    button@ klini naxnakan disable vichak,  henc input dashtum  inch vor ban grenq  ayn  petq e lini  enable avtive vichak
//  *
//  * 3. unenq input dasht ev button
//  *    buttoni vra click aneluc stugel ete input dasht@ datark 1 apa ayn  dardznel karmir  guyni border
//  *    ev  input  dashti  nerqevum cuyc tal error  text
//  *    "duq petq  lracnel dasht@"
//  * 4. uneqn 2 input dashter
//  *    mutagrum enq tvain arjeqner
//  *    htllum cuyc eq talis bolor  ayd tver@ , ev ayn tver@ voronq  zuyg en  cuyc tal karmir guyni
//  *
//  *  5. unenq 3 input dasht  ev button
//  *     email, password, confirmPassword
//  *     buttoni vra click aneluc
//  *     stugel ardyoq bolor dashter@ lracvac en
//  *     stugel ardyoq password ev cinfirm password dashter@ irar havasar en
//  *
//  *     ete ayd paymannerin chpavararec xndir@  tvyal  input dasht@ nerkel karmir  guynov
//  *
//  *
//  * **/
//
//
//
// /**
//  *  unenq Student anunov  konstructorain
//  *  usanoxin haytararelu jamanak  voroshaki tvyalner haytararel  konstruktorain funkcian kanchelis
//  *  anun, azganun, tariq
//  *
//  *  konstruktorain funkcian uni hetevyal parametrner@  ev  funkcianer@
//  *
//  *  firstName, lastName, age, email, password, confirmapssword = parametrner
//  *
//  *
//  *  funkcianer`
//  *
//  *  1. unenal funkcia vor@  cuyc kta tvyal usanoxi bolor tvyalner@
//  *  2.  unenal funkcia vor@ hnaravorutyun kta tvyal usanoxin haytararel email
//  *      aysinqn funkcian argumentov kstana teqstain artahaytutyun vor@ kveragrvi meailin vorpes email hasce
//  *  3. unenal funkcia vor@ hnaravorutyun kta  tvyal usanoxin avelacnel password
//  *      funkcian  argumentov kstana 2 parametr, password ev confirm password
//  *       stugel ete password@ ev confirmpassword@ irar havasar en apa  tvyal usanoxin avelacnel password
//  *
//  *
//  * **/

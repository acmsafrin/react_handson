import { useSelect } from "./Select";


export default Option=({value,label})=>{
    const {value:activeValue,setValue}=useSelect();
    return(
        <div onClick={()=>setValue(value)}className={activeValue===value ? "active":""} >
            {label} | {value}
        </div>
    );
}
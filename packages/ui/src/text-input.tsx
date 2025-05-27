
interface PropType{
    placeholder:string,
    size:string
}

export function TextInput({
    placeholder,
    size
}:PropType){
    return(
        <input placeholder={placeholder} style={{
            padding: size==="small"? 10 : 20,
            margin: size==="small" ? 10 : 20,
            border:1,
            backgroundColor:"black"
        }}/>
    )
}
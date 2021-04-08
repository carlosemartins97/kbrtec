import InputMask from 'react-input-mask';

function onlyNumbers(str) {
    return str.replace(/[^0-9]/g, '');
}

function MaskedInput({mask, value, onChange, placeholder}){

    function handleChange(event){
        onChange({
            ...event,
            target: {
                ...event.target,
                value: onlyNumbers(event.target.value),
            }
        })
    }

    return <InputMask 
        mask={mask} 
        value={value} 
        onChange={handleChange} 
        placeholder={placeholder}
    />
}

export default MaskedInput;
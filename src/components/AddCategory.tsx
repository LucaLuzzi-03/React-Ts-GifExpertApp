import React, { useState } from 'react'



interface Props {
    onNewCategory: (input: string) => void
}

export const AddCategory = ({onNewCategory}: Props) => {

    const [ inputValue, setInputValue ] = useState<string>('');

    const onInputChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        setInputValue( e.target.value );
    }

    const onSubmit = ( e:React.FormEvent<HTMLFormElement> ):void => {
        e.preventDefault();
        
        const inputValueClean = inputValue.trim().toLowerCase();
        if (inputValueClean.length <= 1) return;

        onNewCategory(inputValueClean);
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder='Search gifs' 
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}

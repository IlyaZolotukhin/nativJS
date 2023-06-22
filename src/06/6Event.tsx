import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {
    const  deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
alert(event.currentTarget.name)
    }

    const onNameChanged = () => {
        console.log('name changed')
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed   '+event.currentTarget.value)
    }
    const focusLostHandler =() => {
        console.log('focus lost')
    }
    return <div><textarea onChange={onNameChanged} onBlur={focusLostHandler}>Ilya</textarea>
        <input onChange={onAgeChanged} type={"number"}/>

        <button name="delete" onClick={deleteUser}>X</button>
        </div>
}
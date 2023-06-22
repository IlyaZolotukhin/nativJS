import React from "react";

export type ManType = {
    name: string
    age: number
    lessons: Array<{title: string; name?: string}>//так тоже можно писать (?может быть и может не быть)
    address: {
        street: {
            title: string
        }
    }
}
type PropsType = {
    title: string
    man: ManType
}

function useDestructuringState(m:string) {
    return [m,function (){}]//передаёт в useState сообщение и функцию
}

export const ManComponent: React.FC<PropsType> = ({title, man:{name}}) => {
    //const {title, man:{name}} = props;
    //const {name} = props.man;

    const [message, setMessage]=useDestructuringState('hello')

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>{name}</div>
    </div>
}
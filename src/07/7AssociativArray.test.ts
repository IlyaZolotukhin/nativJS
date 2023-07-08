type UsersType = {
    [key:string] : {id: number, name: string, age?:number}
}

let users: UsersType

beforeEach(()=> {
    users = {
        '105':{id:105, name: 'Ilya'},
        '1':{id:1, name: 'Petya'},
        '1105':{id:1105, name: 'Alina'},
        '205':{id:205, name: 'Veronika'}
    }
})

test('should be change object', ()=>{
    users['105'].age = 30;//добавил новое свойство, не забыть типизировать
    expect(users['1105'].name).toBe('Alina')
    expect(users['105'].age).toBe(30)
    expect(users['105']).toEqual({id: 105, name: 'Ilya', age: 30})
    //проверяем весь объект
})
test('should be delete object', ()=>{
    delete users['105']

    expect(users['105']).toBeUndefined()
    //проверяем удалился ли объект
})



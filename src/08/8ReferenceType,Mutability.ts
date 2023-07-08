type UserType = {
    name: string
    age: number
    address: AddressType
}
type AddressType = {
    title: string
}

test('reference type test', () => {
    const address = {
        title: 'Novosibirsk'
    }


    const user: UserType = {
        name: 'Ilya',
        age: 39,
        address: address
    }

    const user2: UserType = {
        name: 'Veronika',
        age: 35,
        address: address
    }

    address.title = "Novosibirsk City"
//при изменении названия адреса в объекте название также измениться и в ссылках на этот объект
    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe("Novosibirsk City")

})

test('reference type array test', () => {
    const address = {
        title: 'Novosibirsk'
    }

    const user: UserType = {
        name: 'Ilya',
        age: 39,
        address: address
    }

    const user2: UserType = {
        name: 'Veronika',
        age: 35,
        address: address
    }

    const users = [user, user2, {name: 'Alina', age: 12, address: address}]

    const admins = [user, user2]

    admins[0].name = 'Iluha'
//при изменении имени пользователя в объекте лежащем в массиве, имя измениться везде
    expect(users[0].name).toBe('Iluha')
    expect(user.name).toBe('Iluha')
})
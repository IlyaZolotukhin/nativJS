import {makeHairstyle, moveUser, UserType, UserWithLaptop} from './09_01'

test('reference type string', () => {
    let user: UserType = {
        name: 'Ilya',
        hair: 40,
        address: {
            city: 'Novosibirsk'
        }
    }
    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(40)
    expect(awesomeUser.hair).toBe(20)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptop = {
        name: 'Ilya',
        hair: 40,
        address: {
            city: 'Novosibirsk',
            house: 124
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const movedUser = moveUser(user, 'Kazanovo')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kazanovo')


})
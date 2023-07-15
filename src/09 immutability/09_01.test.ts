import {
    addNewBooksToUser,
    CompanyType, makeHairstyle, moveUser,
    moveUserToOtherHouse, removeBook,
    updateBook,
    updateCompany, UserType,
    updateCompanyTitle, upgradeUserLaptop, UserWithBooksType, UserWithLaptopType,
    WithCompaniesType
} from "./09_01";

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
    let user: UserWithLaptopType = {
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

test('upgrade to macbook', () => {
    let user: UserWithLaptopType = {
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
    const userCopy = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Macbook')
})

test('upgrade to macbook', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ilya',
        hair: 40,
        address: {
            city: 'Novosibirsk',
            house: 124
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)
})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ilya',
        hair: 40,
        address: {
            city: 'Novosibirsk',
            house: 124
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = addNewBooksToUser(user, 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ilya',
        hair: 40,
        address: {
            city: 'Novosibirsk',
            house: 124
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ilya',
        hair: 40,
        address: {
            city: 'Novosibirsk',
            house: 124
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
})

test('update company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Ilya',
        hair: 40,
        address: {
            city: 'Novosibirsk',
            house: 124
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'Епам'}, {id: 2, title: 'RZD'}]
    }
    const userCopy = updateCompanyTitle(user, 1, 'EPAM')
    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('EPAM')
})

test('update company', () => {

    let companies: Record<string, CompanyType[]> = {
        'Ilya': [{id: 1, title: 'Епам'}, {id: 2, title: 'RZD'}],
        'Veronica': [{id: 1, title: 'RZD'}]
    }

    const copy = updateCompany(companies, 'Ilya', 1, 'Epam')

    expect(copy['Ilya']).not.toBe(companies['Ilya'])
    expect(copy['Veronica']).toBe(companies['Veronica'])
    expect(copy['Ilya'][0].title).toBe('Epam')
})
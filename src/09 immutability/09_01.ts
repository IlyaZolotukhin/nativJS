export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type CompanyType = { id: number, title: string };
export type WithCompaniesType = {
    companies: Array<CompanyType>

}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u, hair: u.hair / power
    }
    //copy.hair = u.hair / power
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address, city: city
        }
        /*copy.address = {
            ...u.address, city:city
         */
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address, house: house
        }
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop, title: title
        }
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBook: string) {
    return {
        ...u,
        books: [...u.books, newBook]

    }
}

export const updateBook = (u: UserWithLaptopType & UserWithBooksType,
                           oldBook: string, newBook: string) => ({
    ...u,
    books: u.books.map(b => b === oldBook ? newBook : b)
})

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, bookForDelite: string) => ({
    ...u,
    books: u.books.filter(b => b !== bookForDelite)
})

export const updateCompanyTitle = (u: UserWithLaptopType & WithCompaniesType,
                                   companyId: number, newTitle: string) => {
    return {
        ...u,
        companies: u.companies.map(c => c.id === companyId ? {...c, title: newTitle} : c)
    }
}

export const updateCompany = (companies: { [key: string]: Array<CompanyType> },
                              userName: string,
                              companyId: number, newTitle: string) => {
    // let companyCopy ={...companies}
    // companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ?
    //     {...c, title: newTitle} : c)

    return {
        ...companies,
        [userName]: companies[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)
    };
}
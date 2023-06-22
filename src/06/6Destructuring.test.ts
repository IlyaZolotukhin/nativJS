import {ManType} from './6Destructuring'

let props: ManType;
beforeEach(() => {
    props = {
        name: 'Ilya',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}, {title: '3', name: 'react'}],
        address: {
            street: {
                title: 'Kropotkina street'
            }
        }
    }
})

test('', () => {
    let {age, lessons} = props
    const {title} = props.address.street

    expect(age).toBe(32)
})
test('', () => {
    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    const [ls1, ...restLessons] = props.lessons;//делим на первый элемент массива и остаточный

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls1.title).toBe('1')//проверяем первый элемент
    expect(restLessons.length).toBe(2)//сколько объектов в массиве
    expect(restLessons[1].title).toBe('3')//в остаточном под индексом 1
    expect(restLessons[1].name).toBe('react')//в этом же объекте другое имя
    expect(restLessons[1]).toStrictEqual({title: '3', name: 'react'})//проверить полностью объект
})
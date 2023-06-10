import {CityType} from "../02/2";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./4";

let city: CityType;

const HAPPY_STREET = "Happy Street"
beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id:1,
                buildedAt: 2012,
                repared: false,
                address: {
                    number: 100,
                    street: {title: "White street"}
                }
            },
            {
                id:2,
                buildedAt: 2008,
                repared: false,
                address: {
                    number: 100,
                    street: {title: HAPPY_STREET}
                }
            },
            {
                id:3,
                buildedAt: 2020,
                repared: false,
                address: {
                    number: 101,
                    street: {title: HAPPY_STREET}
                }
            }
        ],
        governmentBuildings: [
            {
                type:  "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type:  "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

//01. создать функцию filter чтоб оставить дома только на Happy Street
test("Houses should be destroyed", ()=>{
    demolishHousesOnTheStreet(city,HAPPY_STREET);

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})

//02. отфильтровать здания, оставить где работает больше 500 человек
test("buildings with correct staff count", ()=>{
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe("FIRE-STATION");
})

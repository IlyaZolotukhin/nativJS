import {GovernmentBuildingsType, HousesType} from "../02/2";

export const getStreetsTitlesOfGovermentsBuildings = (buildings: Array<GovernmentBuildingsType>) => {
    return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HousesType>) => {
    return houses.map(b => b.address.street.title)
}

export const createMessages = (houses: Array<HousesType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}`)
}
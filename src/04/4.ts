import {CityType, GovernmentBuildingsType} from "../02/2";

export function demolishHousesOnTheStreet(city: CityType, street: string) {
city.houses = city.houses.filter(h=>h.address.street.title !== street)
    //если взятое h.address.street.title("White street") не равно!== приходящему ("Happy Street"),
    // то проходит в наш новый массив без названий других улиц
}

export const getBuildingsWithStaffCountGreaterThen = (buildings:Array<GovernmentBuildingsType>,number:number) =>{
return buildings.filter(b=>b.staffCount>number)
    //если во взятом массиве buildings b.staffCount (1000) будет >больше приходящего number (500)
    //, то вернем наш массив без значений где меньше
}
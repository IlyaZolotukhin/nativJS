export type StreetType = {
   title: string
}

export type AddressType = {
   number: number
   street: StreetType
}

export type HousesType = {
   buildedAt: number
   repared: boolean
   address: AddressType
}

export type StrType = {
   title: string
}

export type AddrType = {
   street: StrType
}

export type GovernmentBuildingsType = {
   type: "HOSPITAL"|"FIRE-STATION" //если одного типа и не может быть другх названий
   budget: number
   staffCount: number
   address: AddrType
}

export type CityType = {
   title: string
   houses: Array<HousesType>
   governmentBuildings:Array<GovernmentBuildingsType>
   citizensNumber: number
}






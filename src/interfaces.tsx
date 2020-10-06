

export interface Flight {
    flight_number: string;
    dept_code: string;
    dest_code: string;
    dept_time: Date;
    arrv_time: Date;
};

export interface Fleet {
    type_name: string;
    num_operation: number;
    class: FlightType;

}

export enum FlightType {
    Short = "short",
    Medium = "medium",
    MediumLong = "medium long",
    Long = "long",
}

export interface Airport {
    country: string,
    city: string,
    code: string,
}

export interface Passenger {
    title: Title,
    first_name: string,
    middle_name: string,
    last_name: string,
    flyer_type: FlyerType,
}

export enum Title {
    Ms = "Ms.",
    Mr = "Mr.",
    Dr = "Dr.",
    Mrs = "Mrs.",
    Miss = "Miss.",
}

export enum FlyerType {
    None = "N/A",
    Bronze = "Bronze",
    Silver = "Silver",
    Gold = "Gold",
    Diamond = "Diamond"
}
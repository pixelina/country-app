export interface Country {
    countryCode?: string,
    name?: string,
}
export interface CountryInfo {
    commonName?: string,
    officialName?: string,
    countryCode?: string,
    region?: string,
    borders?: [
        {
            commonName?: string,
            officialName?: string,
            countryCode?: string,
            region?: string,
            borders?: null
        }
    ],
    nextHoliday?: PublicHoliday | undefined
}
export interface PublicHoliday {
    date?: string,
    localName?: string,
    name?: string,
    countryCode?: string,
    fixed?: boolean,
    global?: boolean,
    counties?: [
        string
    ] | null,
    launchYear?: null | number,
    types: [
        string
    ]
}
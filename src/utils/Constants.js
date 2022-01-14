import i18n from "./textLanguages"

export const BORDER_COLOR_ITEM_LIST = 'black'
export const BORDER_COLOR_ITEM_LIST_EXPENSIVE = 'red'
export const BORDER_COLOR_ITEM_LIST_CHEAP = 'green'
export const BACKGROUND_COLOR_ITEM_LIST_EXPENSIVE = '#FEE'
export const BACKGROUND_COLOR_ITEM_LIST_CHEAP = '#EFE'
export const BACKGROUND_COLOR_PRICES_SCREEN = '#FFFF8F'
export const BACKGROUND_COLOR_PRICES_SCREEN_HEADER = '#FFDB58'
export const BACKGROUND_COLOR_CONVERT_SCREEN = '#F1C1FF'
export const BACKGROUND_COLOR_CONVERT_SCREEN_HEADER = '#CF9FFF'

export const WEIGHT_MEASURES = [
    //the reference for factor is g
    {
        name: i18n.t('mg'),
        factor: 0.001,
        symbol: 'mg'
    },
    {
        name: i18n.t('g'),
        factor: 1,
        symbol: 'g'
    },
    {
        name: i18n.t('kg'),
        factor: 1000,
        symbol: 'Kg'
    },
    {
        name: i18n.t('pound'),
        factor: 453.592,
        symbol: 'lb'
    },
    {
        name: i18n.t('tonne'),
        factor: 1000000,
        symbol: 't'
    },
    {
        name: i18n.t('ton'),
        factor: 1016047,
        symbol: 'tn'
    },
    {
        name: i18n.t('uston'),
        factor: 907184.7,
        symbol: 'ust'
    },
    {
        name: i18n.t('ounce'),
        factor: 28.3495,
        symbol: 'Oz'
    },
    {
        name: i18n.t('stone'),
        factor: 6350.29,
        symbol: 'st'
    },
]

export const DISTANCE_MEASURES = [
    // the reference for factor is m
    {
        name: i18n.t('mm'),
        factor: 0.001,
        symbol: 'mm'
    },
    {
        name: i18n.t('cm'),
        factor: 0.01,
        symbol: 'cm'
    },
    {
        name: i18n.t('m'),
        factor: 1,
        symbol: 'm'
    },
    {
        name: i18n.t('km'),
        factor: 1000,
        symbol: 'Km'
    },
    {
        name: i18n.t('inch'),
        factor: 0.0254,
        symbol: '″'
    },
    {
        name: i18n.t('feet'),
        factor: 0.3048,
        symbol: '′'
    },
    {
        name: i18n.t('yard'),
        factor: 0.9144,
        symbol: 'yd'
    },
    {
        name: i18n.t('mile'),
        factor: 1609.34,
        symbol: 'mi'
    },
    {
        name: i18n.t('nauticmile'),
        factor: 1852,
        symbol: 'nmi'
    },
]

export const LIQUID_MEASURES = [
    // the reference for factor is l
    {
        name: i18n.t('ml'),
        factor: 0.001,
        symbol: 'mL'
    },
    {
        name: i18n.t('liter'),
        factor: 1,
        symbol: 'L'
    },
    {
        name: i18n.t('ounce'),
        factor: 0.0284131,
        symbol: 'Oz'
    },
    {
        name: i18n.t('cup'),
        factor: 0.284131,
        symbol: 'UK cup'
    },
    {
        name: i18n.t('pint'),
        factor: 0.568261,
        symbol: 'UK pt'
    },
    {
        name: i18n.t('quart'),
        factor: 1.13652,
        symbol: 'UK qt'
    },
    {
        name: i18n.t('usgallon'),
        factor: 3.78541,
        symbol: 'US gal'
    },
    {
        name: i18n.t('uscup'),
        factor: 0.24,
        symbol: 'US cup'
    },
    {
        name: i18n.t('uspint'),
        factor: 0.473176,
        symbol: 'US pt'
    },
    {
        name: i18n.t('usquart'),
        factor: 0.946353,
        symbol: 'US qt'
    },
    {
        name: i18n.t('gallon'),
        factor: 4.54609,
        symbol: 'UK gal'
    },
    {
        name: i18n.t('cubicinch'),
        factor: 0.0163871,
        symbol: 'in³'
    },
    {
        name: i18n.t('cubicfoot'),
        factor: 28.3168,
        symbol: 'ft³'
    },
    {
        name: i18n.t('cubicmeter'),
        factor: 1000,
        symbol: 'm³'
    },
]

export const AREA_MEASURES = [
    // the reference for factor is squaremeter
    {
        name: i18n.t('hectare'),
        factor: 10000,
        symbol: 'ha'
    },
    {
        name: i18n.t('acre'),
        factor: 4046.86,
        symbol: 'ac'
    },
    {
        name: i18n.t('squaremeter'),
        factor: 1,
        symbol: 'm²'
    },
    {
        name: i18n.t('squarecm'),
        factor: 0.0001,
        symbol: 'cm²'
    },
    {
        name: i18n.t('squarekm'),
        factor: 1000000,
        symbol: 'km²'
    },
    {
        name: i18n.t('squarefoot'),
        factor: 0.092903,
        symbol: 'ft²'
    },
    {
        name: i18n.t('squareyard'),
        factor: 0.836127,
        symbol: 'yd²'
    },
    {
        name: i18n.t('squaremile'),
        factor: 2590002.59,
        symbol: 'mi²'
    },
    {
        name: i18n.t('squareinch'),
        factor: 0.00064516,
        symbol: 'in²'
    },
]

export const DATA_TRANSFER = [
    // the reference for factor is megabyte
    {
        name: i18n.t('bit') + ' ' + i18n.t('perSecond'),
        factor: 0.000000125,
        symbol: 'bit/s'
    },
    {
        name: i18n.t('kilobit') + ' ' + i18n.t('perSecond'),
        factor: 0.000125,
        symbol: 'kbit/s'
    },
    {
        name: i18n.t('kilobyte') + ' ' + i18n.t('perSecond'),
        factor: 0.001,
        symbol: 'kB/s'
    },
    {
        name: i18n.t('megabit') + ' ' + i18n.t('perSecond'),
        factor: 0.125,
        symbol: 'Mbit/s'
    },
    {
        name: i18n.t('megabyte') + ' ' + i18n.t('perSecond'),
        factor: 1,
        symbol: 'MB/s'
    },
    {
        name: i18n.t('gigabit') + ' ' + i18n.t('perSecond'),
        factor: 125,
        symbol: 'Bgit/s'
    },
    {
        name: i18n.t('gigabyte') + ' ' + i18n.t('perSecond'),
        factor: 1000,
        symbol: 'GB/s'
    },
    {
        name: i18n.t('terabit') + ' ' + i18n.t('perSecond'),
        factor: 125000,
        symbol: 'Tbit/s'
    },
    {
        name: i18n.t('terabyte') + ' ' + i18n.t('perSecond'),
        factor: 1000000,
        symbol: 'TB/s'
    }
]

export const STORAGE = [
    // the reference for factor is megabyte
    {
        name: i18n.t('bit'),
        factor: 0.000000125,
        symbol: 'bit'
    },
    {
        name: i18n.t('kilobyte'),
        factor: 0.001,
        symbol: 'kB'
    },
    {
        name: i18n.t('megabyte'),
        factor: 1,
        symbol: 'MB'
    },
    {
        name: i18n.t('gigabyte'),
        factor: 1000,
        symbol: 'GB'
    },
    {
        name: i18n.t('terabyte'),
        factor: 1000000,
        symbol: 'TB'
    },
    {
        name: i18n.t('petabyte'),
        factor: 1000000000,
        symbol: 'PB'
    }
]

export const ENERGY = [
    // the reference for factor is watt hour
    {
        name: i18n.t('joule'),
        factor: 0.000277778,
        symbol: 'K'
    },
    {
        name: i18n.t('kilojoule'),
        factor: 0.277778,
        symbol: 'kJ'
    },
    {
        name: i18n.t('calorie'),
        factor: 0.00116222,
        symbol: ''
    },
    {
        name: i18n.t('kilocalorie'),
        factor: 1.16222,
        symbol: 'cal'
    },
    {
        name: i18n.t('watthour'),
        factor: 1,
        symbol: 'Wh'
    },
    {
        name: i18n.t('kilowatthour'),
        factor: 1000,
        symbol: 'kWh'
    },
    {
        name: i18n.t('britishThermalUnit'),
        factor: 0.293071,
        symbol: 'Btu'
    },
    {
        name: i18n.t('usTherm'),
        factor: 29300.1,
        symbol: 'thm'
    },
    {
        name: i18n.t('footPound'),
        factor: 0.000376616,
        symbol: 'ft⋅lbf'
    },
]

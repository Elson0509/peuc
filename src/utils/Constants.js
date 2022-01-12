import i18n from "./textLanguages"

export const BORDER_COLOR_ITEM_LIST = 'black'
export const BORDER_COLOR_ITEM_LIST_EXPENSIVE = 'red'
export const BORDER_COLOR_ITEM_LIST_CHEAP = 'green'
export const BACKGROUND_COLOR_ITEM_LIST_EXPENSIVE = '#FEE'
export const BACKGROUND_COLOR_ITEM_LIST_CHEAP = '#EFE'

export const WEIGHT_MEASURES = [
    {
        name: i18n.t('kg'),
        factor: 1000
    },
    {
        name: i18n.t('g'),
        factor: 1
    },
    {
        name: i18n.t('mg'),
        factor: 0.001
    },
    {
        name: i18n.t('pound'),
        factor: 453.592
    },
    {
        name: i18n.t('tonne'),
        factor: 1000000
    },
    {
        name: i18n.t('ton'),
        factor: 1016047
    },
    {
        name: i18n.t('uston'),
        factor: 907184.7
    },
    {
        name: i18n.t('ounce'),
        factor: 28.3495
    },
    {
        name: i18n.t('stone'),
        factor: 6350.29
    },
]
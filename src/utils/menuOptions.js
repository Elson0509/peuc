import i18n from "./textLanguages";
import { 
    WEIGHT_MEASURES,
    DISTANCE_MEASURES,
    LIQUID_MEASURES,
    AREA_MEASURES,
    DATA_TRANSFER,
    STORAGE,
    ENERGY,
} from './Constants'

export const menuOptionsPrices = [
    {
        icon: 'boxes',
        title: i18n.t('quantity'),
        screen: 'Quantity',
        background: '#5678AD',
        borderWidth: '#34568B',
        measures: []
    },
    {
        icon: 'balance-scale-right',
        title: i18n.t('weight'),
        screen: 'Weight',
        background: '#99CA5C',
        borderWidth: '#77A03A',
        measures: WEIGHT_MEASURES
    },
    {
        icon: 'arrows-alt-h',
        title: i18n.t('distance'),
        screen: 'Distance',
        background: '#B77473',
        borderWidth: '#955251',
        measures: DISTANCE_MEASURES
    },
    {
        icon: 'wine-bottle',
        title: i18n.t('liquid'),
        screen: 'Liquid',
        background: '#D787C9',
        borderWidth: '#B565A7',
        measures: LIQUID_MEASURES
    },
    {
        icon: 'ruler-combined',
        title: i18n.t('area'),
        screen: 'Area',
        background: '#22BD99',
        borderWidth: '#009B77',
        measures: AREA_MEASURES
    },
]

export const menuOptionsMeasure = [
    {
        icon: 'balance-scale-right',
        title: i18n.t('weight'),
        screen: 'Weight',
        background: '#99CA5C',
        borderWidth: '#77A03A',
        measures: WEIGHT_MEASURES
    },
    {
        icon: 'arrows-alt-h',
        title: i18n.t('distance'),
        screen: 'Distance',
        background: '#B77473',
        borderWidth: '#955251',
        measures: DISTANCE_MEASURES
    },
    {
        icon: 'wine-bottle',
        title: i18n.t('liquid'),
        screen: 'Liquid',
        background: '#D787C9',
        borderWidth: '#B565A7',
        measures: LIQUID_MEASURES
    },
    {
        icon: 'ruler-combined',
        title: i18n.t('area'),
        screen: 'Area',
        background: '#22BD99',
        borderWidth: '#009B77',
        measures: AREA_MEASURES
    },
    {
        icon: 'exchange-alt',
        title: i18n.t('dataTransfer'),
        screen: 'DataTransfer',
        background: '#34568B',
        borderWidth: '#133469',
        measures: DATA_TRANSFER
    },
    {
        icon: 'database',
        title: i18n.t('storage'),
        screen: 'Storage',
        background: '#48D1CC',
        borderWidth: '#26B0AA',
        measures: STORAGE
    },
    {
        icon: 'lightbulb',
        title: i18n.t('energy'),
        screen: 'Energy',
        background: '#B7BB49',
        borderWidth: '#959927',
        measures: ENERGY
    },
]
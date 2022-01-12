import i18n from "./textLanguages";
import { 
    WEIGHT_MEASURES,
    DISTANCE_MEASURES,
    LIQUID_MEASURES,
    AREA_MEASURES,
} from './Constants'

const menuOptions = [
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

export default menuOptions
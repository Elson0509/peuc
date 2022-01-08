import i18n from "./textLanguages";

const menuOptions = [
    {
        icon: 'boxes',
        title: i18n.t('quantity'),
        screen: 'Quantity',
        background: '#5678AD',
        borderWidth: '#34568B',
    },
    {
        icon: 'balance-scale-right',
        title: i18n.t('weight'),
        screen: 'Weight',
        background: '#99CA5C',
        borderWidth: '#77A03A',
    },
    {
        icon: 'arrows-alt-h',
        title: i18n.t('distance'),
        screen: 'Distance',
        background: '#B77473',
        borderWidth: '#955251',
    },
    {
        icon: 'wine-bottle',
        title: i18n.t('liquid'),
        screen: 'Liquid',
        background: '#D787C9',
        borderWidth: '#B565A7',
    },
    {
        icon: 'ruler-combined',
        title: i18n.t('area'),
        screen: 'Area',
        background: '#22BD99',
        borderWidth: '#009B77',
    },
]

export default menuOptions
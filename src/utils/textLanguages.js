import i18n from "i18n-js";
import * as Localization from 'expo-localization'

i18n.translations = {
    en: { 
        quantity: 'Quantity', 
        weight: 'Weight',  
        distance: 'Distance',
        liquid: 'Liquid',
        area: 'Area',
        pound: 'Pounds',
        ounce: 'Oz',
        ton: 'Tons',
        foot: 'Feet',
        yard: 'Yards',
        inch: 'Inches',
        mile: 'Miles',
        ounce: 'Ounces',
        pint: 'Pints',
        gallon: 'Gallons',
        squarefeet: 'Square Foot',
        acre: 'Acres',
        home: 'Home',
        typeOfProduct: 'Type of product'
    },
    pt: { 
        quantity: 'Quantidade', 
        weight: 'Peso',  
        distance: 'Distância',
        liquid: 'Líquido',
        area: 'Área',
        pound: 'Libras',
        ounce: 'Onças',
        ton: 'Toneladas',
        foot: 'Pés',
        yard: 'Jardas',
        inch: 'Polegadas',
        mile: 'Milhas',
        ounce: 'Onças',
        pint: 'Pints',
        gallon: 'Galões',
        squarefeet: 'Pé quadrado',
        acre: 'Acres',
        home: 'Início',
        typeOfProduct: 'Tipo de produto'
    },
    pt: { 
        quantity: 'Cantidade', 
        weight: 'Peso',  
        distance: 'Distancia',
        liquid: 'Líquido',
        area: 'Área',
        pound: 'Libras',
        ounce: 'Oz',
        ton: 'Toneladas',
        foot: 'Pies',
        yard: 'Yardas',
        inch: 'Pulgadas',
        mile: 'Millas',
        ounce: 'Onças',
        pint: 'Pints',
        gallon: 'Galón',
        squarefeet: 'Pie cuadrado',
        acre: 'Acres',
        home: 'Comienzo',
        typeOfProduct: 'Tipo de producto'
    },
}

i18n.locale = Localization.locale
i18n.fallbacks = true

export default i18n
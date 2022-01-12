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
        ton: 'Tons',
        tonne: 'Tonnes',
        foot: 'Feet',
        yard: 'Yards',
        inch: 'Inches',
        mile: 'Miles',
        ounce: 'Ounces (oz)',
        pint: 'Pints',
        gallon: 'Gallons',
        squarefeet: 'Square Foot',
        acre: 'Acres',
        home: 'Home',
        typeOfProduct: 'Type of product',
        product: 'Product',
        price: 'Price',
        confirm: 'Confirm',
        cancel: 'Cancel',
        update: 'Update',
        remove: 'Remove',
        measure: 'Measure',
        kg: 'Kilograms',
        g: 'Grams',
        mg: 'Miligrams',
    },
    pt: { 
        quantity: 'Quantidade', 
        weight: 'Peso',  
        distance: 'Distância',
        liquid: 'Líquido',
        area: 'Área',
        pound: 'Libras',
        ounce: 'Onças (oz)',
        ton: 'Imp. Ton',
        tonne: 'Toneladas',
        foot: 'Pés',
        yard: 'Jardas',
        inch: 'Polegadas',
        mile: 'Milhas',
        pint: 'Pints',
        gallon: 'Galões',
        squarefeet: 'Pé quadrado',
        acre: 'Acres',
        home: 'Início',
        typeOfProduct: 'Tipo de produto',
        product: 'Produto',
        price: 'Preço',
        confirm: 'Confirmar',
        cancel: 'Cancelar',
        update: 'Atualizar',
        remove: 'Remover',
        measure: 'Medida',
        kg: 'Kilogramas',
        g: 'Gramas',
        mg: 'Miligramas',
    },
    es: { 
        quantity: 'Cantidade', 
        weight: 'Peso',  
        distance: 'Distancia',
        liquid: 'Líquido',
        area: 'Área',
        pound: 'Libras',
        ounce: 'Onças (Oz)',
        ton: 'Imp. Ton',
        tonne: 'Toneladas',
        foot: 'Pies',
        yard: 'Yardas',
        inch: 'Pulgadas',
        mile: 'Millas',
        pint: 'Pints',
        gallon: 'Galón',
        squarefeet: 'Pie cuadrado',
        acre: 'Acres',
        home: 'Comienzo',
        typeOfProduct: 'Tipo de producto',
        product: 'Producto',
        price: 'Precio',
        confirm: 'Confirmar',
        cancel: 'Cancelar',
        update: 'Actualizar',
        remove: 'Eliminar',
        measure: 'Medida',
        kg: 'Kilogramos',
        g: 'Gramos',
        mg: 'Miligramos',
    },
}

i18n.locale = Localization.locale
i18n.fallbacks = true

export default i18n
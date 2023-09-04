function searchAddresses(searchTerms, addressesToSearch) {
    searchTerms.forEach(term => {
        addressesToSearch.forEach(address => {
            const url = address.replace('{term}', term);
            window.open(url, '_blank');
        });
    });
}

const addressesToSearch = [
    "https://web.cornershopapp.com/store/7150/search/{term}", // super adega
    // "https://web.cornershopapp.com/store/3101/search/{term}", // atacadao
    // "https://web.cornershopapp.com/store/8616/search/{term}", // atacadao dia dia
    // "https://web.cornershopapp.com/store/11239/search/{term}", // assai
];

const searchTerms = [
    // "Azeite ",
    // "Óleo",
    // "Açúcar cristal",
    // "Sal rosa ",
    // "Tomate pelado",
    // "Arroz ",
    // "Saco plástico",
    // "Macarrão",
    // "Manteiga paracatu",
    // "Filtro coar café 103",
    // "Papel alumínio",
    // "Papel filme",
    // "Sabão líquido COQUEL",
    // "Shampoo",
    // "Condicionador",
    // "Creme dental",
    // "Sabonete Johnson",
    // "Desodorante dove",
    // "Caldo carne e frango ",
    // "Queijo mussarela",
    // "Páprica picante",
    // "Aveia     ",
    // "Saco de lixo pequeno(1)",
    // "Pato limpeza profunda ",
    // "Detergente",
    "Desinfetante(1)",
    "Veja Gold multe uso ",
    "Vanish Barra",
    "Sapólio ",
    "Amaciante fofo",
    "Flanela",
];

searchAddresses(searchTerms, addressesToSearch);
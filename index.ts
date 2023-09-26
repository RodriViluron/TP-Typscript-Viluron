type Rating = {
    count: number;
    rate: number;
};

type Product = {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
};

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((products: Product[]) => {
        //prepare table HTML
        let tableHTML: string = '<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th></tr></thead><tbody>';
        //loop thru all products to generate the table rows
        products.forEach((p: Product) => {
            tableHTML += `<tr><td>${p.id}</td><td>${p.title}</td><td>${p.description}</td><td> ${p.price}</td></tr>`;
        });
        //close table body
        tableHTML += '</tbody>';
        //grab table element to set its inner HTML
        document.querySelector('#tableElement')!.innerHTML = tableHTML;
        //hide spinner 
        const spinnerElement: HTMLElement = document.querySelector('#spinnerContainer')!;
        spinnerElement.style.display = 'none';
    });
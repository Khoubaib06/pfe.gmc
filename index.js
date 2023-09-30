//-------------------------------------------------------------------
let product = [{
    id:1,
    title:'Nike AF1',
    img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3f7ee856-f184-497a-9d4a-96e7c7380dab/air-force-1-07-mens-shoes-rXkGJX.png",
    price:100

},
{
    id:2,
    title:'Nike Blazer',
    img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/de53aa36-9cec-421f-8978-4ada55821881/blazer-mid-77-vintage-mens-shoes-nw30B2.png",
    price:99
},
{
    id:3,
    title:'Jordan',
    img:"https://www.kickscrew.com/cdn/shop/products/main-square_8e8d044f-5635-4b05-b60a-30c996be2922_1200x.jpg?v=1695300055",
    price:130
}]
//-------------------------------------------------------------------
const renderproduct = () =>{
    return document.getElementById('products').innerHTML = product.map((el)=>(
        `
        <div calss="card" key="${el.id}">
        <img src="${el.img}" alt="">
        <h4>${el.title}</h4>
        <span>$${el.price}</span>
        <br>
        <button > Add to Cart</button>
        </div>
        `   
    )).join('')
}
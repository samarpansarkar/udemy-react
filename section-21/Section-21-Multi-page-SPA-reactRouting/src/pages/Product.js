import { Link } from 'react-router-dom'

const PRODUCTS = [
    { id: 'p1', title: 'Product1' },
    { id: 'p2', title: 'Product2' },
    { id: 'p3', title: 'Product3' },
]

const Product = () => {
    return (
        <div>
            <h1>Product Page</h1>
            <p>go to <Link to='/'> my Home page</Link></p>
            <hr />
            <ul>
                {PRODUCTS.map(product => <li key={product.id}><p><Link to={`/products/${product.id}`}>{product.title}</Link></p></li>)}
            </ul>
        </div>
    )
}

export default Product

import { Link, useParams } from "react-router-dom"

const ProductDetail = () => {

    const params = useParams();

    return (
        <div>
            <h1>Product Details!</h1>
            <p>{params.productId}</p>
            <p><Link to='..' relative="path">back</Link></p>
        </div>
    )
}

export default ProductDetail

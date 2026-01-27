import { useState } from 'react';
import MainHome from '../components/MainHome';
import ProductDetail from '../components/ProductDetail';


const Accueil = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <>

            <MainHome onSelectProduct={setSelectedProduct} />
            <ProductDetail
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </>
    )
}

export default Accueil
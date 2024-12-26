'use client';

import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'; // Импорт анимации загрузки
import ClassicButtonLink from "@/components/ClassicButtonLink";

const products = [
    {
        id: 1,
        name: 'RoseDe',
        link: 'https://github.com/TheCoree/RoseDe/archive/refs/heads/master.zip',
        description: 'RoseDe is a powerful tool for OSINT (Open-Source Intelligence), developed using Python and the pystyle library to create a beautiful user interface. The current version of the program supports features for phone number verification, IP checking, and AHC decryption.',
        price: 'Free',
        image: 'https://github.com/TheCoree/RoseDe/raw/master/assets/image.png'
    },
    {
        id: 2,
        name: 'Product 2',
        link: 'https://example.com/product2',
        description: 'Description for Product 2',
        price: '$20',
        image: 'https://github.com/TheCoree/RoseDe/raw/master/assets/image.png'
    },
    {
        id: 3,
        name: 'Product 3',
        link: 'https://example.com/product3',
        description: 'Description for Product 3',
        price: '$30',
        image: 'https://github.com/TheCoree/RoseDe/raw/master/assets/image.png'
    },
    {
        id: 4,
        name: 'Product 4',
        link: 'https://example.com/product4',
        description: 'Description for Product 4',
        price: '$40',
        image: 'https://github.com/TheCoree/RoseDe/raw/master/assets/image.png'
    },
    {
        id: 5,
        name: 'Product 4',
        link: 'https://example.com/product4',
        description: 'Description for Product 4',
        price: '$40',
        image: 'https://github.com/TheCoree/RoseDe/raw/master/assets/image.png'
    },{
        id: 6,
        name: 'Product 4',
        link: 'https://example.com/product4',
        description: 'Description for Product 4',
        price: '$40',
        image: 'https://gadlHADSad.com'
    },

];

const Products = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="container mx-auto px-4 py-10" ref={ref}>
            <h2 className="text-2xl font-bold text-center mb-6 font-orbitron">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} isInView={isInView} />
                ))}
            </div>
        </div>
    );
};

const ProductCard: React.FC<{ product: any; isInView: boolean }> = ({ product, isInView }) => {
    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        setLoading(false);
    };

    return (
        <motion.div
            className="flex flex-col p-4 rounded-lg border dark:border-gray-700 h-full"
            initial={{opacity: 0, y: 500}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, ease: 'anticipate'}}
        >
            <div className="relative w-full h-48 mb-4">
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <AiOutlineLoading3Quarters className="text-blue-500 text-4xl animate-spin" />
                    </div>
                )}
                <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover rounded-md transition-opacity duration-300 ${
                        loading ? 'opacity-0' : 'opacity-100'
                    }`}
                    onLoad={handleImageLoad}
                />
            </div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 flex-grow">{product.description}</p>
            <p className="text-xl font-bold mt-2">{product.price}</p>
            <div className="mt-5">
                {product.price === 'Free' ? (
                    <ClassicButtonLink link={product.link}>Get</ClassicButtonLink>
                ) : (
                    <ClassicButtonLink link={product.link}>Add to Cart</ClassicButtonLink>
                )}
            </div>
        </motion.div>
    );
};

export default Products;

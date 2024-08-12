'use client';

import React, { useState } from 'react';
import Header from '@/app/components/Header/index';
import Footer from '@/app/components/Footer/index';
import ProductList from '@/app/components/ProductList/ProductList';

const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([]);

    const handleItemSelect = (category) => {
        setSelectedCategory(category);

        // Example data for women's products
        const womenProducts = [
            {
                name: "Saree 1",
                price: "$100",
                description: "Beautiful silk saree with intricate designs.",
                image: "/images/Saree 1.jpeg"
            },
            {
                name: "Saree 2",
                price: "$120",
                description: "Elegant cotton saree perfect for daily wear.",
                image: "/images/Saree 2.jpeg"
            },
            {
                name: "Kurta 1",
                price: "$50",
                description: "Comfortable cotton kurta with embroidery.",
                image: "/images/Kurta 1.jpeg"
            },
            {
                name: "Kurta 2",
                price: "$60",
                description: "Stylish kurta with modern prints.",
                image: "/images/Kurta 2.jpeg"
            },
            {
                name: "Top 1",
                price: "$30",
                description: "Casual top with floral prints.",
                image: "/images/Top 1.jpeg"
            },
            {
                name: "Top 2",
                price: "$35",
                description: "Elegant top with lace details.",
                image: "/images/Top 2.jpeg"
            },
            {
                name: "Dress 1",
                price: "$80",
                description: "Evening dress with sequins.",
                image: "/images/Dress 1.jpeg"
            },
            {
                name: "Dress 2",
                price: "$90",
                description: "Casual dress for daily wear.",
                image: "/images/Dress 2.jpeg"
            },
            {
                name: "Lehenga 1",
                price: "$150",
                description: "Designer lehenga with heavy embroidery.",
                image: "/images/Lehenga 1.jpeg"
            },
            {
                name: "Lehenga 2",
                price: "$170",
                description: "Traditional lehenga with modern touch.",
                image: "/images/Lehenga 2.jpeg"
            },
            {
                name: "Jacket 1",
                price: "$60",
                description: "Warm jacket for winter.",
                image: "/images/Jacket 1.jpeg"
            },
            {
                name: "Jacket 2",
                price: "$70",
                description: "Stylish jacket with faux fur.",
                image: "/images/Jacket 2.jpeg"
            },
            {
                name: "Skirt 1",
                price: "$40",
                description: "A-line skirt with polka dots.",
                image: "/images/Skirt 1.jpeg"
            },
            {
                name: "Skirt 2",
                price: "$45",
                description: "Pleated skirt in solid color.",
                image: "/images/Skirt 2.jpeg"
            },
            {
                name: "Jeans 1",
                price: "$50",
                description: "Skinny jeans with stretch fabric.",
                image: "/images/Jeans 1.jpeg"
            },
            {
                name: "Jeans 2",
                price: "$55",
                description: "High-waist jeans with distressed details.",
                image: "/images/Jeans 2.jpeg"
            },
            {
                name: "Blouse 1",
                price: "$35",
                description: "Formal blouse with ruffles.",
                image: "/images/Blouse1.jpeg"
            },
            {
                name: "Blouse 2",
                price: "$40",
                description: "Chiffon blouse with bow tie.",
                image: "/images/Blouse2.jpeg"
            },
            {
                name: "Tunic 1",
                price: "$45",
                description: "Tunic with floral embroidery.",
                image: "/images/Tunic 1.jpeg"
            },
            {
                name: "Tunic 2",
                price: "$50",
                description: "Casual tunic with pockets.",
                image: "/images/Tunic 2.jpeg"
            }
        ];

        // Update products based on selected category
        setProducts(womenProducts);
    };

    const name = "rsk";
    const foot = "new part";
    const last = "Footer part";

    return (
        <div>
            <Header myName={name} onItemSelect={handleItemSelect} />
            <main>
                {selectedCategory && <ProductList products={products} />}
            </main>
            <div style={{ backgroundColor: "red", marginTop: "90px" }}>
                <Footer sherin={foot} rishana={last} />
            </div>
        </div>
    );
};

export default HomePage;

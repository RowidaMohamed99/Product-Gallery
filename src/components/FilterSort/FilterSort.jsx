import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';

export default function FilterSort({ products, onFiltered }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortType, setSortType] = useState('');

    useEffect(() => {
    let result = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortType === 'price-asc') {
        result.sort((a, b) => a.price - b.price);
    } else if (sortType === 'price-desc') {
        result.sort((a, b) => b.price - a.price);
    } else if (sortType === 'name-asc') {
        result.sort((a, b) => a.title.localeCompare(b.title));
    }

    onFiltered(result);
}, [products, searchTerm, sortType, onFiltered]);

return <>
    <div className="p-6 mt-20">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
        <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            id="search"
            className="px-4 py-2 border-2 border-pink-400  focus:outline-none rounded "
        />

        <select
            value={sortType}
            onChange={e => setSortType(e.target.value)}
            className="px-4 py-2 border-2 border-pink-400 focus:outline-none rounded">
            <option value="">Sort by</option>
            <option value="price-asc">Price (low - high)</option>
            <option value="price-desc">Price (high - low)</option>
            <option value="name-asc">Name (A - Z)</option>
        </select>
    </div>
    </div>
</>;
}

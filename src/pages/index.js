import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [allcategory, setAllCategory] = useState([]);
  const [allPrice, setAllPrice] = useState([]);
  const [allRating, setAllRating] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const categories = [
      ...new Set(products.map((p) => p.category).filter(Boolean)),
    ];
    const price = [...new Set(products.map((p) => p.price).filter(Boolean))];
    const rating = [...new Set(products.map((p) => p.rating).filter(Boolean))];
    setAllCategory(categories);
    setAllPrice(price);
    setAllRating(rating);
  }, [products]);
  console.log("products",products);
  // console.log("Allcategory",allcategory);
  // console.log("AllPrice",allPrice);
  // console.log("AllRating",allRating);

  const filtered = products
    .filter(
      (p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) &&
        (selectedCategory ? p.category === selectedCategory : true)
    )
    .sort((a, b) => {
      if (sortBy === "price-low-high") return a.price - b.price;
      if (sortBy === "rating-high-low") return b.rating - a.rating;
      return 0;
    });

  // pagination
  const totalPages = Math.ceil(filtered.length / postsPerPage);
  const startIdx = (currentPage - 1) * postsPerPage;
  const currentPosts = filtered.slice(startIdx, startIdx + postsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, query, sortBy]);

  function ProductSkeleton() {
    return (
      <div className="bg-gray-100 p-4 rounded-md shadow-md border border-gray-200 animate-pulse mt-5">
        <div className="h-44 w-full bg-gray-300 mb-4 rounded"></div>
        <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
        <div className="h-5 bg-gray-300 rounded mb-2 w-1/2"></div>
        <div className="h-10 bg-gray-300 rounded w-full"></div>
      </div>
    );
  }

  return (
    <>
      <Header setQuery={setQuery} />
      <div className="md:px-10 py-10 px-5">
        <input
          className="border p-2 w-full rounded-md"
          placeholder="Search by product title..."
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* Category Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-5 gap-3 mt-5">
          <select
            className="border p-2 rounded-md capitalize"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {allcategory.map((cat, index) => (
              <option key={index} value={cat} className="capitalize">
                {cat}
              </option>
            ))}
          </select>

          {/* Sort By Filter */}
          <select
            className="border p-2 rounded-md"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort By Price</option>
            <option value="price-low-high">Price : Low to High</option>
            <option value="rating-high-low">Rating : High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 md:gap-10 gap-5 mt-5">
          {loading
            ? Array.from({ length: 12 }).map((_, index) => (
                <ProductSkeleton key={index} />
              ))
            : currentPosts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
        {/* Pagination */}
        <div className="flex md:justify-end justify-center items-center space-x-2 mt-10 mb-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="cursor-pointer px-3 py-1.5 text-xs font-medium bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Prev...
          </button>
          {(() => {
            const maxVisible = 4;
            const half = Math.floor(maxVisible / 2);
            let start = Math.max(1, currentPage - half);
            let end = Math.min(totalPages, start + maxVisible - 1);
            // Adjust start if near the end
            if (end - start < maxVisible - 1) {
              start = Math.max(1, end - maxVisible + 1);
            }
            return [...Array(end - start + 1)].map((_, i) => {
              const pageNum = start + i;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-2 py-1 text-xs rounded border font-medium cursor-pointer ${
                    currentPage === pageNum
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {pageNum}
                </button>
              );
            });
          })()}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="cursor-pointer px-3 py-1.5 text-xs font-medium bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next...
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

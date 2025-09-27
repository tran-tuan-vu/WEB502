import React, { useEffect, useState } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const List: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 8;
  //Lấy giá trị search từ Layout
  const { search } = useOutletContext<{ search: string }>();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log("Lỗi API: ", err));
  }, []);
  //Filter theo search trước khi phân trang
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  //Tính toán dữ liệu theo trang
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  //Tổng số trang
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center fw-bold">Danh sách sản phẩm</h2>
      <div className="row">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => ( // Hiển thị sản phẩm theo currentProducts
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top p-3"
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text text-truncate">{product.description}</p>
                  <div className="mt-auto d-flex justify-content-between">
                    <button className="btn btn-primary">Mua ngay</button>
                    <button className="btn btn-outline-success">Add cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))) : (
          <p className="text-center">Không tìm thấy sản phẩm nào</p>
        )}
      </div>

      {totalPages > 1 && (
        <nav>
          <ul className="pagination justify-content-center">
            {Array.from({ length: totalPages }, (_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(i + 1)} //Chuyển trang khi click
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>)}
    </div>
  );
};

export default List;
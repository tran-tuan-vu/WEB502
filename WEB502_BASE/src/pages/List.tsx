import { useEffect, useState } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

function List() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const productsPerPage = 8;
  //Lấy giá trị search từ Layout
  const { search } = useOutletContext<{ search: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/products?title_like=${search}&_page=${currentPage}&_limit=${productsPerPage}`
        );

        setProducts(res.data);

        // Lấy tổng số sản phẩm từ header để tính tổng trang
        const totalCount = parseInt(res.headers["x-total-count"] || "0");
        setTotalPages(Math.ceil(totalCount / productsPerPage));
      } catch (err) {
        console.log("Lỗi khi lấy dữ liệu từ local: ", err);
      }
    };
    fetchData();
  }, [search, currentPage]); // Khi đổi trang thì gọi lại API
  //Filter theo search trước khi phân trang
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center fw-bold">Danh sách sản phẩm</h2>
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => ( // Hiển thị sản phẩm theo currentProducts
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <Link
                  to={`/products/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}>
                  <img
                    src={
                      product.image.startsWith("http")
                        ? product.image
                        : `http://localhost:4000${product.image.startsWith("/images") ? product.image : `/images/${product.image}`}`
                    }
                    alt={product.title}
                    className="card-img-top p-3"
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text text-truncate">{product.description}</p>
                  </div>
                </Link>
                <div className="mt-auto d-flex justify-content-between">
                  <button className="btn btn-primary">Mua ngay</button>
                  <button className="btn btn-outline-success">Add cart</button>
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
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div >
  );
};

export default List;
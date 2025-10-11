import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
}
function List() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("http://localhost:3000/products");
      setProducts(res.data);
    };
    getProducts();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      if (window.confirm("Muon xoa hay ko")) {
        await axios.delete("http://localhost:3000/products/" + id);
        setProducts((productsPrev) => {
          return productsPrev.filter((item) => item.id !== id);
        });
        toast.success("Xoa thanh cong");
      }
    } catch (error) {
      toast.error(`Error: ${(error as AxiosError)?.message}`);
    }
  };
  return (
    <div>
      <h1>Danh sách</h1>
      <table className="table table-hover table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>
                  <img src={item.image} width={100} />
                </td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default List;
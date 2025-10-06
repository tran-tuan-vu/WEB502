import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface IProduct {
  title: string;
  price: number;
  description: string;
  image: string;
}

function Add() {
  const [formData, setFormData] = useState<IProduct>({
    title: "",
    price: 0,
    description: "",
    image: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Xử lý nhập dữ liệu text
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === "price" ? Number(value) : value });
  };

  // Xử lý chọn file ảnh
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  // Xử lý submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      let imageUrl = "";

      // Nếu có upload file thì gửi lên server upload
      if (file) {
        const uploadData = new FormData();
        uploadData.append("image", file);

        const uploadRes = await axios.post("http://localhost:4000/upload", uploadData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        imageUrl = uploadRes.data.imageUrl; // => "/images/xxxx.jpg"
      }

      // Tạo dữ liệu sản phẩm
      const newProduct = {
        ...formData,
        image: imageUrl || "/images/default.jpg",
      };

      // Gửi lên json-server
      await axios.post("http://localhost:3000/products", newProduct);

      alert("Thêm sản phẩm thành công!");
      navigate("/products");
    } catch (error) {
      console.error("❌ Lỗi khi thêm sản phẩm:", error);
      alert("Thêm sản phẩm thất bại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center fw-bold">Thêm sản phẩm mới</h2>
      <form onSubmit={handleSubmit} className="col-md-6 mx-auto">
        <div className="mb-3">
          <label className="form-label fw-bold">Tên sản phẩm</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Giá</label>
          <input
            type="string"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Mô tả</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            rows={3}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Ảnh sản phẩm</label>
          <input type="file" accept="image/*" onChange={handleFileChange} className="form-control" />
          {file && (
            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              className="mt-3 border rounded"
              style={{ width: "100%", maxHeight: "300px", objectFit: "contain" }}
            />
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? "Đang thêm..." : "Thêm sản phẩm"}
        </button>
      </form>
    </div>
  );
}

export default Add;
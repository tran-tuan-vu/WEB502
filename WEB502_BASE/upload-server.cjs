// ✅ Dùng CommonJS để tránh lỗi "require is not defined"
const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();

// Cho phép frontend (Vite) gọi API này
app.use(cors());

// Tạo folder public/images để lưu ảnh
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Cấu hình nơi lưu file và cách đặt tên file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "public/images"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

// API upload ảnh (POST /upload)
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Không có file nào được upload!" });
  }

  // Trả về đường dẫn ảnh để lưu vào db.json
  const filePath = `/images/${req.file.filename}`;
  res.json({
    message: "Upload thành công!",
    imageUrl: `http://localhost:4000${filePath}`,
  });
});

// Chạy server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`✅ Upload server running at http://localhost:${PORT}`);
});
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products = [
    { id: 1, name: "Điện thoại X", price: 7990000, category: "Điện tử" },
    { id: 2, name: "Laptop Y", price: 17990000, category: "Điện tử" },
    { id: 3, name: "Gạo Hương Lài 5kg", price: 220000, category: "Thực phẩm" },
    { id: 4, name: "Sữa tươi 1L", price: 45000, category: "Thực phẩm" },
    { id: 5, name: "Tai nghe Z", price: 250000, category: "Phụ kiện" }
];
function filterByCategory(list, category) {
    return list.filter(p => p.category === category);
}
function calculateTotalPrice(list) {
    return list.reduce((sum, p) => sum + p.price, 0);
}
function findMinMax(list) {
    if (list.length === 0) {
        return { min: null, max: null };
    }
    let min = list[0];
    let max = list[0];
    for (const p of list) {
        if (p.price < min.price)
            min = p;
        if (p.price > max.price)
            max = p;
    }
    return { min, max };
}
console.log("================ Lọc sản phẩm theo danh mục 'Điện tử' ==================");
console.log("Danh sách sản phẩm:", products);
console.log("Danh sách sản phẩm lọc theo danh mục:", filterByCategory(products, "Điện tử"));
console.log("Tổng giá sản phẩm:", calculateTotalPrice(products));
const { min, max } = findMinMax(products);
console.log("Sản phẩm có giá thấp nhất:", min);
console.log("Sản phẩm có giá cao nhất:", max);
console.log("=======================================================================");
var FuelType;
(function (FuelType) {
    FuelType["Xang"] = "X\u0103ng";
    FuelType["Dien"] = "\u0110i\u1EC7n";
})(FuelType || (FuelType = {}));
function calculateTravelTime(vehicle, distance) {
    if (vehicle.speed <= 0) {
        throw new Error("Vận tốc phải lớn hơn 0");
    }
    return distance / vehicle.speed;
}
const motorizedVehicles = [
    { name: "Honda Wave", type: "Xe máy", speed: 40, fuelType: FuelType.Xang },
    { name: "VinFast VF e34", type: "Ô tô", speed: 60, fuelType: FuelType.Dien },
    { name: "Toyota Vios", type: "Ô tô", speed: 80, fuelType: FuelType.Xang },
    { name: "VinFast Klara", type: "Xe máy điện", speed: 35, fuelType: FuelType.Dien },
];
const distance = 100;
console.log(`Tính thời gian di chuyển cho quãng đường ${distance} km:\n`);
motorizedVehicles.forEach(v => {
    const time = calculateTravelTime(v, distance);
    console.log(`${v.name} (${v.type}, nhiên liệu: ${v.fuelType}) -> ${time.toFixed(2)} giờ`);
});
//# sourceMappingURL=baiTap4.js.map
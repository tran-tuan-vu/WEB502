var products = [
    { id: 1, name: "Điện thoại X", price: 7990000, category: "Điện tử" },
    { id: 2, name: "Laptop Y", price: 17990000, category: "Điện tử" },
    { id: 3, name: "Gạo Hương Lài 5kg", price: 220000, category: "Thực phẩm" },
    { id: 4, name: "Sữa tươi 1L", price: 45000, category: "Thực phẩm" },
    { id: 5, name: "Tai nghe Z", price: 250000, category: "Phụ kiện" }
];
function filterByCategory(list, category) {
    return list.filter(function (p) { return p.category === category; });
}
function calculateTotalPrice(list) {
    return list.reduce(function (sum, p) { return sum + p.price; }, 0);
}
function findMinMax(list) {
    if (list.length === 0) {
        return { min: null, max: null };
    }
    var min = list[0];
    var max = list[0];
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var p = list_1[_i];
        if (p.price < min.price)
            min = p;
        if (p.price > max.price)
            max = p;
    }
    return { min: min, max: max };
}
console.log("================ Lọc sản phẩm theo danh mục 'Điện tử' ==================");
console.log("Danh sách sản phẩm:", products);
console.log("Danh sách sản phẩm lọc theo danh mục:", filterByCategory(products, "Điện tử"));
console.log("Tổng giá sản phẩm:", calculateTotalPrice(products));
var _a = findMinMax(products), min = _a.min, max = _a.max;
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
var motorizedVehicles = [
    { name: "Honda Wave", type: "Xe máy", speed: 40, fuelType: FuelType.Xang },
    { name: "VinFast VF e34", type: "Ô tô", speed: 60, fuelType: FuelType.Dien },
    { name: "Toyota Vios", type: "Ô tô", speed: 80, fuelType: FuelType.Xang },
    { name: "VinFast Klara", type: "Xe máy điện", speed: 35, fuelType: FuelType.Dien },
];
var distance = 100;
console.log("T\u00EDnh th\u1EDDi gian di chuy\u1EC3n cho qu\u00E3ng \u0111\u01B0\u1EDDng ".concat(distance, " km:\n"));
motorizedVehicles.forEach(function (v) {
    var time = calculateTravelTime(v, distance);
    console.log("".concat(v.name, " (").concat(v.type, ", nhi\u00EAn li\u1EC7u: ").concat(v.fuelType, ") -> ").concat(time.toFixed(2), " gi\u1EDD"));
});

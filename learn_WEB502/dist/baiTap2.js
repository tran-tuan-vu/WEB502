"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Hàm tính tổng nhiều số
function tinhTong(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
// 2. Hàm trả về số lượng xuất hiện của 1 kí tự trong chuỗi
function traVe(str, char) {
    if (char.length !== 1) {
        throw new Error("Vui lòng nhập đúng 1 kí tự");
    }
    return str.toLowerCase().split("").filter(c => c === char.toLowerCase()).length;
}
//3. Hàm trả về boolean kiểm tra 1 số có phải số nguyên tố
function isPrime(num) {
    if (num <= 1)
        return false;
    if (num === 2)
        return true;
    if (num % 2 === 0)
        return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0)
            return false;
    }
    return true;
}
// ==================Chạy hàm==================== //
console.log("Tổng là:", tinhTong(16, 12, 17, 18, 22, 37));
console.log("Số lần xuất hiện của kí tự: ", traVe("Tran Tuan Vu learn IT in FPT Polytechnic", "t"));
console.log("(2) là số Nguyên tố: ", isPrime(2));
console.log("(15) là số Nguyên tố: ", isPrime(15));
console.log("(17 )là số Nguyên tố: ", isPrime(17));
//# sourceMappingURL=baiTap2.js.map
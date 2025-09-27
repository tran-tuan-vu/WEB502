//  1. Intersection Types (Kiểu Giao nhau)
var e1 = {
    name: "NV1",
    age: 20,
    role: "user",
};
var staff1 = {
    name: "staff1",
    age: 20,
};
var m1 = {
    name: "M1",
    age: 30,
    role: "manager",
    dept: "HR",
};
// interface ApiResponseProduct {
//   message: string;
//   code: number;
//   success: boolean;
//   data: IProduct;
// }
// interface ApiResponseCategory {
//   message: string;
//   code: number;
//   success: boolean;
//   data: ICategory;
// }
var productRes = {
    message: "Ok",
    code: 200,
    success: true,
    data: {
        title: "San pham 1",
    },
};
var categoryRes = {
    message: "Ok",
    code: 200,
    success: true,
    data: {
        name: "Danh muc 1",
    },
};
// Enum  TypeScript
var Status;
(function (Status) {
    Status[Status["Suceess"] = 0] = "Suceess";
    Status[Status["Error"] = 1] = "Error";
    Status[Status["Loading"] = 2] = "Loading";
})(Status || (Status = {}));
console.log(Status.Suceess);
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDIND"] = "PENDIND";
    OrderStatus["CONFIRMED"] = "CONFIRMED";
    OrderStatus["SHIPPING"] = "SHIPPING";
})(OrderStatus || (OrderStatus = {}));
var orderStatus = "SHIPPING";
if (orderStatus == OrderStatus.CONFIRMED) {
    console.log(OrderStatus.SHIPPING);
}
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["SUCCESS"] = "SUCCESS";
    PaymentStatus["FAILED"] = "FAILED";
})(PaymentStatus || (PaymentStatus = {}));
console.log(PaymentStatus.SUCCESS);

//  1. Intersection Types (Kiểu Giao nhau)

interface IPerson {
  name: string;
  age: number;
}

interface IUser {
  role: string;
}

// IPerson + IUser: &
// C1: type
type IEmployee = IPerson & IUser;

const e1: IEmployee = {
  name: "NV1",
  age: 20,
  role: "user",
};
// C2: extends
interface IEmployee2 extends IPerson, IUser {}

// 2.  Discriminated Unions (Liên minh Phân biệt)

type IStaff = IPerson | IUser;

const staff1: IStaff = {
  name: "staff1",
  age: 20,
};

// 3 Extends: interface
interface IManager extends IPerson {
  role: string;
  dept: string;
}

const m1: IManager = {
  name: "M1",
  age: 30,
  role: "manager",
  dept: "HR",
};

// Generics Typescript
// function printArray<T>(array: T[]): T[] {
//   console.log(array);
//   return array;
// }
// const numberArray: number[] = [1, 2, 3];
// printArray(numberArray); // [1, 2, 3]

interface IProduct {
  title: string;
}
interface ICategory {
  name: string;
}

interface ApiResponse<T> {
  message: string;
  code: number;
  success: boolean;
  data: T;
}

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

const productRes: ApiResponse<IProduct> = {
  message: "Ok",
  code: 200,
  success: true,
  data: {
    title: "San pham 1",
  },
};

const categoryRes: ApiResponse<ICategory> = {
  message: "Ok",
  code: 200,
  success: true,
  data: {
    name: "Danh muc 1",
  },
};

// Enum  TypeScript
enum Status {
  Suceess, // 0
  Error, // 1
  Loading, // 2
}

console.log(Status.Suceess);

enum OrderStatus {
  PENDIND = "PENDIND",
  CONFIRMED = "CONFIRMED",
  SHIPPING = "SHIPPING",
}

const orderStatus: OrderStatus = "SHIPPING" as OrderStatus;
if (orderStatus == OrderStatus.CONFIRMED) {
  console.log(OrderStatus.SHIPPING);
}

enum PaymentStatus {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}

console.log(PaymentStatus.SUCCESS);
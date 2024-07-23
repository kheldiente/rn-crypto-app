// --------------------------------------------
// Indexable Types
type Data = {
    [key: string]: any;
};
const someData: Data = {
    someBooleanKey: true,
    someStringKey: "text goes here"
};


// Union
type ProductCode = number | string
const productCodeA: ProductCode = "this-works"
const productCodeB: ProductCode = 1024;

// Intersection
type StatusResponse = {
    status: number;
    isValid: boolean;
};
type User = {
    name: string;
};
type GetUserResponse = {
    user: User;
};
type ApiGetuserResponse = StatusResponse & GetUserResponse;

// Template Strings types
type StringThatStartsWithGet = `get${string}`;
const myString: StringThatStartsWithGet = 'getAbc';

// Type Assertions
const valueA: any = "something";
const valueB = valueA as string;

// Utility Types
type Data1 = {
    [key: string]: any;
};
type Data2 = Record<string, any>; // "Record" utility type

type UserRow = {
    id: number;
    name: string;
    email: string;
    addressId: string;
};
type UserRowWithoutAddressId = Omit<UserRow, "addressId">; // "Omit" utility type
type UserRowWithoutIds = Omit<UserRow, "id" | "addressId">;

type UserRowWithEmailOnly = Pick<UserRow, "email">; // "Pick" utility type
type UserRowWithEmailOnly2 = Pick<UserRow, "name" | "email">;

type UserRowInsert = Partial<UserRow>;
// UserRowInsert is equivalent to this
type UserRowInsertEquivalent = {
    id?: number | undefined;
    name?: string | undefined;
    email?: string | undefined;
    addressId?: string | undefined;
};

// --------------------------------------------
// use the path of your model
import Product from "../models/productModel.js";
import Brand from "../models/brandModel.js";
import Color from "../models/colorModel.js";
import User from "../models/userModel.js";
import Order from "../models/orderModel.js";

import mongoose from "mongoose";
// use the new name of the database
const url =
  "mongodb+srv://ecommerce:ecommerce@cluster0.1qjl1.mongodb.net/?retryWrites=true&w=majority";
beforeAll(async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

var productid = "";
var brandId = "";
var colorId = "";

describe("Order Add", () => {
  // the code below is for insert testing
  it("Add order testing", async () => {
    const brand = {
      name: "Nokia",
      type: "all",
    };

    const brandData = await Brand.create(brand);
    brandId = brandData?._id;

    const color = {
      name: "Black",
      code: "#000000",
    };

    const colorData = await Color.create(color);
    colorId = colorData?._id;

    var chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    var string = "";
    for (var ii = 0; ii < 15; ii++) {
      string += chars[Math.floor(Math.random() * chars.length)];
    }
    var email = string + "@gmail.com";
    const user = {
      name: "test",
      email: email,
      password: "123123123",
    };

    const userData = await User.create(user);

    const product = {
      name: "Nokia",
      price: "21",
      countInStock: "1",
      description: "asd",
      category: "ad",
      color: colorData?._id,
      brand: brandData?._id,
      image: "asd.jpg",
      numReviews: "0",
      user: userData?._id,
    };

    const productData = await Product.create(product);
    productid = productData._id;
    const order = {
      user: userData?._id,
      orderItems: [
        {
          name: "Nokia",
          countInStock: "1",
          image: "asd.jpg",
          price: "21",
          product: productData?._id,
        },
      ],
      shippingAddress: {
        address: "test",
        city: "test",
        postalCode: "test",
        country: "test",
      },
      paymentMethod: "cod",
      taxPrice: "1000",
      shippingPrice: "1000",
      totalPrice: "1000",
    };
    return Order.create(order).then((pro_ret) => {
      expect(pro_ret.paymentMethod).toEqual("cod");
    });
  });
});

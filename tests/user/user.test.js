// use the path of your model
import User from "../../models/userModel.js";
import mongoose from "mongoose";

// etc.
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

var userid = "";

describe("User Schema test anything", () => {
  // the code below is for insert testing
  it("Add user testing anything", () => {
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

    return User.create(user).then((pro_ret) => {
      userid = pro_ret._id;
      expect(pro_ret.name).toEqual("test");
    });
  });

  it("Add admin testing anything", () => {
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
      isAdmin: true,
    };

    return User.create(user).then((pro_ret) => {
      userid = pro_ret._id;
      expect(pro_ret.name).toEqual("test");
    });
  });

  it("update user testing anything", () => {
    return User.findByIdAndUpdate(userid, {
      $set: { name: "test1" },
    }).then((pro_ret) => {
      expect(pro_ret.name).toEqual("test");
    });
  });

  // the code below is for delete testing
  //  it('to test the delete product is working or not', async () => {
  //  const status = await Product.deleteMany();
  //  expect(status.ok).toBe(1);
  // });
});
//

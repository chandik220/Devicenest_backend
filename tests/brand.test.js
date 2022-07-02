import Brand from "../models/brandModel.js";
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

var brandId = "";
describe("Brand Add", () => {
  // the code below is for insert testing
  it("Add brand testing", () => {
    const brand = {
      name: "Nokia",
      type: "all",
    };

    return Brand.create(brand).then((pro_ret) => {
      brandId = pro_ret._id;
      expect(pro_ret.name).toEqual("Nokia");
    });
  });

  it("To delete brand", async () => {
    return Brand.findByIdAndDelete({ _id: brandId }).then((pp) => {
      expect(pp.name).toEqual("Nokia");
    });
  });
});

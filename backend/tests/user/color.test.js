import Color from "../models/colorModel.js";
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

var colorId = "";
describe("Color Add", () => {
  // the code below is for insert testing
  it("Add color testing", () => {
    const color = {
      name: "Black",
      code: "#000000",
    };

    return Color.create(color).then((pro_ret) => {
      colorId = pro_ret._id;
      expect(pro_ret.name).toEqual("Black");
    });
  });

  it("To delete color", async () => {
    return Color.findByIdAndDelete({ _id: colorId }).then((pp) => {
      expect(pp.name).toEqual("Black");
    });
  });
});

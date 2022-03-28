import { shallow } from "enzyme";
import React from "react";
import "./jestsetup";

import Header from "../components/Header";

describe("Header", () => {
  it("should display text", () => {
    const wrapper = shallow(<Header />);
    const header = wrapper.find("div").text();
    expect(header).toBe("Welcome to Photo Gallery");
  });
});

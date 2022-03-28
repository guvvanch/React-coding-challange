import { shallow } from "enzyme";
import React from "react";
import "./jestsetup";
import Home from "../pages/index";
import Header from "../components/Header";
import Gallery from "../components/Gallery";

describe("Home component", () => {
  it("should render Header and Gallery", () => {
    const wrapper = shallow(<Home />);
    const header = wrapper.find(Header);
    const gallery = wrapper.find(Gallery);
    expect(header.exists()).toBe(true);
    expect(gallery.exists()).toBe(true);
  });
});

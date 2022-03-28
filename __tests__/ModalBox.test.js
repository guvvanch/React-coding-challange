import { shallow } from "enzyme";
import React from "react";
import "./jestsetup";
import ModalBox from "../components/ModalBox";
import ModalImage from "../components/ModalImage";
import { photo } from "../example-photo-data";

describe("ModalBox ", () => {
  it("should verify close icon", () => {
    let modalImage = photo;
    const show = false;
    const clickClose = jest.fn();
    const wrapper = shallow(
      <ModalBox modalImage={modalImage} show={show} clickClose={clickClose} />
    );
    const x_icon = wrapper.find("a");
    expect(x_icon.exists()).toBe(true);
  });

  it("should verify that only one x exists", () => {
    let modalImage = photo;
    const show = false;
    const clickClose = jest.fn();
    const wrapper = shallow(
      <ModalBox modalImage={modalImage} show={show} clickClose={clickClose} />
    );
    const x_icon = wrapper.find("a");
    expect(x_icon.length).toEqual(1);
  });

  it("should verify the modalImage component", () => {
    let modalImage = photo;
    const show = false;
    const clickClose = jest.fn();
    const wrapper = shallow(
      <ModalBox modalImage={modalImage} show={show} clickClose={clickClose} />
    );
    const x_icon = wrapper.find(ModalImage);
    expect(x_icon.exists()).toBe(true);
  });
});

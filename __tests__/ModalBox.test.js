import { shallow } from "enzyme";
import React from "react";
import "./jestsetup";
import ModalBox from "../components/ModalBox";
import ModalImage from "../components/ModalImage";
import { photo } from "../example-photo-data";

const setUp = (props = {}) => {
  let modalImage = photo;
  const show = false;
  const clickClose = jest.fn();
  const component = shallow(
    <ModalBox
      modalImage={modalImage}
      show={show}
      clickClose={clickClose}
      {...props}
    />
  );
  return component;
};

describe("ModalBox ", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should verify close icon", () => {
    const x_icon = component.find("a");
    expect(x_icon.exists()).toBe(true);
  });

  it("should verify that only one x exists", () => {
    const x_icon = component.find("a");
    expect(x_icon.length).toEqual(1);
  });

  it("should verify the modalImage component", () => {
    const modalImageComponent = component.find(ModalImage);
    expect(modalImageComponent.exists()).toBe(true);
  });
});

import React from "react";
import ReactDOM from "react-dom";
import FeedPreview from "../../../components/feed-preview/feed-preview.component";

import Enzyme, { shallow, render, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<FeedPreview/>", () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = shallow(<FeedPreview />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("state conditions tests", () => {
    it("test if isLoading is true - display isLoading component", () => {
      expect(wrapper.contains(".spinner")).toBeTruthy();
    });
  });
});

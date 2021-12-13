import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
import { Card } from "./Card";

describe("Card component", () => {
  let wrapper;
  it("returns the correct style for a given suit prop - clubs", () => {
    const props = {
      face: "A",
      suit: "C"
    };
    wrapper = shallow(<Card {...props} />);
    expect(wrapper.props().children[0].props.className).toEqual(
      "card-text black"
    );
    expect(wrapper.props().children[1].props.className).toEqual(
      "card-img black"
    );
  });

  it("returns the correct style for a given suit prop - spades", () => {
    const props = {
      face: "A",
      suit: "S"
    };
    wrapper = shallow(<Card {...props} />);
    expect(wrapper.props().children[0].props.className).toEqual(
      "card-text black"
    );
    expect(wrapper.props().children[1].props.className).toEqual(
      "card-img black"
    );
  });

  it("returns the correct style for a given suit prop - diamonds", () => {
    const props = {
      face: "A",
      suit: "D"
    };
    wrapper = shallow(<Card {...props} />);
    expect(wrapper.props().children[0].props.className).toEqual(
      "card-text red"
    );
    expect(wrapper.props().children[1].props.className).toEqual("card-img red");
  });

  it("returns the correct style for a given suit prop - clubs", () => {
    const props = {
      face: "A",
      suit: "H"
    };
    wrapper = shallow(<Card {...props} />);
    expect(wrapper.props().children[0].props.className).toEqual(
      "card-text red"
    );
    expect(wrapper.props().children[1].props.className).toEqual("card-img red");
  });
});

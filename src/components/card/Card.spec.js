import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
import { Card } from "./Card";

describe("Card component", () => {
  let wrapper;
  it("returns the correct style for a given suit prop - clubs", () => {
    const props = {
      face: "J",
      suit: "C"
    };
    wrapper = shallow(<Card {...props} />);
    expect(wrapper.props().children[0].props.className).toEqual(
      "card-text black"
    );
    expect(wrapper.props().children[1].props.className).toEqual(
      "card-img black"
    );
    expect(wrapper.props().children[0].props.children).toEqual("J");
  });

  it("returns the correct style for a given suit prop - spades", () => {
    const props = {
      face: "9",
      suit: "S"
    };
    wrapper = shallow(<Card {...props} />);
    expect(wrapper.props().children[0].props.className).toEqual(
      "card-text black"
    );
    expect(wrapper.props().children[1].props.className).toEqual(
      "card-img black"
    );
    expect(wrapper.props().children[0].props.children).toEqual("9");
  });

  it("returns the correct style for a given suit prop - diamonds", () => {
    const props = {
      face: "Q",
      suit: "D"
    };
    wrapper = shallow(<Card {...props} />);
    expect(wrapper.props().children[0].props.className).toEqual(
      "card-text red"
    );
    expect(wrapper.props().children[0].props.children).toEqual("Q");
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
    expect(wrapper.props().children[0].props.children).toEqual("A");
    expect(wrapper.props().children[1].props.className).toEqual("card-img red");
  });

  it("formats the face of the card - change 'T' to '10'.", () => {
    const props = {
      face: "T",
      suit: "H"
    };
    wrapper = shallow(<Card {...props} />);
    expect(wrapper.props().children[0].props.children).toEqual("10");
  });
});

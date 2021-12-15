import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
import { Player } from "./Player";

describe("Player component", () => {
  let wrapper;
  it("is initialized with props", () => {
    const props = {
      name: "Player 1",
      card1: "AH",
      card2: "JD"
    };
    wrapper = shallow(<Player {...props} />);
    expect(
      wrapper.props().children[0].props.children[0].props.children
    ).toEqual("AH");
    expect(
      wrapper.props().children[0].props.children[1].props.children
    ).toEqual("JD");
  });
});

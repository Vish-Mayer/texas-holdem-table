import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ColorPicker } from "./ColorPicker";

Enzyme.configure({ adapter: new Adapter() });

describe("Player component", () => {
  let wrapper;
  it("is initialized with props", () => {
    const props = {
      tableColor: "red-cloth"
    };

    wrapper = shallow(<ColorPicker {...props} />);

    //green button
    expect(wrapper.props().children[0].props.children.props.active).toEqual(
      false
    );

    //blue button
    expect(wrapper.props().children[1].props.children.props.active).toEqual(
      false
    );

    //red button
    expect(wrapper.props().children[2].props.children.props.active).toEqual(
      true
    );

    //yellow button
    expect(wrapper.props().children[3].props.children.props.active).toEqual(
      false
    );
  });
});

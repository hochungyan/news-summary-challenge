import { render } from '@testing-library/react';
import {screen} from "@testing-library/react"
import Header from "../Components/Header";

test(`Header matches snapshot`, () => {
    const headerComponent = render(<Header />);
expect(headerComponent).toMatchSnapshot();
});

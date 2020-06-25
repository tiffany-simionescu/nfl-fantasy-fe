import React from 'react';
import * as rtl from "@testing-library/react";

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import App from './App';
import Footer from './components/Footer';
import AnalyticsPage from './components/AnalyticsPage';

const mockStore = configureStore([]);

describe('My Connected React-Redux Component', () => {
    let store;
    let component;

    beforeEach(() => {
        store = mockStore({
            myState: 'sample text',
        });

        store.dispatch = jest.fn();

        component = renderer.create(
            <Provider store={store}>
                <App />
            </Provider>
        );
    });

    it('renders without crashing', () => {
        rtl.render(
            <Provider store={store}>
                <App />
            </Provider>);
    })

    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
   
    it('should dispatch an action on button click', () => {
        renderer.act(() => {
            component.root.findByType('button').props.onClick();
        });
    });

    it('renders Copyright on Footer', () => {
        const {getByText} = rtl.render(<Footer />);
        const CopyRight = getByText(/Copyright/i);
        expect(CopyRight).toBeInTheDocument();
    })

    it('renders Analytics Page', () => {
        const {getByText} = rtl.render(<AnalyticsPage />);
        const Data = getByText(/Methodology/i);
        expect(Data).toBeInTheDocument();
    })
  });

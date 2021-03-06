import React from 'react'
import search from './search'
import renderer from 'react-test-renderer';



test('Generate component Search', () => {
    const component = renderer.create(
        <search/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const componentProps = renderer.create(
        <search state={{artistes:{isFetching:true}}}/>,
    );
    let treeProps = componentProps.toJSON();
    expect(treeProps).toMatchSnapshot();

});
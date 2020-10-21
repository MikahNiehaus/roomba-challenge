import Grid from '../../components/Grid.js';
const grid = new Grid();

const data = {
    "roomDimensions": [10, 10],
    "initialRoombaLocation": [1, 1],
    "dirtLocations": [
      [1, 2],
      [3, 5],
      [5, 5],
      [7, 9]
    ],
    "drivingInstructions": ["N","E","E","N","N","N","E","E","S","W","S","S","S","S","S"  ]
  }

test('includes Location', () => {
    expect(grid.includesLocation(data.dirtLocations,[1,2])).toBe(true);
    expect(grid.includesLocation(data.dirtLocations,[3, 5])).toBe(true);
    expect(grid.includesLocation(data.dirtLocations,[5, 5])).toBe(true);
    expect(grid.includesLocation(data.dirtLocations,[7, 9])).toBe(true);
    expect(grid.includesLocation(data.dirtLocations,[5, 7])).toBe(false);
    expect(grid.includesLocation(data.dirtLocations,[-100, 100])).toBe(false);
})

// import React from 'react';
// import {shallow} from 'enzyme';
// import Grid from '../../components/Grid';
// import sinon from 'sinon';

// let grid;

// describe('Grid', () => {

//     let splitUpTilesStub;

//     beforeEach(() => {
//         const props = {
//             state: {
//                 grid: {
//                     length: 2,
//                     width: 2
//                 },
//             }
//         };

//         grid = shallow(<Grid {...props}/>);
//     });

//     it('renders correctly', () => {
//         expect(grid).toMatchSnapshot();
//     });

//     describe('splitUpTiles', () => {
//         it('returns an array (a) that is split up into (l) number of arrays', () => {
//             const array = [{x:2, y:2}, {x:1, y:1}, {x:4, y:0}, {x:2, y:1}];
//             const l = 2;

//             expect(grid.instance().splitUpTiles(array, l)).toEqual([[{x:2, y:2}, {x:1, y:1}], [{x:4, y:0}, {x:2, y:1}]])
//         });
//     });

//     describe('createColumns', () => {
//         it('returns an array of data wrapped in table rows', () => {
//             const splitUpTilesArrayOfArrays = [[{"x": 4, "y": 0}, {"x": 2, "y": 1}, {"x": 2, "y": 2}, {"x": 1, "y": 1}]];

//             splitUpTilesStub = sinon.stub(grid.instance(), "splitUpTiles");
//             splitUpTilesStub.returns(splitUpTilesArrayOfArrays);
//             //expect(grid.instance().createColumns()).toEqual('[<tr>{"x": 4, "y": 0}{"x": 2, "y": 1}{"x": 2, "y": 2}{"x": 1, "y": 1}</tr>, <tr />]')
//         });
//     });

// });
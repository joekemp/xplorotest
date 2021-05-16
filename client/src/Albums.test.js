import React from "react";
import {shallow} from 'enzyme';
import Albums from "./Albums";
import Album from "./Album";
import {resultsSets as testResultsSets} from "../test/albums"

describe("Tests Albums component", () => {

  testResultsSets.forEach(results => {
    describe(`Using album set "${results.name}":`, () => {

      it("Should have the correct number of Album components", () => {
        const wrapper = shallow(<Albums results={results.data} />);
        expect(wrapper.find(Album)).toHaveLength(results.count);
      });

    });
  });

});

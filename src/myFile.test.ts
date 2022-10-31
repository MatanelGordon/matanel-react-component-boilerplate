import {describe, expect, test} from "vitest";
import myClass, {matanel} from "./myFile";

describe("simple test suite", () => {
    test("simple test", () => {
        console.log(myClass)
        expect(matanel).eq('mamas51')
    })
})
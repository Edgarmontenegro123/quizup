import {getBGColor} from "./helpers";

describe("getBGColor", () => {
    test("returns correct bg color when userAnswer is correct", () => {
        const result = getBGColor("París", "París","París");
        expect(result).toBe("bg-[#55ac78] text-[#f5f5f5]");
    });

    test("returns correct bg color when userAnswer is incorrect but answer is correct", () => {
        const result = getBGColor("Madrid", "París", "París");
        expect(result).toBe("bg-[#55ac78] text-[#f5f5f5]");
    })

    test("returns correct bg color when userAnswer is incorrect", () => {
        const result = getBGColor("Madrid", "París", "Madrid");
        expect(result).toBe("bg-[#ac5050] text-white");
    })

    test("returns default bg color when there is no userAnswer", () => {
        const result = getBGColor(undefined, "París", "París");
        expect(result).toBe("bg-[#f5f5f5] text-[#0583F2]");
    })

    test("returns default bg color for answers not related to userAnswer or correctAnswer", () => {
        const result = getBGColor("Madrid", "París", "Berlín");
        expect(result).toBe("bg-[#f5f5f5] text-[#0583F2]")
    });
});
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  Day2Puzzle1: () => Day2Puzzle1,
  Day2Puzzle2: () => Day2Puzzle2
});
var import_day2 = __toModule(require("../inputs/day2"));
function GetObject(dimensions) {
  const split = dimensions.split("x");
  return {
    length: Number(split[0]),
    width: Number(split[1]),
    height: Number(split[2])
  };
}
function Day2Puzzle1() {
  let totalArea = 0;
  import_day2.input.forEach((value) => {
    const obj = GetObject(value);
    const area1 = obj.height * obj.length;
    const area2 = obj.height * obj.width;
    const area3 = obj.length * obj.width;
    totalArea += 2 * (area1 + area2 + area3) + Math.min(area1, area2, area3);
  });
  return totalArea;
}
function Day2Puzzle2() {
  let totalLength = 0;
  import_day2.input.forEach((value) => {
    const obj = GetObject(value);
    const perimeter = 2 * Math.min(obj.length + obj.width, obj.length + obj.height, obj.height + obj.width);
    const volume = obj.length * obj.height * obj.width;
    totalLength += perimeter + volume;
  });
  return totalLength;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Day2Puzzle1,
  Day2Puzzle2
});
//# sourceMappingURL=day2.js.map

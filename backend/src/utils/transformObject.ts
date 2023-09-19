/* eslint-disable @typescript-eslint/no-explicit-any */
export function transformObject(originalObj: any): any {
  if (typeof originalObj === "object") {
    if (Array.isArray(originalObj)) {
      return originalObj.map(transformObject);
    } else {
      const transformedObj: { [x: string]: unknown } = { objectCount: originalObj ? Object.keys(originalObj).length : originalObj };
      for (const key in originalObj) {
        const transformedKey = key.trim();
        transformedObj[transformString(transformedKey)] = transformObject(originalObj[key]);
      }
      return transformedObj;
    }
  } else {
    return originalObj;
  }
}




function transformString(str: string) {

  const parseStr = str.replace(/\s/g, "");

  return parseStr.split("").sort((a, b) => {
    return b.charCodeAt(0) - a.charCodeAt(0)
  }).join("");
}
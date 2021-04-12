import {CHUCK_COUNT_PARAM_ERROR} from "./constants"

/**
 * 
 * @param arrayToBeDivided 
 * @param chunkCount 
 * @returns divided array
 * 
 * Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N
 * equally sized arrays.
 * Where the size of the original array cannot be divided equally by N, the final part should have a length equal
 * to the remainder.
 */


export default function groupArrayElements(arrayToBeDivided: Array<string | number>, chunkCount: number) {

    if(chunkCount <= 0 || !Number.isInteger(chunkCount)){
      throw new Error(CHUCK_COUNT_PARAM_ERROR);
    }
    const chunkMaxLength:number = Math.round(arrayToBeDivided.length / chunkCount);  

    const dividedArray: Array<Array<string | number>> = [];
    for (let i = 0; i < arrayToBeDivided.length; i += chunkMaxLength) {
      const nextChunk: Array<string | number> = arrayToBeDivided.slice(i,i+chunkMaxLength)
      
      dividedArray.push(nextChunk)
    }
  return dividedArray;

  };

module.exports.groupArrayElements = groupArrayElements;
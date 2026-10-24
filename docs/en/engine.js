export const PATTERNS=[[450,700,450],[550,350,700,550],[400,650,350,550,700]];
export function intervals(taps){return taps.slice(1).map((n,i)=>n-taps[i])}
export function evaluate(expected,taps){if(taps.length!==expected.length+1)throw new Error('The number of tabs required is different');const actual=intervals(taps);const errors=actual.map((n,i)=>Math.abs(n-expected[i]));const meanMs=errors.reduce((s,n)=>s+n,0)/errors.length;const ratio=errors.reduce((s,n,i)=>s+n/expected[i],0)/errors.length;return{actual,errors,meanMs,accuracy:Math.max(0,100*(1-ratio))}}
export function overall(rows){return{accuracy:rows.reduce((s,r)=>s+r.accuracy,0)/rows.length,meanMs:rows.reduce((s,r)=>s+r.meanMs,0)/rows.length}}

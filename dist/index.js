"use strict";var x=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(e){throw (a=0, e)}};};var p=x(function(B,k){
function g(r,a,e,t,f){var s,c,u,i,v,n,o,q;for(s=e.data,c=e.accessors[0],o=r-a,i=f,u=0,v=0,q=0;q<r;q++)n=c(s,i),u+=n*n,v+=n,i+=t;return(u-v/r*v)/o}k.exports=g
});var y=x(function(C,S){
var j=require('@stdlib/array-base-arraylike2object/dist'),m=p();function O(r,a,e,t,f){var s,c,u,i,v,n,o;if(n=r-a,r<=0||n<=0)return NaN;if(r===1||t===0)return 0;if(u=j(e),u.accessorProtocol)return m(r,a,u,t,f);for(c=f,s=0,i=0,o=0;o<r;o++)v=e[c],s+=v*v,i+=v,c+=t;return(s-i/r*i)/n}S.exports=O
});var l=x(function(D,d){
var P=require('@stdlib/strided-base-stride2offset/dist'),R=y();function h(r,a,e,t){return R(r,a,e,t,P(r,t))}d.exports=h
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=l(),z=y();w(b,"ndarray",z);module.exports=b;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

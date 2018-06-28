let _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(o) {
return typeof o;
}:function(o) {
return o&&'function'==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?'symbol':typeof o;
}; !function(o, e) {
'use strict'; if ('function'==typeof define&&define.amd)define(['angular'], e); else {
if ('undefined'==typeof module||'object'!==_typeof(module.exports)) return e(angular); module.exports=e(require('angular'));
}
}(0, function(o) {
'use strict'; let e='FarolSDK'; return o.module(e, []).provider(e, ['$injector', function($injector) {
this.$get=function() {
return FarolSDK;
};
}]), e;
});

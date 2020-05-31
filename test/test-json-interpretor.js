'use strict';


const { JsonConfInterpreter } = require('../json-conf-interpretor');

const { demoAssemblerConfig } = require('./test-api-assembler-config');


const sourceJson = require('./test-source-json'); // 源
const transResult = JsonConfInterpreter(sourceJson, demoAssemblerConfig);


console.log('sourceData:', JSON.stringify(sourceJson));
console.log('transResult:', JSON.stringify(transResult));

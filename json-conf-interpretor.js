'use strict';


const jp = require('jsonpath');


exports.JsonConfInterpreter = function JsonConfInterpreter(source, conf, ctx) {

  const { type } = conf;

  let result;

  if (type === 'root' || type === 'node') { // 根和带非数组非叶子类型的节点

    const { children } = conf;

    result = {};
    children.forEach(child => {
      const { key } = child;
      result[key] = JsonConfInterpreter(source, child, ctx);
    });

  } else if (type === 'leaf') { // leaf node

    const { path } = conf;

    const pathExp = jp.stringify(path);
    result = jp.query(source, pathExp)[0];

  } else if (type === 'array') { // 数组型节点(可以是叶子或非叶子类型)

    const { path, item_conf } = conf;

    result = [];

    const pathExp = jp.stringify(path);
    const sourceArr = jp.query(source, pathExp)[0];

    sourceArr.forEach(source => {
      const item = JsonConfInterpreter(source, item_conf, ctx);
      result.push(item);
    });
  }

  return result;
};

'use strict';


const arrDItemConf = {
  type: 'root',
  children: [
    {
      type: 'leaf',
      key: 'e',
      path: [ '$', 'E' ],
    },
  ],
};

const arrHItemConf = {
  type: 'root',
  children: [
    {
      type: 'leaf',
      key: 'i',
      path: [ '$', 'I' ],
    },
  ],
};

const arrFItemConf = {
  type: 'root',
  children: [
    {
      type: 'node',
      key: 'g',
      children: [
        {
          type: 'array',
          key: 'h',
          path: [ '$', 'G', 'H' ],
          item_conf: arrHItemConf,
        },
      ],
    },
  ],
};

exports.demoAssemblerConfig = {
  type: 'root',
  children: [
    {
      type: 'node',
      key: 'b',
      children: [
        {
          type: 'leaf',
          key: 'c',
          path: [ '$', 'B', 'C' ],
        },
      ],
    },
    {
      type: 'node',
      key: 'd_trans',
      children: [
        {
          type: 'leaf',
          key: 'e',
          path: [ '$', 'D', 0, 'E' ],
        },
      ],
    },
    {
      type: 'array',
      key: 'd',
      path: [ '$', 'D' ],
      item_conf: arrDItemConf,
    },
    {
      type: 'array',
      key: 'f',
      path: [ '$', 'F' ],
      item_conf: arrFItemConf,
    },
  ],
};

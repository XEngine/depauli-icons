
      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M2.24 24c-.601 0-1.166-.234-1.591-.659s-.659-.99-.659-1.591.234-1.166.659-1.591l3.493-3.49a.748.748 0 011.06.001l.529.529 1.83-1.829 1.364-5.633a.895.895 0 01.088-.212l.021-.033a.636.636 0 01.072-.089l.019-.021a.724.724 0 01.09-.076l.021-.016a.751.751 0 01.594-.107c.035.009.067.02.098.032l.01.004a.76.76 0 01.39.366l.005.011 1.758-1.758-2.162-2.162a.753.753 0 01-.201-.89c.006-.018.01-.024.018-.04a9.08 9.08 0 011.602-2.159A9.048 9.048 0 0113.543.965l.007-.003a8.227 8.227 0 013.256-.937 7.59 7.59 0 01.542-.019 6.916 6.916 0 012.722.541 6.332 6.332 0 013.395 3.429c1.158 2.8.332 6.284-2.057 8.673-1.64 1.64-3.825 2.581-5.994 2.582-.448 0-.893-.042-1.328-.123l-5.465 1.323-1.83 1.829.529.529a.746.746 0 01.001 1.06l-3.489 3.493A2.24 2.24 0 012.24 24zm-.531-2.781a.747.747 0 00.53 1.28.748.748 0 00.531-.219l2.959-2.962-1.057-1.058-2.963 2.959zm7.549-6.488l2.417-.585a6.252 6.252 0 01-1.008-.82 6.446 6.446 0 01-.823-1.015l-.586 2.42zm5.153-1.092c.328.06.662.089 1 .09a6.54 6.54 0 002.182-.388l-1.442-1.442-1.74 1.74zm-3.512-2.488a4.754 4.754 0 001.941 1.938l2.251-2.251-1.939-1.939-2.253 2.252zm8.12 1.494a7.62 7.62 0 002.393-2.392l-1.808-1.808-2.393 2.393 1.808 1.807zm-2.867-2.868l2.393-2.392-1.939-1.939-2.392 2.392 1.938 1.939zm5.952-.953c.375-1.058.476-2.152.295-3.173l-1.734 1.734 1.439 1.439zm-8.952-2.046l2.392-2.392-1.804-1.805a7.656 7.656 0 00-1.332 1.066c-.396.394-.75.841-1.057 1.33l1.801 1.801zm6.453-.454l2.25-2.25a4.834 4.834 0 00-1.939-1.94l-2.25 2.25 1.939 1.94zm-3-2.999l1.734-1.734a5.758 5.758 0 00-1.427-.071 6.566 6.566 0 00-1.744.368l1.437 1.437z"}}),_c('path',{attrs:{"d":"M6.7 8.99c-.396 0-.786-.104-1.127-.302L.364 5.673a.757.757 0 01-.368-.552.758.758 0 01.213-.628L4.453.25A.755.755 0 015.08.036c.23.03.437.168.553.368l3.015 5.209c.301.52.38 1.126.225 1.707a2.238 2.238 0 01-1.047 1.368A2.256 2.256 0 016.7 8.99zm-.376-1.601a.75.75 0 001.025-1.024L6.767 5.36 5.32 6.808l1.004.581zM3.976 6.031L5.99 4.017 4.823 2.001 1.961 4.864l2.015 1.167z"}})])
          )
        }
      }
    
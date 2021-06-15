
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
            children.concat([_c('path',{attrs:{"d":"M15.75 10.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM15.75 7.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM3 24c-1.654 0-3-1.346-3-3 0-1.456 2.034-3.797 2.442-4.251.138-.155.342-.244.558-.244s.42.089.558.244C3.966 17.203 6 19.544 6 21c0 1.654-1.346 3-3 3zm0-5.587C2.116 19.519 1.5 20.572 1.5 21c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5c0-.429-.615-1.481-1.5-2.587z"}}),_c('path',{attrs:{"d":"M13.5 24c-3.308 0-6-2.692-6-6 0-2.481-2.019-4.5-4.5-4.5A.75.75 0 013 12c3.308 0 6 2.692 6 6 0 2.481 2.019 4.5 4.5 4.5a3.754 3.754 0 003.75-3.75V16.5h-1.5a.75.75 0 01-.75-.75v-.825a3.745 3.745 0 01-3-3.675v-7.5A3.754 3.754 0 0115.75 0h4.5A3.754 3.754 0 0124 3.75v7.5c0 1.8-1.268 3.324-3 3.675v.825a.75.75 0 01-.75.75h-1.5v2.25A5.256 5.256 0 0113.5 24zm6-9v-.75a.75.75 0 01.75-.75 2.252 2.252 0 002.25-2.25v-7.5a2.252 2.252 0 00-2.25-2.25h-4.5a2.252 2.252 0 00-2.25 2.25v7.5a2.252 2.252 0 002.25 2.25.75.75 0 01.75.75l3 .75z"}})])
          )
        }
      }
    
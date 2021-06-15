
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
            children.concat([_c('path',{attrs:{"d":"M1.506 23.25a.75.75 0 010-1.5h.75v-1.5h-.75a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-.75v1.5h.75a.75.75 0 010 1.5h-21zm18.75-1.5v-1.5h-4.5v1.5h4.5zm-6 0v-1.5h-4.5v1.5h4.5zm-6 0v-1.5h-4.5v1.5h4.5zM13.506 17.25a2.227 2.227 0 01-1.5-.575c-.409.37-.937.575-1.5.575h-6A2.252 2.252 0 012.256 15v-4.5a2.252 2.252 0 012.25-2.25h2.25V3A2.252 2.252 0 019.006.75h6A2.252 2.252 0 0117.256 3v5.25h2.25a2.252 2.252 0 012.25 2.25V15a2.252 2.252 0 01-2.25 2.25h-6zm-.75-2.25c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-2.25V12a.75.75 0 01-1.5 0V9.75h-3V15zm-8.25-5.25a.75.75 0 00-.75.75V15c0 .414.336.75.75.75h6a.75.75 0 00.75-.75V9.75h-3V12a.75.75 0 01-1.5 0V9.75h-2.25zm11.25-1.5V3a.75.75 0 00-.75-.75h-2.25V4.5a.75.75 0 01-1.5 0V2.25h-2.25a.75.75 0 00-.75.75v5.25h7.5z"}})])
          )
        }
      }
    
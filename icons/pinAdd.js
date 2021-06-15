
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
            children.concat([_c('path',{attrs:{"d":"M8.574 22.557a.745.745 0 01-.588-.285C5.283 18.857.75 12.592.75 9a8.94 8.94 0 012.633-6.363A8.939 8.939 0 019.742-.008a8.978 8.978 0 018.962 8.082.752.752 0 01-.747.827.748.748 0 01-.745-.673 7.48 7.48 0 00-7.461-6.735 7.449 7.449 0 00-5.307 2.204A7.445 7.445 0 002.25 8.999c0 3.346 5.291 10.293 6.912 12.342a.75.75 0 01-.588 1.216z"}}),_c('path',{attrs:{"d":"M16.5 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75 6.75 3.028 6.75 6.75S20.222 24 16.5 24zm0-12c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S19.395 12 16.5 12z"}}),_c('path',{attrs:{"d":"M16.5 21a.75.75 0 01-.75-.75V18H13.5a.75.75 0 010-1.5h2.25v-2.25a.75.75 0 011.5 0v2.25h2.25a.75.75 0 010 1.5h-2.25v2.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    
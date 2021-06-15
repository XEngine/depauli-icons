
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
            children.concat([_c('path',{attrs:{"d":"M6.483 24A3.486 3.486 0 013 20.52V4.983A3.486 3.486 0 016.483 1.5H9A.75.75 0 019 3H6.483C5.39 3 4.5 3.89 4.5 4.983V18H15v-2.25a.75.75 0 011.5 0v4.768A3.486 3.486 0 0113.018 24H6.483zM4.5 20.518c0 1.093.89 1.982 1.982 1.982h6.535A1.985 1.985 0 0015 20.518V19.5H4.5v1.018zM15.75 6.375a1.123 1.123 0 01-.058-2.246h.004l.026-.003-.019.001a1.127 1.127 0 11.047 2.248z"}}),_c('path',{attrs:{"d":"M15.749 13.426a1.489 1.489 0 01-1.182-.577C12.712 10.477 10.5 7.233 10.5 5.25 10.5 2.355 12.855 0 15.75 0S21 2.355 21 5.25c0 1.98-2.212 5.226-4.068 7.6a1.491 1.491 0 01-1.183.576zM15.75 1.5A3.754 3.754 0 0012 5.25c0 1.161 1.437 3.719 3.75 6.676 2.313-2.959 3.75-5.517 3.75-6.676a3.754 3.754 0 00-3.75-3.75z"}})])
          )
        }
      }
    
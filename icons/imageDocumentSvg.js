
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
            children.concat([_c('path',{attrs:{"d":"M1.5 4.5a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM1.5 21a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM12 16.5a.75.75 0 01-.624-.334A9.651 9.651 0 019.75 10.8V8.25a.75.75 0 011.5 0v2.55a8.19 8.19 0 00.75 3.418 8.182 8.182 0 00.75-3.419V8.25a.75.75 0 011.5 0v2.55a9.651 9.651 0 01-1.626 5.366.75.75 0 01-.624.334zM4.5 16.5a.75.75 0 010-1.5H6a.75.75 0 00.75-.75c0-.715-.434-1.075-1.2-1.65-.802-.602-1.8-1.35-1.8-2.85A2.252 2.252 0 016 7.5h1.5a.75.75 0 010 1.5H6a.75.75 0 00-.75.75c0 .715.434 1.075 1.2 1.65.802.602 1.8 1.35 1.8 2.85A2.252 2.252 0 016 16.5H4.5zM18 16.5a2.252 2.252 0 01-2.25-2.25v-4.5A2.252 2.252 0 0118 7.5h1.5a.75.75 0 010 1.5H18a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-.75a.75.75 0 010-1.5h.75a.75.75 0 01.75.75v1.5A2.252 2.252 0 0118 16.5z"}})])
          )
        }
      }
    

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
            children.concat([_c('path',{attrs:{"d":"M10.5 20.5a.75.75 0 010-1.5H12a.75.75 0 00.75-.75c0-.715-.434-1.075-1.2-1.65-.802-.602-1.8-1.35-1.8-2.85A2.252 2.252 0 0112 11.5h1.5a.75.75 0 010 1.5H12a.75.75 0 00-.75.75c0 .715.434 1.075 1.2 1.65.802.602 1.8 1.35 1.8 2.85A2.252 2.252 0 0112 20.5h-1.5z"}}),_c('path',{attrs:{"d":"M12 23.5c-4.549 0-8.25-3.701-8.25-8.25 0-2.25.892-4.35 2.514-5.921L11.353.622a.749.749 0 011.295 0l5.089 8.707a8.177 8.177 0 012.513 5.921c0 4.549-3.701 8.25-8.25 8.25zm0-15c-3.722 0-6.75 3.028-6.75 6.75S8.278 22 12 22s6.75-3.028 6.75-6.75S15.722 8.5 12 8.5zM12 7c1.014 0 2.019.189 2.961.552L12 2.486 9.039 7.552A8.242 8.242 0 0112 7z"}})])
          )
        }
      }
    
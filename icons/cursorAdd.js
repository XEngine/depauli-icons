
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
            children.concat([_c('path',{attrs:{"d":"M3.908 9.982a.742.742 0 01-.678-.486L.048 1.01a.751.751 0 01.966-.965l8.485 3.182a.746.746 0 01.486.685.748.748 0 01-.454.707L6.095 6.091 4.622 9.528a.75.75 0 01-.69.455l-.024-.001zm.071-2.762l.855-1.996a.746.746 0 01.394-.393l1.995-.855-5.191-1.947L3.979 7.22zM15.75 23.997c-4.549 0-8.25-3.701-8.25-8.25s3.701-8.25 8.25-8.25S24 11.198 24 15.747s-3.701 8.25-8.25 8.25zm0-15c-3.722 0-6.75 3.028-6.75 6.75s3.028 6.75 6.75 6.75 6.75-3.028 6.75-6.75-3.028-6.75-6.75-6.75z"}}),_c('path',{attrs:{"d":"M15.75 20.247a.75.75 0 01-.75-.75v-3h-3a.75.75 0 010-1.5h3v-3a.75.75 0 011.5 0v3h3a.75.75 0 010 1.5h-3v3a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    
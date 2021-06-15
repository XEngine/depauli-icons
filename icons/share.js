
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
            children.concat([_c('path',{attrs:{"d":"M18.75 22.5a4.505 4.505 0 01-4.5-4.5c0-.444.067-.884.198-1.312l-5.571-2.785A4.47 4.47 0 015.25 15.75a4.505 4.505 0 01-4.5-4.5c0-2.481 2.019-4.5 4.5-4.5 1.598 0 3.047.833 3.859 2.195l5.236-2.036A4.455 4.455 0 0114.25 6c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5a4.477 4.477 0 01-3.859-2.194l-5.236 2.036a4.441 4.441 0 01-.104 2.22l5.57 2.785a4.47 4.47 0 013.628-1.848c2.481 0 4.5 2.019 4.5 4.5S21.231 22.5 18.75 22.5zm0-7.5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zM5.25 8.25c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zM18.75 3c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"}})])
          )
        }
      }
    

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
            children.concat([_c('path',{attrs:{"d":"M8.994 23.25c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5a4.5 4.5 0 013 1.152V1.5a.75.75 0 011.5 0v.946l3.217 1.965c.024.015.046.03.067.047 2.737 2.115 3.476 5.176 1.883 7.799a.756.756 0 01-.641.361.75.75 0 01-.641-1.139c1.182-1.945.612-4.169-1.486-5.808l-2.399-1.465V18.75c0 2.481-2.018 4.5-4.5 4.5zm0-7.5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.345-3-3-3z"}})])
          )
        }
      }
    
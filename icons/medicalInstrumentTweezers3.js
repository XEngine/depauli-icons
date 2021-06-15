
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
            children.concat([_c('path',{attrs:{"d":"M12.213 23.25a3.754 3.754 0 01-3.75-3.75 3.73 3.73 0 011.053-2.601l3.933-4.649-1.822-1.822-4.779 3.823a3.727 3.727 0 01-2.59 1.043c-2.068 0-3.75-1.682-3.75-3.75s1.682-3.75 3.75-3.75a3.754 3.754 0 013.747 3.61L21.099.93a1.484 1.484 0 011.103-.319 1.501 1.501 0 01.98 2.458L12.446 15.757a3.755 3.755 0 013.516 3.743 3.753 3.753 0 01-3.749 3.75zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25-1.01-2.25-2.25-2.25zM4.258 9.295c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25 2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25zm10.163 1.807l7.614-8.999-9.23 7.383 1.616 1.616z"}})])
          )
        }
      }
    
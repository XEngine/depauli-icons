
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
            children.concat([_c('path',{attrs:{"d":"M18 15.747a.75.75 0 01-.75-.75v-5.25h-.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-.75v5.25a.75.75 0 01-.75.75zM13.5 15.75a2.252 2.252 0 01-2.25-2.25V9a.75.75 0 011.5 0v4.5c0 .414.336.75.75.75H15a.75.75 0 010 1.5h-1.5zM9 15.75a.75.75 0 01-.75-.75v-2.253h-1.5V15a.75.75 0 01-1.5 0v-4.5c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25V15a.75.75 0 01-.75.75zm-.75-4.503V10.5a.75.75 0 00-1.5 0v.747h1.5z"}}),_c('path',{attrs:{"d":"M4.5 23.247a3.754 3.754 0 01-3.75-3.75v-15A3.754 3.754 0 014.5.747h15a3.754 3.754 0 013.75 3.75v15a3.754 3.754 0 01-3.75 3.75h-15zm0-21a2.252 2.252 0 00-2.25 2.25v15a2.252 2.252 0 002.25 2.25h15a2.252 2.252 0 002.25-2.25v-15a2.252 2.252 0 00-2.25-2.25h-15z"}})])
          )
        }
      }
    
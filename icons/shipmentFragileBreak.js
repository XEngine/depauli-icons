
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
            children.concat([_c('path',{attrs:{"d":"M8.963 24a.75.75 0 010-1.5h2.287v-7.531a9.719 9.719 0 01-9-9.719v-3A2.252 2.252 0 014.5 0h15a2.252 2.252 0 012.25 2.25v3a9.718 9.718 0 01-9 9.719V22.5h2.213a.75.75 0 010 1.5h-6zM4.5 1.5a.75.75 0 00-.75.75v3c0 4.549 3.701 8.25 8.25 8.25s8.25-3.701 8.25-8.25v-3a.75.75 0 00-.75-.75h-6.349l-2 3h3.099a.748.748 0 01.624 1.166l-3 4.5a.749.749 0 01-1.04.208.75.75 0 01-.208-1.04L12.849 6H9.75a.75.75 0 01-.624-1.166L11.349 1.5H4.5z"}})])
          )
        }
      }
    

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
            children.concat([_c('path',{attrs:{"d":"M8.582 15.75a.747.747 0 01-.683-.44.745.745 0 01-.02-.573L9.748 9.75H7.832a.75.75 0 010-1.5H9.75c.401 0 .777.157 1.06.44a1.49 1.49 0 01.342 1.588l-1.867 4.985a.756.756 0 01-.703.487zM15 15.75a2.252 2.252 0 01-2.25-2.25v-3c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v3A2.252 2.252 0 0115 15.75zm0-6a.75.75 0 00-.75.75v3a.75.75 0 001.5 0v-3a.75.75 0 00-.75-.75z"}}),_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}})])
          )
        }
      }
    
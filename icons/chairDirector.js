
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
            children.concat([_c('path',{attrs:{"d":"M18.749 24a.745.745 0 01-.439-.142L12 19.307l-6.311 4.552a.753.753 0 01-1.18-.73.742.742 0 01.302-.488l5.906-4.26-5.801-4.183c-1.428-.373-2.173-.738-2.255-.779a.747.747 0 01-.332-1.007.751.751 0 011.008-.332c.003.001.394.192 1.162.433V.75A.75.75 0 016 .75v.75h12V.75a.75.75 0 011.5 0v11.763c.768-.241 1.16-.432 1.165-.434a.746.746 0 011.005.335c.09.178.104.381.042.571a.743.743 0 01-.375.435c-.082.041-.828.407-2.255.779l-5.8 4.183 5.906 4.26A.747.747 0 0118.749 24zM12 17.457l3.661-2.64a32.849 32.849 0 01-3.661.197c-1.27 0-2.496-.066-3.661-.197L12 17.457zM6 12.91c1.805.401 3.821.604 6 .604 2.178 0 4.195-.203 6-.604V7.5H6v5.41zM18 6V3H6v3h12z"}})])
          )
        }
      }
    
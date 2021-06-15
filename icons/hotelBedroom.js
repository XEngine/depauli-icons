
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
            children.concat([_c('path',{attrs:{"d":"M.75 9a.749.749 0 01-.624-.334c-.111-.167-.15-.367-.111-.563a.747.747 0 01.319-.477l11.25-7.5a.753.753 0 01.832 0l11.25 7.5a.746.746 0 01.208 1.04.749.749 0 01-1.04.208L12 1.651 1.166 8.874A.743.743 0 01.75 9zM2.25 24a.75.75 0 01-.75-.75v-10.5a.75.75 0 011.5 0v.75h2.25a3.754 3.754 0 013.746 3.58l.339-.678a5.222 5.222 0 014.696-2.903h4.719a3.754 3.754 0 013.75 3.75v6a.75.75 0 01-.75.75H2.25zM21 22.5v-3H3v3h18zm0-4.5v-.75A2.252 2.252 0 0018.75 15h-4.719a3.73 3.73 0 00-3.354 2.073l-.463.927H21zM7.5 18v-.75A2.252 2.252 0 005.25 15H3v3h4.5z"}})])
          )
        }
      }
    
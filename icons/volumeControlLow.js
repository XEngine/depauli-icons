
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
            children.concat([_c('path',{attrs:{"d":"M17.246 20.248c-.477 0-.933-.149-1.321-.431l-6.394-4.069H6.75a2.252 2.252 0 01-2.25-2.25v-3a2.252 2.252 0 012.25-2.25h2.781l6.394-4.069a2.229 2.229 0 011.323-.433c.346 0 .695.083 1.008.239A2.236 2.236 0 0119.5 5.998v12c0 .483-.16.963-.45 1.35a2.235 2.235 0 01-1.804.9zm-.493-1.683l.041.028a.747.747 0 001.056-.145.753.753 0 00.15-.45v-12a.746.746 0 00-.415-.671.745.745 0 00-.785.071.838.838 0 01-.044.031L10.5 9.409v5.177l6.253 3.979zM6.75 9.748a.75.75 0 00-.75.75v3c0 .414.336.75.75.75H9v-4.5H6.75z"}})])
          )
        }
      }
    
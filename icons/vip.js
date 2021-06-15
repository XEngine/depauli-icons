
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
            children.concat([_c('path',{attrs:{"d":"M3.75 19.5A3.754 3.754 0 010 15.75v-7.5A3.754 3.754 0 013.75 4.5h16.5A3.754 3.754 0 0124 8.25v7.5a3.754 3.754 0 01-3.75 3.75H3.75zm0-13.5A2.252 2.252 0 001.5 8.25v7.5A2.252 2.252 0 003.75 18h16.5a2.252 2.252 0 002.25-2.25v-7.5A2.252 2.252 0 0020.25 6H3.75z"}}),_c('path',{attrs:{"d":"M12 16.5a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75zM15 16.5a.75.75 0 01-.75-.75v-7.5A.75.75 0 0115 7.5h.75c1.654 0 3 1.346 3 3s-1.346 3-3 3v2.25a.75.75 0 01-.75.75zm.75-4.5c.827 0 1.5-.673 1.5-1.5S16.577 9 15.75 9v3zM7.5 16.5a.75.75 0 01-.624-.334A9.651 9.651 0 015.25 10.8V8.25a.75.75 0 011.5 0v2.55a8.19 8.19 0 00.75 3.418 8.194 8.194 0 00.75-3.419V8.25a.75.75 0 011.5 0v2.55a9.651 9.651 0 01-1.626 5.366.75.75 0 01-.624.334z"}})])
          )
        }
      }
    
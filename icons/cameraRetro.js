
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
            children.concat([_c('path',{attrs:{"d":"M3.75 22.5A3.754 3.754 0 010 18.75V8.25A3.754 3.754 0 013.75 4.5h9.75V3c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v1.5h.75A3.754 3.754 0 0124 8.25v10.5a3.754 3.754 0 01-3.75 3.75H3.75zM1.5 18.75A2.252 2.252 0 003.75 21h16.5a2.252 2.252 0 002.25-2.25V16.5h-5.758a5.239 5.239 0 01-4.742 3 5.239 5.239 0 01-4.742-3H1.5v2.25zM12 10.5a3.754 3.754 0 00-3.75 3.75A3.754 3.754 0 0012 18a3.754 3.754 0 003.75-3.75A3.754 3.754 0 0012 10.5zM22.5 15V8.25A2.252 2.252 0 0020.25 6H3.75A2.252 2.252 0 001.5 8.25V15h5.307a5.054 5.054 0 01-.057-.75A5.256 5.256 0 0112 9a5.256 5.256 0 015.25 5.25c0 .246-.019.497-.057.75H22.5zM18 4.5V3h-3v1.5h3z"}}),_c('circle',{attrs:{"cx":"18.75","cy":"8.25","r":"1.125"}}),_c('path',{attrs:{"d":"M4.5 9a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5H4.5z"}})])
          )
        }
      }
    
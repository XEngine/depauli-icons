
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
            children.concat([_c('path',{attrs:{"d":"M4.25 24.013a2.754 2.754 0 01-2.75-2.75v-7.5a4.756 4.756 0 014.75-4.75h2v-.75a2.252 2.252 0 012.25-2.25h.75V4.739L.944 7.487a.75.75 0 01-.387-1.449L11.25 3.186v-.923a.75.75 0 011.5 0v.524L23.057.039a.75.75 0 11.386 1.448L12.75 4.339v1.674h.75a2.252 2.252 0 012.25 2.25v.75h2a4.756 4.756 0 014.75 4.75v7.5a2.754 2.754 0 01-2.75 2.75H4.25zM3 21.263c0 .689.561 1.25 1.25 1.25h15.5c.689 0 1.25-.561 1.25-1.25v-3.25H3v3.25zm18-4.75v-2.75a3.254 3.254 0 00-3.25-3.25h-5v6H21zm-9.75 0v-6h-5A3.254 3.254 0 003 13.763v2.75h8.25zm3-7.5v-.75a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v.75h4.5z"}})])
          )
        }
      }
    
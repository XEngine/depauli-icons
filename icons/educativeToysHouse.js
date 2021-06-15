
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
            children.concat([_c('path',{attrs:{"d":"M20.25 17.25a.75.75 0 01-.75-.75v-3.75a.75.75 0 00-.75-.75H5.25a.75.75 0 00-.75.75v3.75a.75.75 0 01-1.5 0v-3.75a2.252 2.252 0 012.25-2.25H7.5v-3A1.502 1.502 0 016 5.911c.024-.397.2-.762.496-1.028l4.99-4.68a.749.749 0 011.027 0l5 4.689c.309.275.49.683.489 1.113a1.487 1.487 0 01-.442 1.059 1.493 1.493 0 01-1.058.436H16.5v3h2.25A2.252 2.252 0 0121 12.75v3.75a.75.75 0 01-.75.75zM15 10.5v-3H9v3h6zM7.513 5.986L16.5 6 12 1.778 7.513 5.986z"}}),_c('path',{attrs:{"d":"M15 24a.75.75 0 01-.75-.75V19.5A2.252 2.252 0 0012 17.25a2.252 2.252 0 00-2.25 2.25v3.75A.75.75 0 019 24H1.5C.673 24 0 23.327 0 22.5v-2.25c0-.827.673-1.5 1.5-1.5h6.827c.351-1.732 1.874-3 3.673-3s3.323 1.268 3.673 3H22.5c.827 0 1.5.673 1.5 1.5v2.25c0 .827-.673 1.5-1.5 1.5H15zm7.5-1.5v-2.25h-6.75v2.25h6.75zm-21 0h6.75v-2.25H1.5v2.25z"}})])
          )
        }
      }
    
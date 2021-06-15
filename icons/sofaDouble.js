
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
            children.concat([_c('path',{attrs:{"d":"M20.25 19.875a.75.75 0 01-.75-.75v-1.5h-15v1.5a.75.75 0 01-1.5 0v-1.577a3.743 3.743 0 01-3-3.673v-3c0-.978.634-1.835 1.544-2.136.317-2.608 2.553-4.614 5.206-4.614h10.5c2.653 0 4.889 2.006 5.206 4.614A2.254 2.254 0 0124 10.875v3a3.743 3.743 0 01-3 3.673v1.577a.75.75 0 01-.75.75zm-18-9.75a.75.75 0 00-.75.75v3a2.252 2.252 0 002.25 2.25h16.5a2.252 2.252 0 002.25-2.25v-3a.75.75 0 00-1.5 0v1.5c0 .827-.673 1.5-1.5 1.5h-15c-.827 0-1.5-.673-1.5-1.5v-1.5a.75.75 0 00-.75-.75zm17.25 2.25v-1.5c0-.938.592-1.773 1.448-2.101-.291-1.788-1.861-3.149-3.698-3.149h-4.5v6.75h6.75zM3.052 8.774A2.262 2.262 0 014.5 10.875v1.5h6.75v-6.75h-4.5a3.77 3.77 0 00-3.698 3.149z"}})])
          )
        }
      }
    
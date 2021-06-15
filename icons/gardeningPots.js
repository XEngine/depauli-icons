
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
            children.concat([_c('path',{attrs:{"d":"M8.037 23.5a2.237 2.237 0 01-2.224-1.908L4.591 13.65A2.246 2.246 0 013 11.5c0-1.219.974-2.214 2.184-2.249L4.591 5.4A2.246 2.246 0 013 3.25 2.252 2.252 0 015.25 1h13.5A2.252 2.252 0 0121 3.25c0 1-.655 1.865-1.591 2.15l-.593 3.851A2.253 2.253 0 0121 11.5c0 1-.655 1.865-1.591 2.15l-1.218 7.942a2.237 2.237 0 01-2.224 1.908h-7.93zm-.742-2.136a.747.747 0 00.741.636h7.931a.746.746 0 00.742-.636l1.168-7.614H6.124l1.171 7.614zM5.25 10.75a.75.75 0 000 1.5h13.5a.75.75 0 000-1.5H5.25zm12.048-1.5l.577-3.75H6.124l.577 3.75h10.597zM5.25 2.5a.75.75 0 000 1.5h13.5a.75.75 0 000-1.5H5.25z"}})])
          )
        }
      }
    
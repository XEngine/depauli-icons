
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
            children.concat([_c('path',{attrs:{"d":"M9.311 21a2.233 2.233 0 01-1.591-.659L.44 13.06A1.483 1.483 0 010 12.001c0-.4.155-.777.438-1.06L7.72 3.659A2.231 2.231 0 019.31 3h12.128a2.252 2.252 0 012.25 2.25v13.5a2.252 2.252 0 01-2.25 2.25H9.311zM9.31 4.5c-.2 0-.389.078-.53.219L1.5 12l7.28 7.281c.14.139.333.219.53.219h12.129a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75H9.31z"}})])
          )
        }
      }
    
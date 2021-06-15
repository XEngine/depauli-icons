
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
            children.concat([_c('path',{attrs:{"d":"M6.5 14.25a.75.75 0 010-1.5h1.498V6.454c0-.446.131-.877.378-1.248l1.001-1.495a.746.746 0 00.123-.412V2.25A2.252 2.252 0 0111.75 0 2.252 2.252 0 0114 2.25V3.3c0 .148.042.291.124.415l.997 1.49c.248.372.379.803.379 1.249v6.296H17a.75.75 0 010 1.5H6.5zm7.5-1.5V6.454a.753.753 0 00-.126-.416l-.999-1.493a2.244 2.244 0 01-.375-1.247V2.25a.75.75 0 00-1.5 0V3.3c0 .444-.13.873-.375 1.243L9.623 6.039a.752.752 0 00-.125.415v6.296H14zM8.75 17.25a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM10.25 24a.75.75 0 010-1.5h1.5a.75.75 0 00.75-.75v-1.5H8.75a.75.75 0 010-1.5h6a.75.75 0 010 1.5H14v1.5A2.252 2.252 0 0111.75 24h-1.5z"}})])
          )
        }
      }
    
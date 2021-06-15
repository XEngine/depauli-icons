
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
            children.concat([_c('path',{attrs:{"d":"M19.5 24a.75.75 0 01-.75-.75v-21A.75.75 0 0018 1.5H7.23a.753.753 0 00-.736.603l-.369 1.843 5.306 1.327c.194.048.358.17.461.342a.748.748 0 01-.825 1.112l-2.393-.598-3.01 6.621H6.75a.75.75 0 01.712.988l-.712 2.134V18h3c.262 0 .5.133.638.355.138.223.15.496.033.73l-2.25 4.5a.749.749 0 01-1.007.336.752.752 0 01-.336-1.006L8.536 19.5H6a.75.75 0 01-.75-.75v-3c0-.081.013-.161.039-.238l.421-1.262H4.5a.744.744 0 01-.63-.344.743.743 0 01-.053-.716l3.377-7.43-2.126-.532a.75.75 0 01-.554-.875l.509-2.544A2.257 2.257 0 017.23 0H18a2.252 2.252 0 012.25 2.25v21a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    
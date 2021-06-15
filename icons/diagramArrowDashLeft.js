
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
            children.concat([_c('path',{attrs:{"d":"M7.336 18.37c-.175 0-.441-.052-.711-.302l-6.1-5.322a1.502 1.502 0 01-.02-2.27l6.124-5.674c.269-.25.535-.302.711-.302.155 0 .279.04.355.073.13.057.556.293.556.938v2.36h5.25a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75V6.734l-5.24 4.855 5.235 4.591v-1.56a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-5.25v1.99c0 .644-.425.88-.555.937a.893.893 0 01-.355.073zM16.501 9.371a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5h-2.25zM21.001 9.371a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5h-2.25zM16.501 15.371a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5h-2.25zM21.001 15.371a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5h-2.25z"}})])
          )
        }
      }
    
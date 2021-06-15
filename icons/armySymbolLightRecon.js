
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
            children.concat([_c('path',{attrs:{"d":"M2.25 20.5c-.413 0-.82-.115-1.175-.334l-.014-.009A2.239 2.239 0 010 18.25v-12A2.252 2.252 0 012.25 4h19.5a2.238 2.238 0 011.233.37A2.242 2.242 0 0124 6.25v12a2.252 2.252 0 01-2.25 2.25H2.25zm19.5-1.5a.75.75 0 00.75-.75v-12a.746.746 0 00-.052-.274L3.506 19H21.75zM2.25 5.5a.75.75 0 00-.75.75v12a.76.76 0 00.051.273L20.494 5.5H2.25z"}})])
          )
        }
      }
    
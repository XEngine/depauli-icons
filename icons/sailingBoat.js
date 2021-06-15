
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
            children.concat([_c('path',{attrs:{"d":"M2.061 23.999A1.502 1.502 0 01.89 21.563l1.8-2.25a1.493 1.493 0 011.169-.563h13.142v-2.352H7.975a1.492 1.492 0 01-1.42-1.014 1.491 1.491 0 01.072-1.146L13.269.67A1.208 1.208 0 0114.34.003a1.2 1.2 0 011.07.663c.695 1.397 2.971 6.598 3.087 14.9a.738.738 0 01.001.146c.002.169.003.339.003.51v2.527h3c.827 0 1.5.673 1.5 1.5a3.754 3.754 0 01-3.75 3.75H2.061zm.001-1.499h17.189a2.252 2.252 0 002.25-2.25H3.862l-1.8 2.25zm5.913-7.603h9.007c-.195-6.721-1.833-11.176-2.646-12.993L7.975 14.897z"}})])
          )
        }
      }
    

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
            children.concat([_c('path',{attrs:{"d":"M10.496 24.002c-.416 0-.817-.175-1.099-.48L.584 13.52c-.792-.848-.789-2.193.014-3.054L9.386.492a1.508 1.508 0 011.056-.493l.052-.001a1.5 1.5 0 011.504 1.504v2.996h9.75a2.252 2.252 0 012.25 2.25l-.002 6a6.758 6.758 0 01-6.75 6.75h-5.25V22.5c.001.399-.154.775-.436 1.06a1.487 1.487 0 01-1.059.442h-.005zm.001-22.505L1.71 11.473a.762.762 0 00-.015 1.039l8.8 9.987a.066.066 0 00.009-.002l-.007-3.75a.75.75 0 01.75-.75h5.25v-3.75a2.252 2.252 0 012.25-2.25h3.75l.002-5.25a.75.75 0 00-.75-.75h-10.5a.75.75 0 01-.75-.75V1.122l-.002.375zm8.25 12a.75.75 0 00-.75.75v3.695a5.265 5.265 0 004.445-4.445h-3.695z"}})])
          )
        }
      }
    

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
            children.concat([_c('path',{attrs:{"d":"M19.498 23.998a1.494 1.494 0 01-.879-.286l-6.177-4.493a.748.748 0 00-.882 0l-6.177 4.492a1.49 1.49 0 01-.881.286c-.479 0-.934-.231-1.215-.617A1.49 1.49 0 013 22.502V2.25A2.252 2.252 0 015.25 0h13.5A2.252 2.252 0 0121 2.25V22.5a1.504 1.504 0 01-1.5 1.499h-.002zM4.5 22.5l6.177-4.493A2.238 2.238 0 0112 17.576c.478 0 .935.149 1.323.431l6.177 4.492v-3.717l-7.059-5.134a.746.746 0 00-.882 0L4.5 18.782V22.5zm0-5.573l6.177-4.492A2.238 2.238 0 0112 12.004c.477 0 .935.149 1.323.431l6.177 4.492v-3.796l-7.059-5.133a.745.745 0 00-.882.001L4.5 13.132v3.795zM12 6.354c.478 0 .935.149 1.323.431l6.177 4.492V2.25a.75.75 0 00-.75-.75H5.25a.75.75 0 00-.75.75v9.027l6.177-4.492A2.238 2.238 0 0112 6.354z"}})])
          )
        }
      }
    
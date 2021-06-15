
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
            children.concat([_c('path',{attrs:{"d":"M21.75 24a2.227 2.227 0 01-1.5-.575 2.227 2.227 0 01-1.5.575H5.25a2.227 2.227 0 01-1.5-.575 2.227 2.227 0 01-1.5.575A2.252 2.252 0 010 21.75V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v19.5A2.252 2.252 0 0121.75 24zm-1.5-13.5a.75.75 0 01.75.75v10.5a.75.75 0 001.5 0V6H18v15.75a.75.75 0 001.5 0v-10.5a.75.75 0 01.75-.75zm-3.621 12a2.231 2.231 0 01-.129-.75V6h-9v15.75c0 .259-.044.511-.129.75h9.258zM3.75 10.5a.75.75 0 01.75.75v10.5a.75.75 0 001.5 0V6H1.5v15.75a.75.75 0 001.5 0v-10.5a.75.75 0 01.75-.75zm18.75-6V2.25a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75V4.5h21z"}})])
          )
        }
      }
    
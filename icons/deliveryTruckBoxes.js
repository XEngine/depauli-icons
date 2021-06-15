
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
            children.concat([_c('path',{attrs:{"d":"M18.75 23.25A2.252 2.252 0 0116.5 21v-.75h-9V21c0 1.241-1.009 2.25-2.25 2.25S3 22.241 3 21v-.75h-.75a.75.75 0 010-1.5h1.5v-12H1.5V9h.75a.75.75 0 010 1.5H1.5C.673 10.5 0 9.827 0 9V6.75c0-.827.673-1.5 1.5-1.5h2.25V2.461c0-.943.768-1.711 1.711-1.711h13.078c.943 0 1.711.768 1.711 1.711V5.25h2.25c.827 0 1.5.673 1.5 1.5V9c0 .827-.673 1.5-1.5 1.5h-.75a.75.75 0 010-1.5h.75V6.75h-2.25v12h1.5a.75.75 0 010 1.5H21V21a2.252 2.252 0 01-2.25 2.25zM18 21a.75.75 0 001.5 0v-.75H18V21zM4.5 21A.75.75 0 006 21v-.75H4.5V21zm14.25-2.25V8.25H5.25v10.5h1.5v-3c0-.827.673-1.5 1.5-1.5H9v-3c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v3h.75c.827 0 1.5.673 1.5 1.5v3h1.5zm-3 0v-3h-3v3h3zm-7.5 0h3v-3h-3v3zm2.25-4.5h3v-3h-3v3zm8.25-7.5v-1.5H5.25v1.5h13.5zm0-3V2.461a.212.212 0 00-.211-.211H5.461a.212.212 0 00-.211.211V3.75h13.5z"}})])
          )
        }
      }
    

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
            children.concat([_c('path',{attrs:{"d":"M2.054 24A2.056 2.056 0 010 21.946V2.054C0 .921.921 0 2.054 0h19.892C23.079 0 24 .921 24 2.054v19.892A2.056 2.056 0 0121.946 24H2.054zm0-22.5a.555.555 0 00-.554.554v19.892c0 .305.249.554.554.554h19.892a.555.555 0 00.554-.554V2.054a.555.555 0 00-.554-.554H2.054z"}}),_c('path',{attrs:{"d":"M8.826 14.632c-.22 0-.439-.053-.633-.154a1.26 1.26 0 01-.693-1.107V6.733c.009-.486.278-.915.703-1.127a1.383 1.383 0 011.256.005l6.347 3.312c.275.128.506.383.619.694a1.259 1.259 0 01-.648 1.566l-6.323 3.298c-.194.099-.41.151-.628.151zM9 13.026l5.715-2.981L9 7.063v5.963zM15.75 21a.75.75 0 01-.75-.75v-.75H3.75a.75.75 0 010-1.5H15v-.75a.75.75 0 011.5 0V18h3.75a.75.75 0 010 1.5H16.5v.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    
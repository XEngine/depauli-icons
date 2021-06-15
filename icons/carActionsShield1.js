
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
            children.concat([_c('path',{attrs:{"d":"M17.25 23.25a.758.758 0 01-.165-.018 8.366 8.366 0 01-6.585-8.233V12.75a2.252 2.252 0 012.25-2.25h9A2.252 2.252 0 0124 12.75v2.249c.008 3.917-2.762 7.38-6.587 8.233a.727.727 0 01-.163.018zM12.75 12a.75.75 0 00-.75.75V15a6.887 6.887 0 005.25 6.729c3.054-.76 5.256-3.575 5.25-6.728V12.75a.75.75 0 00-.75-.75h-9z"}}),_c('path',{attrs:{"d":"M17.25 19.5a.75.75 0 01-.75-.75v-1.5H15a.75.75 0 010-1.5h1.5v-1.5a.75.75 0 011.5 0v1.5h1.5a.75.75 0 010 1.5H18v1.5a.75.75 0 01-.75.75zM4.125 11.25a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.701.701 0 010-.262c.06-.513.47-.922.982-.982a.701.701 0 01.262 0c.513.06.922.47.982.982a.71.71 0 010 .262c-.06.513-.47.922-.982.982a.701.701 0 01-.131.012z"}}),_c('path',{attrs:{"d":"M3 17.25A2.252 2.252 0 01.75 15v-1.325A2.227 2.227 0 01-.002 12V9.75c0-1.555.958-2.94 2.402-3.497l1.615-3.6C4.437 1.524 5.562.75 6.806.75h8.885c1.245 0 2.375.782 2.811 1.947L20.1 6.253c.8.309 1.47.88 1.898 1.622a.75.75 0 01-1.3.75A2.255 2.255 0 0018.75 7.5H3.748a2.252 2.252 0 00-2.25 2.25V12c0 .414.336.75.75.75h6a.75.75 0 010 1.5H5.25V15A2.252 2.252 0 013 17.25zM2.25 15a.75.75 0 001.5 0v-.75h-1.5V15zm16.092-9l-1.226-2.733c-.235-.621-.792-1.012-1.428-1.017H6.807c-.622 0-1.186.391-1.404.973L4.158 6h14.184z"}})])
          )
        }
      }
    
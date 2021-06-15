
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
            children.concat([_c('path',{attrs:{"d":"M17.25 23.25a6.708 6.708 0 01-4.749-1.957l-.024-.022a6.684 6.684 0 01-1.978-4.771 6.758 6.758 0 016.75-6.75 6.706 6.706 0 014.778 1.984l.023.026A6.691 6.691 0 0124 16.5a6.758 6.758 0 01-6.75 6.75zm-3.142-2.549a5.239 5.239 0 003.142 1.049 5.256 5.256 0 005.25-5.25c0-1.135-.37-2.236-1.048-3.141l-7.344 7.342zm3.142-9.451A5.256 5.256 0 0012 16.5c0 1.135.37 2.236 1.048 3.141l7.344-7.343a5.244 5.244 0 00-3.142-1.048zM4.125 11.25a.717.717 0 01-.131-.012 1.125 1.125 0 01-.982-.982.717.717 0 010-.262c.06-.513.47-.922.982-.982a.701.701 0 01.262 0c.513.06.922.47.982.982a.71.71 0 010 .262c-.06.513-.47.922-.982.982a.701.701 0 01-.131.012z"}}),_c('path',{attrs:{"d":"M3 17.25A2.252 2.252 0 01.75 15v-1.325A2.227 2.227 0 01-.002 12V9.75c0-1.555.958-2.94 2.402-3.497l1.615-3.6C4.438 1.524 5.564.75 6.807.75h8.883c1.247 0 2.375.782 2.811 1.947L20.1 6.254c.799.309 1.469.88 1.896 1.622a.752.752 0 01-.274 1.025.752.752 0 01-1.024-.276A2.255 2.255 0 0018.75 7.5H3.748a2.252 2.252 0 00-2.25 2.25V12c0 .414.336.75.75.75h6a.75.75 0 010 1.5H5.25V15A2.252 2.252 0 013 17.25zM2.25 15a.75.75 0 001.5 0v-.75h-1.5V15zm16.093-9l-1.227-2.733c-.233-.617-.801-1.017-1.422-1.017H6.808a1.51 1.51 0 00-1.406.973L4.158 6h14.185z"}})])
          )
        }
      }
    
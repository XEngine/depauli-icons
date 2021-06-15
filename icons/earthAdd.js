
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
            children.concat([_c('path',{attrs:{"d":"M9.654 23.747a.762.762 0 01-.157-.017 11.852 11.852 0 01-6.759-4.108l-.003-.004a15.35 15.35 0 01-.416-.535l-.06-.081A11.89 11.89 0 01.65 15.901l-.022-.063a11.682 11.682 0 01-.165-.523l-.009-.034a11.768 11.768 0 01-.308-1.403l-.026-.164a11.077 11.077 0 01-.042-.325l-.015-.14A11.965 11.965 0 010 12.157v-.107c0-.12 0-.239.004-.359l.003-.076c.007-.216.021-.439.041-.661l.013-.141c.01-.105.023-.209.036-.314.008-.066.018-.131.027-.197.019-.135.041-.27.065-.404a11.124 11.124 0 01.076-.408 11.926 11.926 0 015.208-7.566A11.931 11.931 0 0114.506.257a12.026 12.026 0 019.389 10.14.741.741 0 01-.147.555.745.745 0 01-.594.294.754.754 0 01-.745-.65 10.502 10.502 0 00-1.794-4.599h-3.691a.75.75 0 00-.728.568l-.644 2.577a.747.747 0 01-.91.545.748.748 0 01-.545-.909l.644-2.577a2.247 2.247 0 012.183-1.704h2.422a10.556 10.556 0 00-5.152-2.773A10.451 10.451 0 006.29 3.182a10.453 10.453 0 00-4.351 5.815h4.392c1.034 0 1.932.701 2.183 1.704l.75 3a2.235 2.235 0 01-.592 2.137c-.425.425-.99.659-1.591.659h-.464l-.798 3.993a10.412 10.412 0 003.991 1.774.752.752 0 01.577.89.754.754 0 01-.733.593zM1.501 12.213c.008.435.044.873.106 1.302l.006.037c.028.187.062.375.101.562l.024.115c.037.169.078.336.123.503l.029.11c.052.184.111.373.175.561l.047.128.029.079c.041.11.082.22.126.329.039.095.08.189.121.284l.107.235c.049.103.098.207.151.309a10.436 10.436 0 00.405.716l.045.074c.036.058.071.117.109.174.03.046.062.091.093.136l.044.064c.079.115.16.231.245.344l.084.111c.262.34.545.664.845.968l.75-3.753a.752.752 0 01.735-.603H7.08a.75.75 0 00.728-.933l-.75-3a.75.75 0 00-.728-.568H1.609c-.049.34-.082.682-.098 1.021l-.376.023.375.016c-.009.213-.012.424-.009.629l-.374.034.374-.007z"}}),_c('path',{attrs:{"d":"M17.253 23.997c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75 6.75 3.028 6.75 6.75-3.029 6.75-6.75 6.75zm0-12c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25-2.356-5.25-5.25-5.25z"}}),_c('path',{attrs:{"d":"M17.253 20.997a.75.75 0 01-.75-.75v-2.25h-2.25a.75.75 0 010-1.5h2.25v-2.25a.75.75 0 011.5 0v2.25h2.25a.75.75 0 010 1.5h-2.25v2.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    

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
            children.concat([_c('path',{attrs:{"d":"M3 23.25A2.252 2.252 0 01.75 21v-4.5A2.252 2.252 0 013 14.25h3.832c.268 0 .518.145.651.378a5.202 5.202 0 004.508 2.622 5.22 5.22 0 004.526-2.622.753.753 0 01.651-.378H21a2.252 2.252 0 012.25 2.25V21A2.252 2.252 0 0121 23.25H3zm0-7.5a.75.75 0 00-.75.75V21c0 .414.336.75.75.75h18a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-3.413a6.663 6.663 0 01-5.597 2.999 6.691 6.691 0 01-5.576-2.999H3zM12 12.75a.76.76 0 01-.433-.139l-.023-.016-3.763-3.009A.752.752 0 018.25 8.25c.169 0 .336.058.468.164l2.532 2.025V1.5a.75.75 0 011.5 0v8.939l2.531-2.025a.754.754 0 011.055.117.75.75 0 01-.117 1.054l-3.75 3a.754.754 0 01-.469.165z"}})])
          )
        }
      }
    
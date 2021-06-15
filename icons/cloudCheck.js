
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
            children.concat([_c('path',{attrs:{"d":"M17.247 24.002c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75 6.75 3.028 6.75 6.75-3.028 6.75-6.75 6.75zm0-12c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25-2.355-5.25-5.25-5.25z"}}),_c('path',{attrs:{"d":"M16.419 20.431a1.482 1.482 0 01-1.058-.44l-1.5-1.5a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l1.5 1.5 2.899-3.873a.753.753 0 011.049-.151.752.752 0 01.152 1.051l-2.9 3.874a1.489 1.489 0 01-1.202.6zM8.237 16.502A8.254 8.254 0 01.13 9.777a8.196 8.196 0 011.297-6.18A8.19 8.19 0 016.713.144a8.246 8.246 0 019.382 5.591 5.642 5.642 0 012.286-.487 5.618 5.618 0 015.444 4.225.75.75 0 01-1.453.373 4.117 4.117 0 00-6.337-2.364.744.744 0 01-.712.077.748.748 0 01-.452-.555A6.753 6.753 0 006.99 1.617a6.71 6.71 0 00-4.322 2.828 6.7 6.7 0 00-1.064 5.054 6.754 6.754 0 006.634 5.503h.01a.75.75 0 01.75.749.76.76 0 01-.756.751h-.005z"}})])
          )
        }
      }
    
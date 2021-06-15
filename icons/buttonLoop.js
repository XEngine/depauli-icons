
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
            children.concat([_c('path',{attrs:{"d":"M17.943 18.496a6.351 6.351 0 01-4.645-2.548.752.752 0 01.602-1.197c.236 0 .461.113.602.302a4.857 4.857 0 003.525 1.946 4.508 4.508 0 004.473-4.5c0-2.481-2.019-4.5-4.5-4.5-3.2 0-5.29 4.748-5.311 4.796-.1.233-2.498 5.704-6.689 5.704-3.308 0-6-2.692-6-6a6.007 6.007 0 016.052-5.998 6.364 6.364 0 014.65 2.553.746.746 0 01-.602 1.198.753.753 0 01-.602-.303 4.86 4.86 0 00-3.525-1.951 4.508 4.508 0 00-4.473 4.5c0 2.481 2.019 4.5 4.5 4.5 3.197 0 5.29-4.748 5.311-4.796.1-.232 2.495-5.704 6.689-5.704 3.308 0 6 2.692 6 6a6.007 6.007 0 01-6.057 5.998z"}})])
          )
        }
      }
    
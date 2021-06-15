
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
            children.concat([_c('path',{attrs:{"d":"M21.7 24a.75.75 0 01-.75-.75 8.93 8.93 0 00-3.156-6.837l-2.9 7.12a.748.748 0 01-.978.412.746.746 0 01-.411-.977l2.723-6.686-7.499 7.498a.741.741 0 01-.53.22.752.752 0 01-.53-1.281l3.22-3.22-3.812-3.812C4.524 17.34 2.95 20.211 2.95 23.25a.75.75 0 01-1.5 0 10.527 10.527 0 015.441-9.198 10.497 10.497 0 015.059-1.303 10.496 10.496 0 015.89 1.812c.05.028.095.06.135.095a10.518 10.518 0 014.475 8.592.75.75 0 01-.75.752zm-9.751-5.561l3.486-3.486a8.882 8.882 0 00-3.484-.703 8.889 8.889 0 00-3.486.704l3.484 3.485zM11.949 12c-3.308 0-6-2.692-6-6a.75.75 0 010-1.5h.19a6.022 6.022 0 015.81-4.5 6.022 6.022 0 015.81 4.5h.713l2.061-1.374a.753.753 0 011.04.208.748.748 0 01-.208 1.04l-1.699 1.133 1.204 2.408a.751.751 0 01-1.342.67L18.236 6h-.287c0 3.308-2.691 6-6 6zm-4.5-6c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5h-9zm8.739-1.5c-.629-1.788-2.309-3-4.238-3s-3.61 1.212-4.238 3h8.476z"}}),_c('path',{attrs:{"d":"M11.199 9a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    
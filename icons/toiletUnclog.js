
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24.003a.75.75 0 010-1.5h.793a7.46 7.46 0 015.244-6.408 2.257 2.257 0 011.463-1.713V8.874a2.26 2.26 0 01-1.5-2.121v-4.5A2.252 2.252 0 0112 .003a2.252 2.252 0 012.25 2.25v4.5c0 .96-.615 1.808-1.5 2.121v5.508a2.256 2.256 0 011.463 1.713 7.458 7.458 0 015.244 6.408h.793a.75.75 0 010 1.5H3.75zm14.204-1.5c-.309-2.517-2.135-4.539-4.65-5.098a.75.75 0 01-.563-.923l.008-.032a.755.755 0 00-.748-.698.754.754 0 00-.748.698l.007.03a.752.752 0 01-.563.925c-2.515.559-4.341 2.581-4.65 5.098h11.907zM12 1.503a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75z"}})])
          )
        }
      }
    
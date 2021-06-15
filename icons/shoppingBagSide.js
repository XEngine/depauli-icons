
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
            children.concat([_c('path',{attrs:{"d":"M2.451 24A2.253 2.253 0 01.22 21.459l1.858-14.25A2.256 2.256 0 014.309 5.25h3.183V3.753A3.746 3.746 0 019.162.629a.749.749 0 11.832 1.248 2.245 2.245 0 00-1.001 1.875V5.25h2.25v-1.5c0-2.068 1.682-3.75 3.75-3.75s3.75 1.682 3.75 3.75v1.5h.933c1.126 0 2.085.843 2.231 1.959l1.859 14.25a2.232 2.232 0 01-.448 1.663 2.236 2.236 0 01-1.784.878H2.451zm19.083-1.5a.744.744 0 00.595-.292.744.744 0 00.149-.554l-1.859-14.25a.752.752 0 00-.744-.653h-.933v3.75a.75.75 0 01-1.5 0V6.75h-3a.75.75 0 010-1.5h3v-1.5c0-1.241-1.009-2.25-2.25-2.25s-2.25 1.009-2.25 2.25v6.75a.75.75 0 01-1.5 0V6.75H7.546c.053.149.09.302.111.459L9.651 22.5h11.883zM4.31 6.75a.752.752 0 00-.744.653l-1.858 14.25a.75.75 0 00.744.847H8.14L6.169 7.403a.751.751 0 00-.743-.653H4.31z"}})])
          )
        }
      }
    
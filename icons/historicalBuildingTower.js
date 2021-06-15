
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h2.321l1.35-13.502A1.502 1.502 0 013 7.5v-6C3 .673 3.673 0 4.5 0h2.25c.827 0 1.5.673 1.5 1.5v.75a.75.75 0 001.5 0V1.5c0-.827.673-1.5 1.5-1.5h1.5c.827 0 1.5.673 1.5 1.5v.75a.75.75 0 001.5 0V1.5c0-.827.673-1.5 1.5-1.5h2.25c.827 0 1.5.673 1.5 1.5v6c0 .801-.631 1.457-1.422 1.498l1.35 13.502h2.321a.75.75 0 01.001 1.5H.75zm18.671-1.5L18.071 9H5.929l-1.35 13.5H9V18c0-1.654 1.346-3 3-3s3 1.346 3 3v4.5h4.421zm-5.921 0V18c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v4.5h3zm-9-15h15v-6h-2.25v.75c0 1.241-1.009 2.25-2.25 2.25s-2.25-1.009-2.25-2.25V1.5h-1.5v.75c0 1.241-1.009 2.25-2.25 2.25S6.75 3.491 6.75 2.25V1.5H4.5v6z"}})])
          )
        }
      }
    
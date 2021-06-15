
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
            children.concat([_c('path',{attrs:{"d":"M9 24a.75.75 0 01-.75-.75v-1.5c0-.962-.621-1.808-1.5-2.121v3.621A.75.75 0 016 24H3a2.252 2.252 0 01-2.25-2.25V3c0-.148.043-.292.126-.416C.946 2.479 2.653 0 7.5 0c4.85 0 6.554 2.479 6.624 2.584a.748.748 0 01.094.632c-.221.736-.549 1.574-.896 2.461-.9 2.299-2.134 5.448-1.178 6.849.441.646 1.402.974 2.856.974 3.9 0 7.3 2.772 8.083 6.591l.006.031c.107.529.162 1.079.162 1.627a2.252 2.252 0 01-2.25 2.25H9zm12-1.5a.75.75 0 00.75-.75c0-.249-.014-.5-.042-.75H9.672c.052.248.078.499.078.75v.75H21zm-18.75-.75c0 .414.336.75.75.75h2.25V21h-3v.75zm19.113-2.25A6.768 6.768 0 0015 15c-1.98 0-3.357-.548-4.095-1.629-1.402-2.055-.115-5.342 1.02-8.241.274-.701.535-1.366.732-1.955C12.113 2.637 10.593 1.5 7.5 1.5c-3.307 0-4.825 1.316-5.25 1.77V19.5h3v-.75A.75.75 0 016 18c1.183 0 2.289.557 2.998 1.5h12.365z"}})])
          )
        }
      }
    
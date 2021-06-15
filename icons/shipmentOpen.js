
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
            children.concat([_c('path',{attrs:{"d":"M6 19.88a2.252 2.252 0 01-2.25-2.25v-6.75H1.302c-.463 0-.891-.245-1.125-.638a1.274 1.274 0 01.015-1.318l2.94-4.468a.712.712 0 01.265-.236.497.497 0 01.155-.062.786.786 0 01.184-.028l17.606-.01a.752.752 0 01.696.465l1.868 4.5a1.305 1.305 0 01-1.205 1.795H22.5v6.75a2.252 2.252 0 01-2.25 2.25H6zm14.25-1.5a.75.75 0 00.75-.75v-6.75h-4.707a1.497 1.497 0 01-1.385-.923l-1.737-4.332-7.921.004V17.63c0 .414.336.75.75.75h6.75v-6.01a.75.75 0 011.5 0v6.01h6zm-3.954-8.991l6.108-.009-1.561-3.76-6.056.003 1.509 3.766zM3.75 9.38V6.244L1.687 9.38H3.75z"}})])
          )
        }
      }
    
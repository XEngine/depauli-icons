
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24c-.96 0-1.808-.615-2.121-1.5H7.371C7.058 23.385 6.21 24 5.25 24s-1.808-.615-2.121-1.5H2.25A2.252 2.252 0 010 20.25V18c0-1.86 1.39-3.444 3.206-3.711l1.672-4.711a.587.587 0 01.037-.086 2.3 2.3 0 01.13-.225A1.75 1.75 0 014.5 8V5.5c0-.887.663-1.622 1.52-1.735A1.787 1.787 0 016 3.5V1.75C6 .785 6.785 0 7.75 0h5.5C14.215 0 15 .785 15 1.75V3.5c0 .09-.007.178-.02.265.857.113 1.52.848 1.52 1.735V8c0 .28-.068.555-.196.802.221.192.403.426.536.691a.946.946 0 01.037.087l1.654 4.67h1.72a3.754 3.754 0 013.75 3.75v2.25a2.252 2.252 0 01-2.25 2.25h-2.379A2.26 2.26 0 0117.25 24zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zm-12 0a.75.75 0 100 1.5.75.75 0 000-1.5zm16.5 0a.75.75 0 00.75-.75V18a2.252 2.252 0 00-2.25-2.25H3.75A2.252 2.252 0 001.5 18v2.25c0 .414.336.75.75.75h.879c.314-.885 1.162-1.5 2.121-1.5s1.808.615 2.121 1.5h7.757c.314-.885 1.162-1.5 2.121-1.5s1.808.615 2.121 1.5h2.38zm-4.811-6.75l-1.459-4.12a.748.748 0 00-.653-.38H12v4.5h4.939zm-6.439 0v-4.5H6.927a.747.747 0 00-.653.381L4.812 14.25H10.5zm4.25-6A.25.25 0 0015 8V5.5a.25.25 0 00-.25-.25H13.5v3h1.25zm-2.75 0v-3H9v3h3zm-5.75-3A.25.25 0 006 5.5V8c0 .138.112.25.25.25H7.5v-3H6.25zm1.5-3.75a.25.25 0 00-.25.25V3.5c0 .138.112.25.25.25h5.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-5.5z"}})])
          )
        }
      }
    
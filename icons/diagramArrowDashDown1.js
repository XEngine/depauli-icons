
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
            children.concat([_c('path',{attrs:{"d":"M11.763 24.005a1.495 1.495 0 01-1.154-.544l-5.324-6.107c-.424-.457-.271-.919-.214-1.049.057-.13.293-.556.938-.556h1.989V10.5a.75.75 0 011.5 0v6a.75.75 0 01-.75.75H7.184l4.568 5.24 4.879-5.24h-1.883a.75.75 0 01-.75-.75v-6a.75.75 0 011.5 0v5.25h2.361c.645 0 .88.426.937.557.057.13.208.593-.231 1.066l-5.686 6.137a1.471 1.471 0 01-1.116.495zM14.748 8.25a.75.75 0 01-.75-.75V5.25a.75.75 0 011.5 0V7.5a.75.75 0 01-.75.75zM14.748 3.75a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0V3a.75.75 0 01-.75.75zM8.748 8.25a.75.75 0 01-.75-.75V5.25a.75.75 0 011.5 0V7.5a.75.75 0 01-.75.75zM8.748 3.75a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0V3a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    

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
            children.concat([_c('path',{attrs:{"d":"M21 23.998a.75.75 0 01-.75-.75v-2.25H3.75v2.25a.75.75 0 01-1.5 0v-2.25H1.5a.75.75 0 010-1.5h.75v-9H1.5a.75.75 0 010-1.5h.75V.748a.75.75 0 011.5 0v8.25h1.5v-6a.75.75 0 01.75-.75h6a.75.75 0 01.75.75v6h2.137a.75.75 0 01-.132-.829l2.842-6.122a.75.75 0 01.996-.364l1.657.769V.748a.75.75 0 011.5 0v8.25h.75a.75.75 0 010 1.5h-.75v9h.75a.75.75 0 010 1.5h-.75v2.25a.75.75 0 01-.75.75zm-.75-4.5v-9h-2.069l-.025.001-.024-.001H3.75v9H6v-6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v.75H12v-.75a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v6h3.75zm-5.25 0v-5.25h-1.5v5.25H15zm-3 0v-3.75h-1.5v3.75H12zm-3 0v-5.25H7.5v5.25H9zm11.25-10.5V7.021l-.918 1.977h.918zm-9 0v-5.25h-1.5v5.25h1.5zm-3 0v-5.25h-1.5v5.25h1.5zm9.542-.245l2.21-4.762-1.361-.632-2.21 4.762 1.361.632z"}})])
          )
        }
      }
    
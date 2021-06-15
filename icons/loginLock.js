
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
            children.concat([_c('path',{attrs:{"d":"M9.8 22.6h-6c-.4 0-.8-.3-.8-.8V2.2c0-.4.3-.8.8-.8h10.5c.4 0 .8.3.8.8v5.2c0 .4.3.8.8.8s.8-.3.8-.8V2.2c0-1.2-1-2.2-2.2-2.2H3.8C2.5 0 1.5 1 1.5 2.2v19.6c0 1.2 1 2.2 2.2 2.2h6c.4 0 .8-.3.8-.8 0-.3-.3-.6-.7-.6z"}}),_c('path',{attrs:{"d":"M4.5 12c0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1-.5-1.1-1.1-1.1-1.1.5-1.1 1.1zM21 15.2v-.9c0-2.1-1.7-3.8-3.8-3.8s-3.8 1.7-3.8 3.8v.9c-.9.3-1.5 1.1-1.5 2.1v4.5c0 1.2 1 2.2 2.2 2.2h6c1.2 0 2.2-1 2.2-2.2v-4.5c0-.9-.4-1.8-1.3-2.1zm-3.8-3.1c1.2 0 2.2 1 2.2 2.2v.8H15v-.8c0-1.2 1-2.2 2.2-2.2zm3.8 9.8c0 .4-.3.8-.8.8h-6c-.4 0-.8-.3-.8-.8v-4.5c0-.4.3-.8.8-.8h6c.4 0 .8.3.8.8v4.5z"}}),_c('path',{attrs:{"d":"M17.2 18.5c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.4-1.1-1.1-1.1z"}})])
          )
        }
      }
    
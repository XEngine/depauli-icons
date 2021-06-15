
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
            children.concat([_c('path',{attrs:{"d":"M21 24a.75.75 0 01-.75-.75V21H3.75v2.25a.75.75 0 01-1.5 0v-18A5.242 5.242 0 016.55.091a.734.734 0 01.182-.029A5.17 5.17 0 017.5 0h9c.239 0 .484.02.768.062.06.002.12.011.182.029a5.242 5.242 0 014.3 5.159v18A.75.75 0 0121 24zm-.75-4.5V5.25A3.768 3.768 0 0018 1.817V19.5h2.25zm-3.75 0v-12h-9v12h9zM6 19.5V1.817A3.768 3.768 0 003.75 5.25V19.5H6zM16.5 6V1.5h-9V6h9z"}}),_c('path',{attrs:{"d":"M10.5 16.5a.754.754 0 01-.643-.364c-.103-.172-.133-.373-.084-.568s.17-.358.342-.461l2.678-1.607-2.678-1.607a.75.75 0 01.77-1.286l3.75 2.25c.225.134.365.381.365.643s-.14.509-.365.643l-3.75 2.25a.742.742 0 01-.385.107z"}})])
          )
        }
      }
    
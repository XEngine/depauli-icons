
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
            children.concat([_c('path',{attrs:{"d":"M12 23.25C5.797 23.25.75 18.203.75 12S5.797.75 12 .75 23.25 5.797 23.25 12 18.203 23.25 12 23.25zm0-21c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25z"}}),_c('circle',{attrs:{"cx":"12","cy":"12","r":"1.5"}}),_c('path',{attrs:{"d":"M12 8.25a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM5.505 16.5a.754.754 0 01-.65-.375.745.745 0 01.274-1.024l2.598-1.5a.754.754 0 011.026.274.745.745 0 01-.274 1.024l-2.598 1.5a.754.754 0 01-.376.101zM18.495 16.5a.748.748 0 01-.375-.101l-2.598-1.5a.75.75 0 01.751-1.298l2.598 1.5a.75.75 0 01-.376 1.399z"}})])
          )
        }
      }
    

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
            children.concat([_c('path',{attrs:{"d":"M12 18.75a.75.75 0 01-.75-.75v-.75H9a.75.75 0 01-.75-.75v-9A.75.75 0 019 6.75h2.25V6a.75.75 0 011.5 0v.75h.75c1.654 0 3 1.346 3 3 0 .863-.38 1.685-1.019 2.25a3.02 3.02 0 011.019 2.25c0 1.654-1.346 3-3 3h-.75V18a.75.75 0 01-.75.75zm1.5-3c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5H9.75v3h3.75zm0-4.5c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5H9.75v3h3.75z"}}),_c('path',{attrs:{"d":"M12 23.25C5.797 23.25.75 18.203.75 12S5.797.75 12 .75 23.25 5.797 23.25 12 18.203 23.25 12 23.25zm0-21c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25z"}})])
          )
        }
      }
    
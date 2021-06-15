
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
            children.concat([_c('path',{attrs:{"d":"M12 17.25a.75.75 0 01-.75-.75v-.75H9a.75.75 0 01-.75-.75V6A.75.75 0 019 5.25h2.25V4.5a.75.75 0 011.5 0v.75h.75c1.654 0 3 1.346 3 3 0 .863-.38 1.685-1.019 2.25a3.02 3.02 0 011.019 2.25c0 1.654-1.346 3-3 3h-.75v.75a.75.75 0 01-.75.75zm1.5-3c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5H9.75v3h3.75zm0-4.5c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5H9.75v3h3.75z"}}),_c('path',{attrs:{"d":"M12 24a.74.74 0 01-.124-.01A14.213 14.213 0 010 9.938V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v7.688A14.213 14.213 0 0112.125 23.99.761.761 0 0112 24zM2.25 1.5a.75.75 0 00-.75.75v7.688A12.725 12.725 0 0012 22.489 12.725 12.725 0 0022.5 9.938V2.25a.75.75 0 00-.75-.75H2.25z"}})])
          )
        }
      }
    
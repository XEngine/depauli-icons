
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
            children.concat([_c('circle',{attrs:{"cx":"12","cy":"12","r":"1.125"}}),_c('circle',{attrs:{"cx":"4.125","cy":"18.375","r":"1.125"}}),_c('circle',{attrs:{"cx":"19.875","cy":"18.375","r":"1.125"}}),_c('path',{attrs:{"d":"M2.25 23.25A2.252 2.252 0 010 21v-4.8a2.238 2.238 0 011.762-2.193l4.988-1.108V12c0-2.607 1.95-4.824 4.5-5.192V3.75h-.75a.75.75 0 010-1.5h.75V1.5a.75.75 0 011.5 0v.75h.75a.75.75 0 010 1.5h-.75v3.058c2.55.368 4.5 2.584 4.5 5.192v.898l4.988 1.109A2.236 2.236 0 0124 16.198V21a2.252 2.252 0 01-2.25 2.25H2.25zm19.5-1.5a.75.75 0 00.75-.75v-4.8a.746.746 0 00-.587-.729l-4.663-1.036v7.315h4.5zm-6 0V12A3.754 3.754 0 0012 8.25 3.754 3.754 0 008.25 12v9.75h1.5v-4.5A2.252 2.252 0 0112 15a2.252 2.252 0 012.25 2.25v4.5h1.5zm-3 0v-4.5a.75.75 0 00-1.5 0v4.5h1.5zM2.088 15.471a.747.747 0 00-.588.731V21c0 .414.336.75.75.75h4.5v-7.315l-4.662 1.036z"}})])
          )
        }
      }
    
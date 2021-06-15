
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M6.74 24h10.5A6.76 6.76 0 0024 17.25V6.75A6.76 6.76 0 0017.24 0H6.74A6.76 6.76 0 000 6.75v10.5A6.76 6.76 0 006.74 24zM1.49 6.75A5.26 5.26 0 016.74 1.5h10.5a5.26 5.26 0 015.25 5.25v10.5a5.26 5.26 0 01-5.25 5.25H6.74a5.26 5.26 0 01-5.25-5.25z"}}),_c('path',{attrs:{"d":"M12 17.75A5.75 5.75 0 106.24 12 5.76 5.76 0 0012 17.75zm0-10A4.25 4.25 0 117.74 12 4.26 4.26 0 0112 7.75z"}}),_c('circle',{attrs:{"cx":"18.84","cy":"5.15","r":"1.25"}})])
          )
        }
      }
    
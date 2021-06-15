
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
            children.concat([_c('path',{attrs:{"d":"M10.74 24a1.565 1.565 0 01-1.511-1.964l1.842-6.721-4.989-4.945a1.558 1.558 0 01-.092-2.109 1.544 1.544 0 011.058-.545l6.019-.597L16.231.861A1.561 1.561 0 0117.623 0a.752.752 0 01.752.75v19.184c0 .287-.16.545-.417.672l-6.52 3.229a1.552 1.552 0 01-.698.165zm3.479-15.836a.746.746 0 01-.596.408l-6.439.638c-.029.002-.042.013-.05.022a.053.053 0 00-.012.038.057.057 0 00.016.035l5.3 5.253a.75.75 0 01.196.73l-1.956 7.138a.057.057 0 00.008.042c.006.01.018.024.038.03a.121.121 0 00.018.001c.013 0 .02-.002.027-.005l6.107-3.024V2.912l-2.657 5.252z"}})])
          )
        }
      }
    
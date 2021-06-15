
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
            children.concat([_c('path',{attrs:{"d":"M2.25 21A2.252 2.252 0 010 18.75V2.25A2.252 2.252 0 012.25 0h10.629c.601 0 1.165.234 1.59.658l2.872 2.872c.425.425.659.99.659 1.591v6.129a.75.75 0 01-1.5 0V5.121c0-.197-.08-.39-.219-.53l-2.872-2.872a.748.748 0 00-.53-.219H2.25a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75H7.5a.75.75 0 010 1.5H2.25z"}}),_c('path',{attrs:{"d":"M17.25 24a.742.742 0 01-.22-.033l-2.999-.917a.745.745 0 01-.531-.717v-3.438l-1.5-.563v1.918a.75.75 0 01-1.5 0v-3a.74.74 0 01.044-.247.706.706 0 01.226-.326l.041-.032a.69.69 0 01.199-.104l5.979-2.243a.742.742 0 01.526-.001l6 2.25c.289.11.485.392.485.703s-.196.593-.487.702L21 18.895v3.438c0 .332-.213.62-.531.717l-3 .917a.73.73 0 01-.219.033zm0-1.534l2.25-.688v-2.321l-1.987.745a.742.742 0 01-.526 0L15 19.457v2.321l2.25.688zm0-3.767l3.864-1.449-3.864-1.449-3.864 1.449 3.864 1.449zM6.75 15a2.252 2.252 0 01-2.25-2.25 2.252 2.252 0 013-2.121V5.66a1.217 1.217 0 01.471-.91 1.217 1.217 0 01.904-.248c.202.026.396.102.562.221l2.974 1.949a.747.747 0 01.216 1.038.75.75 0 01-1.038.217L9 6.23v6.52A2.252 2.252 0 016.75 15zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    
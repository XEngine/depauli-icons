
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
            children.concat([_c('path',{attrs:{"d":"M15.75 24a.657.657 0 01-.041-.002H14.25a2.252 2.252 0 01-2.25-2.25V17.6l-.256.224a.75.75 0 11-.988-1.129l4.518-3.953c.545-.477 1.246-.74 1.976-.74s1.431.263 1.976.741l4.518 3.953a.748.748 0 11-.987 1.128L22.5 17.6v4.148a2.252 2.252 0 01-2.25 2.25h-1.462L18.75 24h-3zm4.5-1.502a.75.75 0 00.75-.75v-5.46l-2.762-2.417a1.497 1.497 0 00-.988-.37 1.5 1.5 0 00-.988.369L13.5 16.288v5.46c0 .414.336.75.75.75H15V20.25c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v2.248h.75zm-2.25 0V20.25a.75.75 0 00-1.5 0v2.248H18z"}}),_c('path',{attrs:{"d":"M2.25 21A2.252 2.252 0 010 18.75V2.25A2.252 2.252 0 012.25 0h10.629c.601 0 1.165.234 1.59.658l2.872 2.872c.425.425.659.99.659 1.591V9a.75.75 0 01-1.5 0V5.121c0-.197-.08-.39-.219-.53l-2.872-2.872a.748.748 0 00-.53-.219H2.25a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6z"}}),_c('circle',{attrs:{"cx":"5.25","cy":"6","r":"1.125"}}),_c('path',{attrs:{"d":"M3.75 15a.747.747 0 01-.674-1.078l1.937-3.981a1.06 1.06 0 01.127-.193 1.49 1.49 0 011.172-.562c.339 0 .672.117.937.329l.609.489 1.54-2.195a1.488 1.488 0 011.226-.64c.505 0 .972.25 1.25.669l1.888 3.017a.748.748 0 01-.636 1.148.743.743 0 01-.636-.353l-1.876-3-1.988 2.87a.754.754 0 01-1.084.154l-1.225-.984-1.368 2.81H8.25c.414 0 .75.336.75.75S3.75 15 3.75 15z"}})])
          )
        }
      }
    

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
            children.concat([_c('path',{attrs:{"d":"M.752 11.322a.749.749 0 01-.428-1.366l11.25-7.826c.126-.088.274-.134.428-.134s.302.046.428.134l11.25 7.826A.746.746 0 0123.867 11a.751.751 0 01-1.044.188L12.001 3.66 1.179 11.188a.743.743 0 01-.427.134z"}}),_c('path',{attrs:{"d":"M22.846 22.084c-.276 0-.562-.098-.825-.282l-9.649-6.708a.775.775 0 00-.781.02l-9.608 6.689c-.265.184-.55.281-.826.281-.183 0-.357-.042-.515-.125-.405-.212-.637-.646-.637-1.192v-3.3a2.877 2.877 0 011.087-2.127l9.681-6.739c.383-.24.806-.361 1.237-.361.425 0 .839.118 1.196.341l9.674 6.729a2.88 2.88 0 011.121 2.112l.002 3.345c0 .546-.233.981-.64 1.193a1.126 1.126 0 01-.517.124zm-10.845-8.583c.425 0 .839.118 1.196.341l9.303 6.467v-2.846a1.34 1.34 0 00-.513-.947l-9.608-6.683a.723.723 0 00-.37-.096.768.768 0 00-.411.117l-9.615 6.693a1.34 1.34 0 00-.48.962l.001 2.8 9.261-6.446c.382-.24.804-.362 1.236-.362z"}})])
          )
        }
      }
    
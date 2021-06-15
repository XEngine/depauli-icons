
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
            children.concat([_c('path',{attrs:{"d":"M12 20.501c-.207 0-.413-.053-.596-.154L.641 14.48a1.245 1.245 0 01-.646-1.088V7.836c.001-.451.245-.865.638-1.084l5.149-2.806a1.24 1.24 0 011.188.001L12 6.691l5.037-2.744c.127-.07.269-.114.433-.135a.694.694 0 01.155-.017l.048.003a.858.858 0 01.092.011c.17.019.325.065.46.14l5.134 2.799c.399.219.646.635.646 1.088v5.555c0 .453-.247.87-.644 1.088l-10.768 5.87a1.245 1.245 0 01-.593.152zm0-1.537l10.505-5.727v-4.43l-3.798 2.071a1.239 1.239 0 01-1.832-1.089V5.744l-4.282 2.333a1.25 1.25 0 01-.593.151 1.25 1.25 0 01-.591-.15L6.375 5.332l-4.88 2.659v5.246L12 18.964zm6.375-9.614l3.312-1.806-3.312-1.805V9.35z"}})])
          )
        }
      }
    
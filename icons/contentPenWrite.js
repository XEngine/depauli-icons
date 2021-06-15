
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
            children.concat([_c('path',{attrs:{"d":"M6.745 18a.748.748 0 01-.718-.968l1.393-4.575a.677.677 0 01.017-.046l.023-.055a.915.915 0 01.073-.124.63.63 0 01.074-.087L18.874.879C19.44.312 20.193 0 20.995 0s1.555.312 2.121.879a3.003 3.003 0 010 4.243L11.85 16.387a.752.752 0 01-.23.156l-.02.008a.698.698 0 01-.058.023l-4.578 1.394a.774.774 0 01-.219.032zm1.127-1.877l2.034-.619-1.415-1.414-.619 2.033zm3.448-1.327l9.08-9.08-2.121-2.121-9.08 9.08 2.121 2.121zM21.461 4.655l.595-.595a1.501 1.501 0 00-2.122-2.121l-.595.595 2.122 2.121zM2.998 24c-1.654 0-3-1.346-3-3s1.346-3 3-3h.747a.75.75 0 010 1.5h-.747c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h15.75a.75.75 0 010 1.5H2.998z"}})])
          )
        }
      }
    

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
            children.concat([_c('path',{attrs:{"d":"M6.749 23.875a.75.75 0 010-1.5h4.237l3.545-2.835a.755.755 0 01.469-.165h.606L13.51 7.505a.751.751 0 011.477-.261l2.141 12.131h.407l2.792-5.585a.746.746 0 01.671-.415h2.25a.75.75 0 010 1.5h-1.787L18.67 20.46a.746.746 0 01-.671.415h-2.737l-3.545 2.835a.755.755 0 01-.469.165H6.749z"}}),_c('path',{attrs:{"d":"M10.499 20.875a.75.75 0 01-.75-.75c0-2.879-2.473-4.208-3.404-4.709a3.254 3.254 0 01-.475-.285.75.75 0 01-.238-.834l.771-2.186a.752.752 0 01.707-.5c.214 0 .418.092.56.251 1.244 1.397 3.191 1.514 5.079 1.514a.75.75 0 010 1.5c-1.837 0-3.747-.1-5.304-1.211l-.19.539c1.265.691 3.994 2.35 3.994 5.922a.75.75 0 01-.75.749z"}}),_c('path',{attrs:{"d":"M2.25 23.874a2.277 2.277 0 01-.776-.138 2.22 2.22 0 01-1.256-1.143 2.233 2.233 0 01-.09-1.72l4.5-12.749a2.246 2.246 0 012.103-1.502 2.27 2.27 0 012.028 1.235l.577 1.159c.506 1.003 1.399 1.359 3.414 1.359a.75.75 0 010 1.5c-1.806 0-3.783-.26-4.755-2.187l-.574-1.154a.775.775 0 00-.683-.412l-.042.001a.744.744 0 00-.653.5l-4.5 12.751a.748.748 0 00.71 1c.316 0 .6-.201.706-.5l1.623-4.6a.747.747 0 011.038-.423c.081.04.173.08.272.123.827.36 2.358 1.027 2.358 3.15a.75.75 0 01-1.5 0c0-.885-.424-1.272-1.027-1.577l-1.35 3.826a2.256 2.256 0 01-2.123 1.501zM9.75 7C7.889 7 6.375 5.486 6.375 3.625S7.889.25 9.75.25s3.375 1.514 3.375 3.375S11.611 7 9.75 7zm0-5.25c-1.034 0-1.875.841-1.875 1.875S8.716 5.5 9.75 5.5s1.875-.841 1.875-1.875S10.784 1.75 9.75 1.75zM.75 13.375a.748.748 0 01-.69-1.045l2.25-5.25a.752.752 0 01.985-.395.75.75 0 01.394.985l-2.25 5.25a.748.748 0 01-.689.455z"}})])
          )
        }
      }
    
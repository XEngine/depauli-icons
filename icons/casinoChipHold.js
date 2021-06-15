
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24a.75.75 0 01-.75-.75v-3c0-.744-.218-1.465-.631-2.083l-1.142-1.71a.671.671 0 00-.576-.343.639.639 0 00-.334.094l-.031.02a.652.652 0 00-.224.804l1.334 2.22a.751.751 0 01-.642 1.136.752.752 0 01-.643-.364l-1.352-2.25c-.01-.017-.02-.034-.028-.051a2.136 2.136 0 01-.225-.994.7.7 0 01-.006-.092v-3.75a.75.75 0 00-1.5 0v5.171c0 .848.292 1.68.822 2.343l2.001 2.365a.75.75 0 11-1.146.968l-2.014-2.381A5.29 5.29 0 010 18.058v-5.171c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v1.828a2.126 2.126 0 011.168-.038 2.135 2.135 0 011.325.976l1.124 1.681C8.695 18.2 9 19.209 9 20.25v3a.75.75 0 01-.75.75zM20.25 24a.751.751 0 01-.747-.687.741.741 0 01.175-.547l2.014-2.381a3.743 3.743 0 00.809-2.326v-5.171A.75.75 0 0021 12.887v3.75c0 .02-.001.04-.003.059a2.14 2.14 0 01-.224 1.024l-.026.048-1.354 2.253a.758.758 0 01-.644.364.748.748 0 01-.642-1.136l1.334-2.22a.653.653 0 00-.231-.81l-.032-.02a.656.656 0 00-.886.226l-1.161 1.742a3.735 3.735 0 00-.631 2.083v3a.75.75 0 01-1.5 0v-3c0-1.041.305-2.05.883-2.916l1.142-1.712a2.137 2.137 0 011.824-1.013c.222 0 .441.034.651.101v-1.823c0-1.241 1.009-2.25 2.25-2.25S24 11.646 24 12.887v5.171a5.27 5.27 0 01-1.151 3.28l-2.027 2.397a.748.748 0 01-.572.265zM12 15a7.498 7.498 0 01-6.261-3.378A7.448 7.448 0 014.5 7.5c0-1.471.428-2.896 1.239-4.123a.533.533 0 01.051-.078 7.492 7.492 0 0112.422.003l.021.029a.49.49 0 01.027.046c.812 1.227 1.24 2.652 1.24 4.123s-.428 2.896-1.239 4.123c-.008.014-.015.028-.024.041A7.495 7.495 0 0112 15zm-4.53-3.571a5.988 5.988 0 003.78 2.023v-2.279a3.723 3.723 0 01-1.885-1.01L7.47 11.429zm5.28 2.023a5.993 5.993 0 003.78-2.023l-1.894-1.265a3.731 3.731 0 01-1.885 1.01v2.278zm4.615-3.269a5.996 5.996 0 000-5.366L15.47 6.083c.186.451.28.926.28 1.417s-.094.966-.28 1.417l1.895 1.266zM6.636 4.817a5.987 5.987 0 000 5.366L8.53 8.917c-.186-.45-.28-.926-.28-1.417s.094-.967.28-1.417L6.636 4.817zM12 5.25c-1.241 0-2.25 1.009-2.25 2.25S10.759 9.75 12 9.75s2.25-1.009 2.25-2.25S13.241 5.25 12 5.25zm-2.635-.413a3.731 3.731 0 011.885-1.01V1.548a5.988 5.988 0 00-3.78 2.023l1.895 1.266zm3.385-1.01a3.723 3.723 0 011.885 1.01l1.894-1.265a5.988 5.988 0 00-3.78-2.023v2.278z"}})])
          )
        }
      }
    
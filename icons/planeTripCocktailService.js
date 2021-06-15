
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
            children.concat([_c('path',{attrs:{"d":"M13.9 9.807a.753.753 0 01-.689-.454.747.747 0 01-.008-.574l1.063-2.668a.75.75 0 01.464-.435l2.5-.816a1.128 1.128 0 00.752-1.411 1.114 1.114 0 00-.551-.662 1.115 1.115 0 00-.857-.079l-8.96 2.925a.752.752 0 01-.766-.186l-.855-.863-1.331.435L7.03 7.713a.749.749 0 00.796.219l2.624-.858a.751.751 0 01.975.824l-.167 1.115a.756.756 0 01-.851.631.751.751 0 01-.64-.768l-1.474.481a2.248 2.248 0 01-2.39-.654L3.536 6.009a1.504 1.504 0 01-.212-1.667c.18-.358.49-.623.87-.749l1.772-.579a.75.75 0 01.767.186l.855.864 1.258-.411-.652-.663A1.502 1.502 0 018.795.511l1.343-.438a1.493 1.493 0 011.328.2l2.458 1.723 2.198-.718c.26-.081.524-.121.788-.121.421 0 .843.105 1.22.303.62.326 1.076.875 1.284 1.545s.143 1.38-.184 2.001a2.604 2.604 0 01-1.545 1.284l-2.155.703-.933 2.342a.747.747 0 01-.697.472zm-4.639-7.87l1.179 1.196 1.702-.556L10.604 1.5l-.002-.001-1.341.438zM3 12.751a.75.75 0 010-1.5h18a.75.75 0 010 1.5H3zM9 24.001a.75.75 0 010-1.5h.75v-1.574c-1.168-.229-2.25-1.012-2.25-2.364l.002-.052c.073-1.021.275-2.029.599-2.998a.749.749 0 01.711-.512h3.376c.323 0 .609.206.711.512a12.225 12.225 0 01.601 3.05c0 1.352-1.082 2.135-2.25 2.364v1.574H12a.75.75 0 010 1.5H9zm0-5.415c.02.723.987.915 1.5.915s1.48-.192 1.5-.915a10.752 10.752 0 00-.366-2.085H9.366c-.19.681-.313 1.381-.366 2.085z"}})])
          )
        }
      }
    
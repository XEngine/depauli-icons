
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
            children.concat([_c('path',{attrs:{"d":"M7.5 24.005a.748.748 0 01-.73-.924l.618-2.595a8.911 8.911 0 01-4.362-7.103 2.255 2.255 0 01-1.526-2.13 2.252 2.252 0 012.25-2.25H15v-6.75a2.252 2.252 0 012.25-2.25h3a2.252 2.252 0 012.25 2.25v9c0 .984-.641 1.845-1.559 2.141a3.756 3.756 0 01-2.492 2.914.739.739 0 00-.449.704v6.243a.75.75 0 01-.75.75H7.5zm9-1.5v-5.47a2.232 2.232 0 011.428-2.134l.043-.015a2.229 2.229 0 001.398-1.381H4.537a7.51 7.51 0 004.054 5.932.75.75 0 01.389.842l-.53 2.226h8.05zm3.75-10.502a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v9.75h3.75zm-16.5-1.5a.75.75 0 000 1.5H15v-1.5H3.75z"}})])
          )
        }
      }
    
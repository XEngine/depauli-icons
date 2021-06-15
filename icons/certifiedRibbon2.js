
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
            children.concat([_c('path',{attrs:{"d":"M19.498 23.998a1.494 1.494 0 01-.879-.286l-6.177-4.493a.748.748 0 00-.882 0l-6.177 4.492a1.49 1.49 0 01-.881.286c-.479 0-.934-.231-1.215-.617A1.49 1.49 0 013 22.502V2.25A2.252 2.252 0 015.25 0h13.5A2.252 2.252 0 0121 2.25V22.5a1.504 1.504 0 01-1.5 1.499h-.002zM5.25 1.5a.75.75 0 00-.75.75V22.5l6.177-4.493A2.238 2.238 0 0112 17.576c.478 0 .935.149 1.323.431l6.177 4.492V2.25a.75.75 0 00-.75-.75H5.25z"}}),_c('path',{attrs:{"d":"M10.5 14.25c-.4 0-.776-.156-1.059-.438l-1.721-1.72a.752.752 0 01.531-1.281c.2 0 .388.078.53.219l1.72 1.719L15.97 7.28a.744.744 0 011.06 0 .744.744 0 010 1.06l-5.47 5.469a1.486 1.486 0 01-1.059.439l-.001.002z"}})])
          )
        }
      }
    
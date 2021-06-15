
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
            children.concat([_c('path',{attrs:{"d":"M21.531 18.706a.75.75 0 01-.631-1.154 9.456 9.456 0 00.955-1.957.75.75 0 011.416.498c-.28.795-.653 1.558-1.107 2.267a.75.75 0 01-.633.346zM16.213 23.177a.749.749 0 01-.287-1.443c.68-.281 1.337-.629 1.953-1.034a.748.748 0 011.039.215.75.75 0 01-.215 1.039c-.693.456-1.434.848-2.204 1.166a.752.752 0 01-.286.057zM11.571 23.978a11.254 11.254 0 01-2.476-.347.75.75 0 01.373-1.453 9.78 9.78 0 002.16.302.745.745 0 01.729.769.746.746 0 01-.786.729zM5.08 21.607a.75.75 0 01-.461-.159 12.615 12.615 0 01-1.809-1.733.752.752 0 01.57-1.237c.22 0 .427.095.57.262a11.04 11.04 0 001.592 1.526.744.744 0 01.282.5.743.743 0 01-.154.553.744.744 0 01-.59.288zM1.193 15.85a.753.753 0 01-.721-.544 11.783 11.783 0 01-.427-2.472.751.751 0 01.7-.797l.045-.001c.396 0 .727.308.752.701.047.729.172 1.455.373 2.158.055.193.032.395-.066.57a.742.742 0 01-.656.385zM1.439 8.906a.751.751 0 01-.708-.999c.279-.795.652-1.558 1.106-2.268a.748.748 0 011.036-.227.75.75 0 01.228 1.036 9.345 9.345 0 00-.954 1.956.752.752 0 01-.708.502zM5.709 3.423a.752.752 0 01-.412-1.377A13.185 13.185 0 017.5.88a.747.747 0 01.979.407.751.751 0 01-.406.98c-.68.281-1.337.629-1.953 1.034a.755.755 0 01-.411.122zM14.719 1.845a.783.783 0 01-.186-.023 9.74 9.74 0 00-2.161-.303.751.751 0 01.013-1.5l.034.001c.833.022 1.671.139 2.486.348a.75.75 0 01-.186 1.477zM20.615 5.522a.748.748 0 01-.571-.264 11.068 11.068 0 00-1.588-1.526.75.75 0 01.927-1.18 12.574 12.574 0 011.803 1.733.746.746 0 01-.084 1.057.751.751 0 01-.487.18zM23.207 11.965a.75.75 0 01-.748-.701 10.308 10.308 0 00-.373-2.158.75.75 0 011.442-.412c.23.805.374 1.637.427 2.473a.752.752 0 01-.7.797l-.048.001zM12 20.25c-4.549 0-8.25-3.701-8.25-8.25S7.451 3.75 12 3.75s8.25 3.701 8.25 8.25-3.701 8.25-8.25 8.25zm0-15c-3.722 0-6.75 3.028-6.75 6.75s3.028 6.75 6.75 6.75 6.75-3.028 6.75-6.75S15.722 5.25 12 5.25z"}}),_c('path',{attrs:{"d":"M12 15.821c-.814 0-1.625-.21-2.345-.608a.75.75 0 01.725-1.313 3.362 3.362 0 001.62.421c.562 0 1.121-.145 1.619-.42a.748.748 0 11.724 1.312 4.848 4.848 0 01-2.343.608z"}}),_c('circle',{attrs:{"cx":"9.75","cy":"10.53","r":"1.125"}}),_c('circle',{attrs:{"cx":"14.3","cy":"10.53","r":"1.125"}})])
          )
        }
      }
    
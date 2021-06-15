
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
            children.concat([_c('path',{attrs:{"d":"M16.5 9.75a.743.743 0 01-.53-.22l-2.25-2.25c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53a.749.749 0 011.06 0l1.669 1.669 3.224-3.869a.747.747 0 011.056-.096.75.75 0 01.096 1.056l-3.75 4.5a.752.752 0 01-.542.269l-.033.001z"}}),_c('path',{attrs:{"d":"M12.75 12.75a.75.75 0 010-1.5h9a.75.75 0 00.75-.75V3a.75.75 0 00-.75-.75H2.25A.75.75 0 001.5 3v7.5c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5h-1.5A2.252 2.252 0 010 10.5V3A2.252 2.252 0 012.25.75h19.5A2.252 2.252 0 0124 3v7.5a2.252 2.252 0 01-2.25 2.25h-9z"}}),_c('path',{attrs:{"d":"M15.75 23.25a.75.75 0 01-.75-.75v-.75A3.754 3.754 0 0011.25 18h-1.5a.75.75 0 01-.75-.75V10.5a.75.75 0 00-1.5 0v9a.754.754 0 01-.75.75.752.752 0 01-.56-.251l-1.959-2.204a.803.803 0 00-.593-.259.806.806 0 00-.597 1.35l2.77 3.117a.75.75 0 11-1.122.995l-2.764-3.11c-.41-.45-.621-1.039-.592-1.654s.296-1.183.752-1.598a2.312 2.312 0 013.259.153l.656.738V10.5c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v6h.75a5.256 5.256 0 015.25 5.25v.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    
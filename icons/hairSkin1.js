
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
            children.concat([_c('path',{attrs:{"d":"M1.525 22.858a.796.796 0 01-.13-.011 1.12 1.12 0 01-.988-1.025.678.678 0 01-.007-.087l.002-.044c.009-.281.124-.549.324-.75.212-.213.494-.331.794-.331h.002c.302 0 .583.116.795.327.213.212.33.493.331.793v.005a1.121 1.121 0 01-1.123 1.123zM4.525 19.108a.796.796 0 01-.13-.011 1.12 1.12 0 01-.988-1.025.678.678 0 01-.007-.087l.002-.044c.009-.281.124-.549.324-.75.212-.213.494-.331.794-.331h.002c.302 0 .583.116.795.327.213.212.33.493.331.793v.005a1.121 1.121 0 01-1.123 1.123zM8.275 22.858a.796.796 0 01-.13-.011 1.12 1.12 0 01-.988-1.025.693.693 0 01-.007-.088l.002-.044c.009-.281.124-.549.324-.75.212-.213.494-.331.794-.331h.002c.302 0 .583.116.795.327.213.212.33.493.331.793v.005c0 .572-.427 1.047-.995 1.114a.863.863 0 01-.128.01zM22.525 22.858a.817.817 0 01-.131-.011 1.126 1.126 0 01-.983-.983.798.798 0 01-.011-.131 1.12 1.12 0 01.332-.798 1.12 1.12 0 01.843-.324 1.12 1.12 0 011.075 1.123.523.523 0 01-.006.081 1.112 1.112 0 01-.988 1.033.939.939 0 01-.131.01zM19.525 19.108a.817.817 0 01-.131-.011 1.126 1.126 0 01-.983-.983.798.798 0 01-.011-.131 1.12 1.12 0 01.332-.798 1.12 1.12 0 01.843-.324 1.12 1.12 0 011.075 1.123.523.523 0 01-.006.081 1.112 1.112 0 01-.988 1.033.939.939 0 01-.131.01zM15.775 22.858a.817.817 0 01-.131-.011 1.126 1.126 0 01-.983-.983.798.798 0 01-.011-.131 1.12 1.12 0 01.332-.798 1.12 1.12 0 01.843-.324 1.12 1.12 0 011.075 1.123.523.523 0 01-.006.081 1.112 1.112 0 01-.988 1.033.939.939 0 01-.131.01zM18.025 14.983c-2.19 0-4.076-1.622-4.437-3.75h-3.125c-.362 2.129-2.248 3.75-4.437 3.75s-4.076-1.622-4.437-3.75H.775a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75c0 1.654 1.346 3 3 3s3-1.346 3-3a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75c0 1.654 1.346 3 3 3s3-1.346 3-3a.75.75 0 01.75-.75h1.45a.75.75 0 010 1.5h-.763c-.361 2.129-2.247 3.75-4.437 3.75zM12.025 19.108a.796.796 0 01-.13-.011 1.12 1.12 0 01-.988-1.025.693.693 0 01-.007-.088l.002-.044c.009-.281.124-.549.324-.75.212-.213.494-.331.794-.331h.002c.302 0 .583.116.795.327.213.211.331.493.331.794v.004c0 .572-.427 1.047-.995 1.114a.863.863 0 01-.128.01z"}}),_c('path',{attrs:{"d":"M6.025 11.983a.749.749 0 01-.745-.667c-.032-.287-.757-7.08 1.645-10.283a.753.753 0 011.05-.15.75.75 0 01.15 1.05C6.083 4.656 6.763 11.086 6.77 11.15a.747.747 0 01-.745.833zM18.025 11.983a.75.75 0 01-.745-.667c-.032-.288-.754-7.083 1.645-10.283a.753.753 0 011.049-.151c.332.249.399.72.151 1.051-2.042 2.723-1.362 9.153-1.354 9.217a.752.752 0 01-.746.833z"}})])
          )
        }
      }
    
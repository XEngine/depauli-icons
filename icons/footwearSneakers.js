
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75v-7.791C0 12.879.879 12 1.959 12a1.93 1.93 0 011.878 1.47 2.998 2.998 0 002.907 2.276 3.005 3.005 0 003.005-2.996c0-.256.129-.492.345-.63a.74.74 0 01.716-.053l11.272 5.13c.023.01.047.022.069.036a3.76 3.76 0 011.826 2.841c.016.06.023.118.023.176 0 .023-.002.046-.004.069.002.049.004.098.004.147v1.284A2.252 2.252 0 0121.75 24H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V21h-21v.75zm20.776-2.25a2.25 2.25 0 00-.854-.955l-3.543-1.613-1.599 1.598a.744.744 0 01-1.06 0 .749.749 0 010-1.06l1.201-1.201-1.635-.744-1.506 1.505a.744.744 0 01-1.06 0 .752.752 0 010-1.061l1.108-1.109-2.216-1.009a4.522 4.522 0 01-4.363 3.393 4.496 4.496 0 01-4.368-3.414.434.434 0 00-.422-.33.46.46 0 00-.459.459V19.5h20.776zM22.041 12a1.931 1.931 0 01-1.878-1.47 2.996 2.996 0 00-2.907-2.275 3.007 3.007 0 00-3.006 2.996.748.748 0 01-1.061.681L1.918 6.803a2.149 2.149 0 01-.067-.035A3.763 3.763 0 01.023 3.927a.689.689 0 01-.019-.246C.002 3.627 0 3.581 0 3.534V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v7.791c0 1.08-.879 1.959-1.959 1.959zm-4.784-5.245a4.496 4.496 0 014.362 3.414.434.434 0 00.422.331.46.46 0 00.459-.459V4.5H1.724c.187.394.484.728.854.955l3.544 1.613L7.72 5.47a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53L7.579 7.731l1.635.744L10.72 6.97a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-1.108 1.108 2.216 1.009a4.522 4.522 0 014.363-3.393h.006zM22.5 3v-.75a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75V3h21z"}})])
          )
        }
      }
    
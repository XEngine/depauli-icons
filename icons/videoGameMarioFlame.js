
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
            children.concat([_c('path',{attrs:{"d":"M14.106 20.492c-3.51 0-6.365-2.866-6.365-6.389s2.855-6.389 6.365-6.389 6.365 2.866 6.365 6.389-2.855 6.389-6.365 6.389zm0-11.278c-2.683 0-4.865 2.193-4.865 4.889s2.182 4.889 4.865 4.889 4.865-2.193 4.865-4.889-2.182-4.889-4.865-4.889z"}}),_c('path',{attrs:{"d":"M12.702 15.558a.75.75 0 01-.75-.75v-1.409a.75.75 0 011.5 0v1.409c0 .413-.337.75-.75.75zM15.51 15.558a.75.75 0 01-.75-.75v-1.409a.75.75 0 011.5 0v1.409c0 .413-.337.75-.75.75zM2.875 4.985a.75.75 0 01-.75-.75v-.66h-.654a.75.75 0 010-1.5h.654v-.66a.75.75 0 011.5 0v.66h.654a.75.75 0 010 1.5h-.654v.66c0 .413-.337.75-.75.75z"}}),_c('path',{attrs:{"d":"M14.109 23.279c-5.058 0-9.173-4.115-9.173-9.173a17.121 17.121 0 012.927-10.06 1.468 1.468 0 011.199-.631c.714 0 1.33.534 1.433 1.242.038.239.092.475.161.707A10.382 10.382 0 0117.183.798a1.449 1.449 0 011.283.357c.339.314.51.776.457 1.235-.155 1.372.063 2.288.294 2.839l1.702-1.365a1.452 1.452 0 012.36 1.142v9.033a.729.729 0 01.003.066c0 5.059-4.115 9.174-9.173 9.174zM9.031 4.998a15.644 15.644 0 00-2.596 9.088c0 4.246 3.442 7.693 7.673 7.693 4.205 0 7.642-3.415 7.673-7.617a.66.66 0 01-.003-.062V5.098l-2.291 1.837a.748.748 0 01-.999-.056c-.057-.057-1.399-1.44-1.062-4.599a8.91 8.91 0 00-6.14 5.077.75.75 0 01-1.325.09 6.954 6.954 0 01-.93-2.449zM2.875 11.681a1.102 1.102 0 01-1.101-1.101 1.098 1.098 0 011.029-1.099.565.565 0 01.071-.005 1.095 1.095 0 011.098 1.045c.002.019.004.038.004.057l-.003.057a1.09 1.09 0 01-.317.722 1.093 1.093 0 01-.778.325h-.001l-.002-.001zM7.087 2.517a.737.737 0 01-.132-.012 1.096 1.096 0 01-.969-1.089A1.096 1.096 0 016.971.323L6.99.321a.613.613 0 01.092-.008h.004a1.098 1.098 0 011.089.97.728.728 0 01.001.264c-.061.499-.461.9-.961.959l-.053.005a.632.632 0 01-.074.006h-.001z"}})])
          )
        }
      }
    
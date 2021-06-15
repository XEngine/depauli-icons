
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
            children.concat([_c('path',{attrs:{"d":"M19.5 24.005a.75.75 0 01-.75-.75V21.24a5.213 5.213 0 00-1.537-3.71l-.378-.379c-.765 2-2.563 3.854-4.835 3.854s-4.069-1.854-4.835-3.854l-.377.379a5.214 5.214 0 00-1.538 3.711v2.015a.75.75 0 01-1.5 0V21.24a6.71 6.71 0 011.976-4.77l1.041-1.046a5.06 5.06 0 01-.017-.419c0-.42.014-.85.042-1.283a4.655 4.655 0 00-3.806 3.679.752.752 0 01-.885.589.747.747 0 01-.586-.881 6.159 6.159 0 015.166-4.887l.27-.039c.027-.182.056-.362.088-.539l-1.546-.515a5.24 5.24 0 01-3.214-3.034l-.726-1.811a.747.747 0 01.418-.975.747.747 0 01.976.418l.725 1.812a3.744 3.744 0 002.296 2.167l1.41.47c.137-.478.295-.929.47-1.344C5.981 6.35 5.905 2.886 7.684.327a.749.749 0 111.231.857 5.768 5.768 0 00-.264 6.155c.264-.388.55-.729.856-1.017l.85-2.07c.116-.415.381-.767.749-.993a1.702 1.702 0 011.29-.207 1.7 1.7 0 011.253 1.221l.725 2.067c.319.309.622.685.906 1.123a5.735 5.735 0 00-.195-6.283.75.75 0 011.23-.859 7.262 7.262 0 01-.252 8.624c.169.396.324.818.463 1.261l1.506-.502a3.742 3.742 0 002.295-2.167l.726-1.813a.747.747 0 01.975-.417.752.752 0 01.418.975l-.725 1.812a5.24 5.24 0 01-3.214 3.033l-1.605.535c.036.172.069.344.099.513l.32.046a6.157 6.157 0 015.165 4.887.742.742 0 01-.112.563.743.743 0 01-.625.334.751.751 0 01-.735-.604 4.654 4.654 0 00-3.818-3.681c.036.44.054.87.054 1.285 0 .134-.006.274-.018.419l1.042 1.047a6.704 6.704 0 011.975 4.769v2.015a.75.75 0 01-.749.75zm-9.063-16.5c-.386.391-.735.91-1.038 1.543-.743 1.559-1.149 3.67-1.149 5.957 0 2.534 2.016 4.5 3.75 4.5s3.75-1.966 3.75-4.5c0-1.197-.151-2.439-.437-3.595l-.004-.012a11.635 11.635 0 00-.807-2.284c-.324-.666-.686-1.206-1.078-1.609h-2.987zm2.23-1.5l-.445-1.268a.757.757 0 01-.022-.076.202.202 0 00-.2-.156.209.209 0 00-.201.158.809.809 0 01-.036.112l-.505 1.23h1.409z"}})])
          )
        }
      }
    
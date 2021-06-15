
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
            children.concat([_c('path',{attrs:{"d":"M17.246 24a.752.752 0 01-.53-1.281l2.25-2.25a.744.744 0 011.06 0 .752.752 0 010 1.061l-2.25 2.25a.741.741 0 01-.53.22zM8.247 24a.752.752 0 01-.53-1.281l2.25-2.25a.744.744 0 011.06 0 .752.752 0 010 1.061l-2.25 2.25a.744.744 0 01-.53.22zM4.497 11.484a.75.75 0 01-.623-.332A5.249 5.249 0 013.042 9H.747a.75.75 0 010-1.5h2.292a5.193 5.193 0 01.987-2.41L2.413 3.477c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l1.609 1.609a5.236 5.236 0 012.415-.996V.75a.75.75 0 011.5 0v2.286a5.212 5.212 0 012.399 1.005l1.624-1.624a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-1.626 1.627a5.24 5.24 0 01.342.525.751.751 0 01-1.305.741 3.62 3.62 0 00-.554-.739c-.014-.011-.028-.022-.039-.033a.45.45 0 01-.047-.056 3.744 3.744 0 00-2.454-1.059.651.651 0 01-.309-.001 3.718 3.718 0 00-1.948.63 3.592 3.592 0 00-.446.357.649.649 0 01-.231.231 3.745 3.745 0 00-.977 2.431.691.691 0 01.002.224c.023.704.241 1.381.63 1.96a.742.742 0 01.113.563.744.744 0 01-.318.478.732.732 0 01-.416.128zM13.496 23.25a.752.752 0 01-.53-1.281l2.47-2.47h-2.689a.75.75 0 01-.53-1.28l3.75-3.75a.744.744 0 011.06 0 .752.752 0 010 1.061L14.557 18h2.689a.75.75 0 01.53 1.28l-3.75 3.75a.741.741 0 01-.53.22z"}}),_c('path',{attrs:{"d":"M9.74 19.5a4.5 4.5 0 01-4.053-6.439 4.467 4.467 0 012.561-2.297 4.485 4.485 0 012.59-.12 6.698 6.698 0 013.049-3.75 6.746 6.746 0 013.356-.898 6.775 6.775 0 015.861 3.382 6.758 6.758 0 01-2.485 9.217.753.753 0 01-1.025-.276.752.752 0 01.276-1.024 5.257 5.257 0 001.933-7.169 5.271 5.271 0 00-4.56-2.631 5.243 5.243 0 00-5.149 4.27l-.001.007a5.09 5.09 0 00-.058 1.623.751.751 0 11-1.487.196 6.783 6.783 0 01-.053-.841 6.72 6.72 0 01.033-.636 2.947 2.947 0 00-1.783.062 2.973 2.973 0 00-1.706 1.53 3 3 0 001.406 3.996c.403.193.828.295 1.23.295l.061-.001c.423 0 .759.336.76.748a.748.748 0 01-.753.751c0 .005-.002.005-.003.005z"}})])
          )
        }
      }
    
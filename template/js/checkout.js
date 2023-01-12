import '#template/js/checkout'
import './custom-js/checkout'

const routerToLink = window.storefrontApp && window.storefrontApp.router
routerToLink.afterEach(({ name }) => {
  if(name === 'confirmation') {
    const appendLink = () => {
      let locale
      const $html = document.querySelector('.order-info__redirect .btn.btn-lg.btn-success')
      const local = Intl.DateTimeFormat().resolvedOptions().timeZone
      console.log(local)
      if (local === 'America/Sao_Paulo') {
        locale = 'BR'
      } else {
        locale = 'US'
      }
      if ($html) {
        console.log($html)
        const atribute = $html.href.replace(',00', '').replace('lc=US', `lc=${locale}`)
        $html.href = atribute
        clearInterval(tryAppendInterval)
        
        
      }
    }
    const tryAppendInterval = setInterval(appendLink, 200)
  }
})

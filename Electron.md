# **<p align="center"> <img src="https://2105299320-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LBKK1y7h_XWAtuRJG9X-4037718589%2Ficon%2FzSCYXfXdUPvs7AL9g6NO%2FElectron_Software_Framework_Logo.svg%20(1).png?alt=media&token=325f86f6-2e2a-4d0f-a8c7-b28d4eea56a4" alt="drawing" style="width:50px;"/> Electron js <img src="https://2105299320-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-LBKK1y7h_XWAtuRJG9X-4037718589%2Ficon%2FzSCYXfXdUPvs7AL9g6NO%2FElectron_Software_Framework_Logo.svg%20(1).png?alt=media&token=325f86f6-2e2a-4d0f-a8c7-b28d4eea56a4" alt="drawing" style="width:50px;"/></p>**


- Build Desktop App
    - install [electron forge](https://www.electronforge.io/import-existing-project) 
        - > `npm i --save-dev @electron-forge/cli`
        - > `npx electron-forge import`
    
    - Update Package.json

- Errors 

  - Electron Security Warning (Insecure Content-Security-Policy)
 Solution : 
    <meta http-equiv="Content-Security-Policy" content="script-src 'self'" />



- Create custom host using mkcert 

- For Windows
    - step 1 : open powershall at root directory
    - step 2 :  `choco install mkcert`
        - if get error (already exist)
            - remove  Chocolatey from given location 
    - run command : `Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))`

    - re-run :  `choco install mkcert`

    after successfully installation

    - close your power shall

    - goto your project directory -> open terminal
    
    -> run : `mkcert YOUR_DOMAIN` (YOUR_DOMAIN => prince.com)






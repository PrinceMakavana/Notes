Refrence : https://www.youtube.com/watch?v=R5CUn5wGQGg
<h1>Install Xampp / Start Xampp / UnInstall Xampp</h1>

Install Xampp

    - Download .run file from "https://www.apachefriends.org/download.html"
    - Rename Downloaded File with "xampp.run"
    - open terminal at Download Folder
    - Execute  Given Command
        -sudo chmod +x xampp.run
        -sudo ./xampp.run
    - Give next ... next ... next
    - Goto Manage Servers 
    - Start All Servers
    - Open Chrome
    - open link : "http://localhost/dashboard/"
    - for phpMyAdmin : "http://localhost/phpmyadmin/"

Start Xampp
       - Open Terminal
       - cd /opt/lampp/
       - sudo ./manager-linux-x64.run

    View Htdocs
        - Open Terminal
        - cd /opt/lampp/htdoccs

UnInstall Xampp
        -cd /opt/lampp
        -sudo ./uninstall
        -sudo rm -r /opt/lampp
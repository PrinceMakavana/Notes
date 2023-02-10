# Refrence : https://www.youtube.com/watch?v=R5CUn5wGQGg
<h1>Install Xampp / Start Xampp / UnInstall Xampp</h1>

# Install Xampp

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

# Start Xampp
       - Open Terminal
       - cd /opt/lampp/
       - sudo ./manager-linux-x64.run

    View Htdocs
        - Open Terminal
        - cd /opt/lampp/htdoccs

# UnInstall Xampp
        -cd /opt/lampp
        -sudo ./uninstall
        -sudo rm -r /opt/lampp

# Make Custom Command :
        - sudo gedit ~/.bashrc
        - "Add Command As per Old (alias)"
        - source ~/.bashrc


# Custom Command For this os
    - firebase deploy (for react add to firebase)
    - lexical (for run lexical programs) lexical= 'echo " Enter File Name = " ; read filename ; flex $filename ; gcc lex.yy.c ; ./a.out;
    - git-init-folder= 'echo " Enter Repository Name : "  ; read repository ; echo " Enter UserName : " ; read username ;  echo " Enter Email : " ; read email ;  echo " Enter Personal Token : " ; read personalToken ; echo "Repository Name  : $repository UserName :   $username Email :   $email Personal Token :  $personalToken " ;  git remote set-url origin https://github.com/$username/$repository.git ; git config --local user.name "$username" ; git config --local user.email "$email" ; git config --local user.password "$personalToken" ; git config credential.helper store'


# Other UseFull Command
    - Make Disk R to R/W : sudo mount -o remount,uid=1000,gid=1000,rw /dev/sdb3
    - Remove Directories : rm -r DIR_NAME
    - sudo dpkg -i filename.deb 

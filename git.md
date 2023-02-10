# **<p align="center"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/2560px-Git-logo.svg.png" alt="drawing" style="width:50px;"/>  <br/>Git Commands </p>**


## Initialize Git Repo To Folder

---
<br /> 

>  git init<br />

> git add README.md <br />

> git commit -m "commit" <br />

> git branch -M main <br />

> git remote add origin REPO_URL <br />

> git push -u origin main <br />


<br />

---



## Push in Existing Repo

---
<br /> 

>  git remote add origin REPO_URL<br />

> git branch -M main <br />

> git push -u origin main <br />


<br />

---


## Set Local credential For Specific Folder

---
<br /> 

>  git remote set-url origin https://USER_NAME@github.com/USER_NAME/REPO_NAME.git <br />

>  git config  --local user.name "UserName" <br />

> git config  --local user.email "email Address" <br />

> git config  --local user.password "personal Token" <br />

> git config credential.helper store



<br />

---

## UnSet Local credential

---
<br /> 


>  git config --local --unset credential.helper <br />


<br />

---



<br />

---

## Set Global credential For Specific Folder

---
<br /> 


>  git config  --global user.name "UserName" <br />

> git config  --global user.email "email Address" <br />

> git config  --global user.password "personal Token" <br />

> git config --global credential.helper store


<br />

---


<br />

---

## UnSet Global credential

---
<br /> 


>  git config --global --unset credential.helper <br />

<br />

---

## Use Of Stash 

---
<br /> 

  ### git stash :  <br />
>  It Will Store Your All changes in the local so that you can take pull and not get conflict error at push <br />

  ### git stash pop :  <br />
>  It Will Pop out your changes which is store using stash and ask you to which changes you want to add <br />

> git stash <br />
> git pull <br />
> git stash pop <br />
> git marge <br />
> git push <br />


# **<p align="center"> <img src="https://avatars.githubusercontent.com/u/18133?s=200&v=4" alt="drawing" style="width:50px;"/>  Git <img src="https://avatars.githubusercontent.com/u/18133?s=200&v=4" alt="drawing" style="width:50px;"/></p>**

<br />


## Version Control System

---
<br />
 
    VCS - Version Control System
        Help Developers to work together work simultaneously(aek sathe) maintains a history of every version
    
    Types of VCS : 
        CVCS : Centralized version control system
        DVCS : Distributed version control system

 ![alt text](./asstets/cvsd.png)


<br />

## git Life Cycle

---
<br />

  ![git LifeCycle](./asstets/gitlifecycle.png)

<br />

## Initialize Git Repo To Project

---
<br /> 

> `git init `

> `git add README.md `

> `git commit -m "commit" `

> `git branch -M main `

> `git remote add origin REPO_URL `

> `git push -u origin main `



<br />

## Push in Existing Repo

---
<br /> 

> `git remote add origin`

> `git branch -M main`

> `git push -u origin main`



<br />

## Git Config Global  

---
<br /> 

> `git config --global user.name ""`

> `git config --global user.email ""`

> `git config --global user.password "" `

> `git config --global core.editor "code --wait"`

> `git config --global -e`

> `git config --global credential.helper store `

> `git config --global --unset credential.helper `


<br />

## Git Config Local

---
<br /> 

> ` git remote set-url origin https://USER_NAME@github.com/USER_NAME/REPO_NAME.git`

> ` git config  --local user.name "UserName" `

> `git config  --local user.email "email Address"`

> `git config  --local user.password "personal Token"`

> `git config credential.helper store`

> ` git config --local --unset credential.helper `



<br />

## Initializing a Repository  

---
<br /> 

> `git init`

<br />

## Staging Files  

---
<br /> 

> `git add .` : all Files

> `git add file1.txt file2.txt` : specific Files

> `git add *.txt` : only extenction files

>  `git restore --staged FILE_NAME` : restore file from staging area 

<br />

## Committing Changes 

---
<br /> 

> `git commit -m "message"`

> `git commit -amend "description" ` : Add Description in commit

> `git commit -am "message"` : commit without stageing

> `git reset --hard COMMIT_ID`  : delete old commit

> `git reset --hard HEAD~COMMIT_NUMBER`  : delete old commit

> `git show COMMIT_ID` : show Actual Commit

<br />

## Removing , Renaming or Moving Files

---
<br /> 

> `git ls-files` : list all files

> `git rm fileName` :  Delete File

> `git mv fimeName` : Move Files


<br />

## gitignore 

---
<br />

> .gitignore file<br />

> `git config --local core.excludesFile ~/.gitignore` <br />

  ### [Refrence](https://github.com/github/gitignore)
  
<br />

## Use Of Stash 

---
<br /> 

  ### git stash :  <br />
>  It Will takes your uncommitted changes save them away for later use , and reverts  them from your working copy

> `git stash` 

> `git pull` 

> `git stash pop` 

> `git marge` 

> `git push` 


<br />

## Branch 

---
<br /> 

> `git branch Branch_Name` : create new branch
 
> `git checkout Branch_Name` : change the branch

> `git branch Old_Branch_Name New_Branch_Name` : Rename branch

> `git branch -D Branch_Name` : Delete branch

> `git log main..child` : shows the un marged commits 


<br />

## Clone Private Repository

---
<br /> 

> `git clone https://<userName:personal_access_token>@github.com/<your account or organization>/<repo>.git`

<br />

## Error Resolve

---
<br /> 

- <b>You have divergent branches and need to specify how to reconcile them.</b>

  - Get Pull or Push your branch with remain your commits history
    - > `git pull --rebase origin <Branch_Name>`

  - Make It fast Forward
    - > `git pull --ff-only origin <Branch_Name>`

## Custom Commands 

---
<br /> 

> `git console` : git config --global alias.console "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset%n' --abbrev-commit --date=relative --branches"

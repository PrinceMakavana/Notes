# **<p align="center"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" alt="drawing" style="width:50px;"/>  Vue Js <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" alt="drawing" style="width:50px;"/></p>**

[Prince Makavana](https://nodesource.com/products/nsolid)


## Basics

---
<br /> 

> Frontend JavaScript / TypeScript Framework <br />

> Used To create dynamic & data-driven websites <br />

> Single Page Application <br />

> New Feature : Improve reusability , organization , readability using **setup()** function

<br />

---

## Prerequisite

---
<br />

- **Concept**
    - HTML/CSS
    - JavaScript
    - JavaScript ES6
    - TypeScript

<br />

- **Softwares**
    - Node.js
    - npm or Yarn


<br />

---

## Installation

---
<br />

-   ### **Use CDN**
    > `<script src="https://unpkg.com/vue@3"></script>`

-   ### **Use NPM/Yarn**
    >    **npm i -g @vue/cli**  (Add Vue CLI in Local Machine)

    >    **vue create project-name** (Create Vue Project)
    
    >    **npm run serve** (Run Vue Project)


<br />

---

## .vue File Formate

---
<br />

- demo.vue 
    >     <template></template>
    >     
    >     <script>export default {}</script>
    >     
    >     <style scoped>
    </style>


<br />

---

## Data  / Template / Methods 

---
<br />

> - **Data :** All Data variables are Define in data Object in script default class

> - **Methods :** All Methods of files are Define under the methods object    
```sh
       <template>
       <P>{{timer}} - {{name}} - {{num}} - {{bool}}</P>
       </template>
       <script>
           export default {
             data() {
               return {
                   timer: null,
                   name: "Name",
                   num : 23,
                   bool : true,
               };
             },
             method {
             },
           };
       </script >
```



<br />

---

## Events Handling

---
<br />

> **@eventName=""** <br />
> Eg: @click="" , @onmouseup="" , @onkeyup="" etc ..  <br /> 

> **v-on:eventName=""** <br />
> Eg: v-on:click="" , v-on:onmouseup="" , v-on:onkeyup="" etc ..

```sh
    <template>
      <div>
          <p @click="change">Change Name</p>
      </div>
    </template>
    <script>
    export default {
      data() {
        return {
            name : "Prince"
        };
      },
      methods: {
        change() {
          this.name : "Romik";
        },
      },
    };
    </script>
```

<br />

---

## Conditional Rendering

---
<br />

> All Conditional Operators Are used with **v-condition=""**

> **v-if=""** <br />
> **v-else** <br />
> **v-for=""** <br />


-    **If-Else Condition**
```sh
    <template>
      <div>
          <p v-if="bool">Change Name</p> // It Shown because  bool is true   
          <p v-else>Change Name</p> // It Shown because  bool is true   
      </div>
    </template>
    <script>
    export default {
      data() {
        return {
            bool : true
        };
      },
      methods: {},
    };
    </script>
```

-    **For Loop**
```sh
    <template>
      <div>
          <p v-for="item in items">{{item}}</p> // It return one by one item from items     
      </div>
    </template>
    <script>
    export default {
      data() {
        return {
            items: [1 , 2 , 3 ,4 , 5 ,6]
        };
      },
      methods: {},
    };
    </script>
```

<br />

---

## Form Handling

---
<br />

> - In Vue Form Fields are Handle using ref

> - we have to give ref attribute to input to Handle it (**ref="refName"**)

> - Access Specific input using **this.$refs.refName**

> - Also it can be Handle using **v-model**

> - When any Data Handle in input Fields at that **v-model** is used

> - Most of time **v-model** is Used


```sh

<template>
  <form name="new-form" @submit.prevent="handleSubmit">
    <label>Email</label>
    <input type="email" required v-model="email" />

    <label>Password</label>
    <input type="password" required v-model="password" />
    <div v-if="pwdError">{{ pwdError }}</div>

    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label>Skills</label>
    <input type="text" v-model="skillsText" @keyup.alt="addSkill" />
    <small>*Press alt+comma for add to list</small>
    <br />
    <div v-for="skill in skills" :key="skill" class="pill">
      {{ skill }}
      <span @click="deleteSkill(skill)"
        ><i class="fa-solid fa-circle-xmark"></i
      ></span>
    </div>

    <div class="terms">
      <input type="checkbox" v-model="terms" required />
      <label>Accept terms and Conditions </label>
    </div>

    <div class="submit">
      <button>Create an Account</button>
    </div>
  </form>

  <p>Email = {{ email }}</p>
  <p>Password = {{ password }}</p>
  <p>Role = {{ role }}</p>
  <p>Terms = {{ terms }}</p>
  <p>Names = {{ names }}</p>
</template>

<script>
export default {
  name: "SignForm",
  data() {
    return {
      email: "",
      password: "",
      role: "developer",
      terms: false,
      skillsText: "",
      skills: [],
      pwdError: "",
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "," && this.skillsText) {
        if (!this.skills.includes(this.skillsText)) {
          this.skills.push(this.skillsText);
        }
        this.skillsText = "";
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill !== item;
      });
    },
    handleSubmit() {
      if (this.password.length < 5) {
        this.pwdError =
          this.password.length < 5 ? "Password Most Be more then 5 char" : "";
        // return false;
      }
    },
  },
};
</script>

```


```sh
<template>
  <div>
    <input type="text" ref="name" />
    <input type="text" v-model="name" />
    <button @click="handleClick">Handle Me</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: "This is Vue",
      name: "",
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
  },
};
</script>


<style>
</style>

```

<br />

---

## Props

---
<br />

> - Props are the Mediator whose pass the data from parent component to child component

> - it makes component more re useable

> - ``` <Model propName="value"/>```

- **home.vue**
```sh
    <template>
    <Model header="This is Props Send to Model" :name="name"/>
    </template>

    <script>
    export default {
      data () {
        return {
        name : "Prince"
        }
      }
    }
    </script>
```

- **model.vue**
```sh
    <template>
    <p>{{header}}</p>
    </template>

    <script>
    export default {
      props : ['header']
    }
    </script>
```



<br />

---

## LifeCycle

---
<br />


> every vue component Go through Specific Life Cycle

> **it Created** -> **it Mounted To the Dom** -> **it Updated** -> **it Destroy**

> Different Life Cycle Hooks

  ![MVC Pattern](https://vuejs.org/assets/lifecycle.16e4c08e.png)

   > - <font size="4">**beforeCreate**</font> => this fire before component is fully created , inside this hook we **"can't access any data object"** or any template elements

   > - <font size="4">**created**</font> => if fire after the created component but not yet mounted the dom now so we **"can't access any data object"** or any template elements

   > - after that is start to compile the template

   > - <font size="4">**beforeMount**</font> => fire just before the component mount to the dom , here we **"can access all data"** , events , and templates

   > - <font size="4">**mounted**</font> => this popular place to make fetch request 

   > - <font size="4">**beforeUpdate**</font> => after mounted component , this happens after the data change but before the update re-rendered

   > - <font size="4">**updated**</font> => 

   > - <font size="4">**beforeUnmount**</font> =>  

   > - <font size="4">**unmount**</font> =>
 
 ```sh

<template>
  <div class="block" v-if="showBlock" @click="stopTimer">click me</div>
</template>

<script>
export default {
  name: "Block",
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  // This is LifeCycle Mounted Hook
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },

  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit("end", this.reactionTime);
    },
  },
};
</script>

```
 

<br />

---

## Fetching Data

---
<br />



> - Using Mounted Hook
```sh
mounted() {
    fetch("URL")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
```

> - Using Java script
```sh

    const load = async () => {
        try {
            let data = await fetch("URL");
            if (!data.ok) {
                throw Error("Data Not available");
            }
            let fetchData = await data.json();
            console.log(fetchData);
        } catch (err) {
            error.value = err.message;
        }
    };
```

<br />

---

## Composition API Vs Option API

---
<br />

> - In option API, we were limited to an object to configure a component with properties and methods.But in Compositions API, we use different hooks to do the same things <br /><br/>
>  **Compositions API solves 2 major limitations that Options API had:**
      > - Group relevant pieces of codes together using hooks.
      > - Helps to reuse code throughout your application very easily using composable.


<br />

|                |Composition API                |Option API                         |
|----------------|-------------------------------|-----------------------------|
|**Handle Reactive Data**| Here You can add reactive data using **<font size="4">ref()</font> & <font size="4">reactive()</font>**           |We have to use **data()** method under main object to define any data |
|**Props**          |To declare props in Composition API, we have **<font size="4">defineProps()</font>** function. This function will take an object as a parameter. In this object, you will declare your props.            |To declare props in the Options API, you need to use the props property.|
| | | |
|Example          |`const props = defineProps({color: String})`|` props: ['color'],`|
| | | |
| | | |
|**Methods**          |To declare methods in Composition API, you just have to add plain JavaScript functions.     | In Options API, To add any method we use methods object|
| | | |
|Example          |`const updateName = (newName) => {name.value = newName;}`|`  methods: {All Methods Goes Here}`|
| | | |
| | | |
| **LifeCycle Hooks** | use different hooks provided by Vue. You need to import those hooks before using them. | you have to add some specific methods in order to use component lifecycle in Vue |



<br />

---

## Routing

---
<br />


<br />

---

## Quasar With Vue

---
<br />

> - **vue add quasar**


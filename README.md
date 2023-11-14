# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Useful commands](#useful-commands)
- [Author](#author)

## Overview

### The challenge
- Responsive layout for informing clients to stay in touch with them via email
- Users should be able to:
    - View the optimal layout for the site depending on their device's screen size
    - See hover states for all interactive elements on the page
    - Receive an error message when the `form` is submitted if:
        - The `input` field is empty
        - The email address is not formatted correctly

### Screenshot
<div>
  <img src="solution_images/solution_375mobile.png" width="auto" height="400" src="solution on mobile view"/>
  <img src="solution_images/solution_1440desktop.png" width="auto" height="400" src="solution on desktop view"/>
  <img src="solution_images/solution_1440active.png" width="auto" height="400" src="solution on desktop view with active states"/>
</div>

### Links

- Solution URL: [My solution URL](https://github.com/MiloosN5/FrontendMentor_FourCardFeatureSectionMaster/blob/main/README.md)
- Live Site URL: [My live site URL](https://miloosn5.github.io/FrontendMentor_FourCardFeatureSectionMaster/)


## My process

### Built with

- Semantic HTML5 markup
- SASS/SCSS
- BEM
- Flexbox
- Grid
- Mobile-first workflow
- REM (Root EM) & EM (for Responsive)
- Responsive layout
- [React](https://reactjs.org/) - JS library

### What I learned

* **Email validation**<br>
    There are multiple ways how to validate the email user entered. React itself has some validation for input type="email". If you entered e.g. 'somename' and click submit button, action won't be finish due to invalid email value. The user will be informed about error via message in the tooltip — "Please include an '@' in the email address. 'somename' is missing an '@'. However, validation can be implemented in some more complex way using input type="text":
        We need two states — email & error. Along with that, we will have two functions — 'emailChange' & 'isValidEmail'. Given that we want the value of input to be whatever user entered, then we gonna use 'onChange' event. With every change of user input, the onChange event will be fired. When this event occurs, the 'emailChange' function will be invoked, as we implemented. With each new invoking, this function will set the new value for the 'email' state. All of this is needed for setting dynamic value for the 'value' attribute of the input. 
        Next step is to check the value user entered. When form submitted, the 'onSubmit' event should be fired. This event will invoke function 'forwardEmail'. Within this function, we gonna use the previously mentioned function 'isValidEmail'. The way this function works is that it will check (test) if the current value of input (our 'email' state) satisfied the 'regex' expression. The 'regex' is a sequence of characters that specifies a match pattern in text. There is not unique pattern for email. The one used for this challenge is taken from the 'https://regexr.com/3e48o' site. 
        ```/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/```
        Explanation:
            ```/``` open —> indicates the start of a regular expression
            ```^``` Beggining -> Matches the beginning of the string, or the beginning of a line if the multiline flag (m) is enabled.
            ```[\w-\.]``` Character set -> match any character in the set
                ```\w``` word -> matches any word character (alphanumeric & underscore)
                ```-``` character -> matches a "-" character 
                ```\.``` escaped character -> matches a "." character
            ```+``` quantifier -> match 1 or more of te preceding token
            ```@``` character -> matches a "@" character
            ```([\w-]+\.)``` capturing group -> groups multiple tokens together and creates a caapture group for extracting a substring or using a backreference.
            ```{2, 4}``` quantifier -> match between 2 and 4 of the preceding token.
            ```$``` end -> matches the end fo the string, or the end of a line if the multiline flag (m) is enabled
            ```/``` close -> indicated the end of a regular expression and the start of expression flags.
        If our value matches the given criteria, this function (isValidEmail) will return 'true'. Then, we can reset our 'email' value to be empty ('') and as optional to log something to the console. Otherwise, we need to set new value for the 'error' state (e.g. 'Email is invalid'). This is important for 'conditional rendering' since dependencing on the 'error' value we will display or not the warning message. 
        ```{error && <p className="content__warningMsg">{error}</p>}```
        Since the initial value for the 'error' state is 'null', this paragraph won't be display unless value for this state change. With the usage of regex, we also provided that empty field will be also considered as an error. This is due to 'isValidEmail' that check if entered value meet the criteria. Empty string is also viewed as something that did not meet the criteria pattern. However, if we want to distinguish the states when input is empty and invalid, we can use 'else if'. Depending on the type of error, we will change value for the 'error' state.
            EMPTY — setError('Required field');
            INVALID  — setError('Please provide a valid email');
        In addition, we need 'useRef' for 'errorIcon' since its hidden by default. When either 'empty' or 'invalid' error occurs, it should be displayed. Since the 'ref' can't be forwarded as a tipical prop, we need to use 'forwardRef'.

    * Card.jsx
        ```jsx
            const isValidEmail = email => {
                return regexEmail.test(email);
            }

            const emailChange = e => {
                setEmail(e.target.value);
            }
            
            const forwardEmail = (e, ref1) => {
                e.preventDefault(); // prevent from refreshing the page
                const errorIcon = ref1.current;
                setError(null);
                if (isValidEmail(email)) {
                    console.log('The email is valid');
                    setEmail('');
                    errorIcon.classList.add('display_none');
                } else if (email === "") {
                    setError('Required field');
                    errorIcon.classList.remove('display_none');
                } else {
                    setError('Please provide a valid email');
                    errorIcon.classList.remove('display_none');            
                }
            }

            return (
                <form className="content__email" onSubmit={(e) => forwardEmail(e, ref1)}>
                    <input 
                        type="text" 
                        placeholder="Email Address" 
                        name="myName" 
                        onChange={(e) => emailChange(e)} value={email} 
                    />
                    <ErrorIcon ref={ref1} />
                    <button className="content__submit">
                        <ArrowIcon />
                    </button>
                    {error && <p className="content__warningMsg">{error}</p>}
                </form>
            )
        ```    

### Continued development

* In-depth explorating of React.
* Aspiration to make better responsive layout.
* Aspiration to make better structure of React components.
* Tending to improve BEM naming convention.
* Understanding & handling the more complex form validation.

### Useful resources

- [React - Components & Props](https://legacy.reactjs.org/docs/components-and-props.html) - Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
- [BEM](https://en.bem.info/) - BEM naming convention is also really important for any projects, expecially the bigger ones.
- [Typographic Hierarchy](https://www.toptal.com/designers/typography/typographic-hierarchy) - Understanding your website structure/hierarchy sometimes can be difficult. Determing accurately typography can be half job done. 
- [An Introduction to Block Element Modifiers (BEM)](https://opensenselabs.com/blog/articles/introduction-block-element-modifiers) - Difference between Block, Modifier and Element.
- [Understanding CSS BEM](https://codeburst.io/understanding-css-bem-naming-convention-a8cca116d252) - Examples of how BEM class namings can be done.
- [BEM Grandchildren](https://scalablecss.com/bem-nesting-grandchild-elements/) - Handling naming of the nesting elements.
- [BEM 101](https://css-tricks.com/bem-101/) - Another source about BEM.
- [Logical AND operator (&&) - Conditional Rendering](https://react.dev/learn/conditional-rendering) - There are multiple ways to implement conditional rendering - using Logical AND operator (&&) is one of them.
- [ref prop - Special props warning](https://legacy.reactjs.org/warnings/special-props.html) - Pay attention that 'key' & 'ref' can't be forwarded.
- [forwardRef](https://react.dev/reference/react/forwardRef) - For forwarding 'ref', we need to wrapp child component into the 'forwardRef' function.
- [onChange event](https://simplefrontend.com/onchange-event-handler-for-input-elements-in-react/) - onChange is also useful for working with radio & checkbox inputs.
- [RegEx](https://regexr.com/) - A lot of useful regex pattern as well as explanations & references.

## Useful commands

**React**
- create new vite application (with React)
    * ```npm create vite@latest```
- install needed packages
    * ```npm install```
- serve app on the localhost (see package.json)
    * ```npm run dev```
- build (predeploy) app for the production - create dist folder (see package.json)
    * ```npm run build```
- deploy app to the GitHub Pages (see package.json)
    * ```npm install gh-pages -D```
    * ```gh-pages -d dist```

**SASS/SCSS**
- install sass
    * ```npm install -D sass```

## Author

- GitHub - [MiloosN5](https://github.com/MiloosN5)
- Frontend Mentor - [@MiloosN5](https://www.frontendmentor.io/profile/MiloosN5)






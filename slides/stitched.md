---
title: Rewriting History With Git - Steven J Hicks
theme: css/theme.css
revealOptions:
  transition: 'none'
  controls: false
  progress: false
  center: true
css: css/custom.css
preprocessor: _build/inject.js
highlightTheme: 'mono-blue'
width: '100%'
height: '100%'
staticDirs: fonts
---
Footer: false

<!-- .slide: data-background="/images/title.jpg" class="title" -->

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" style="width:0;height:0;position:absolute;overflow:hidden;">
  <defs>
<symbol viewBox="0 0 567.31298828125 409.60003662109375" aria-labelledby="apsi-zocial-cloudapp-title" id="si-zocial-cloudapp"><title id="apsi-zocial-cloudapp-title">icon cloudapp</title><path d="M.001 280.576c0-35.504 12.544-65.872 37.632-91.136 25.087-25.264 55.215-37.888 90.368-37.888l.511.512c0-1.024-.08-2.224-.255-3.584-.176-1.36-.256-2.384-.256-3.072 0-40.272 14.08-74.576 42.24-102.912C198.401 14.16 232.449 0 272.385 0c35.152 0 66.048 11.264 92.672 33.792s43.008 50.864 49.152 84.992h8.704c39.92 0 73.984 14.16 102.144 42.496s42.256 62.64 42.256 102.912c0 40.288-14.096 74.592-42.256 102.928s-62.223 42.48-102.144 42.48c-2.736 0-4.784-.16-6.144-.495v.495H120.816v-.512c-33.792-1.712-62.367-15.023-85.76-39.935C11.68 344.24 0 314.72 0 280.576z"/></symbol>
<symbol viewBox="0 0 514.8550415039062 347.53997802734375" aria-labelledby="aysi-zocial-email-title" id="si-zocial-email"><title id="aysi-zocial-email-title">icon email</title><path d="M0 316.758V30.782c0-.33.496-3.475 1.49-9.433l168.308 143.98L1.986 326.688c-1.323-4.634-1.985-7.944-1.985-9.93zM22.342 1.49C24.659.497 27.472 0 30.782 0h453.29c2.98 0 5.958.497 8.937 1.49L324.204 145.968l-22.342 17.873-44.187 36.244-44.187-36.244-22.342-17.873zm.496 344.56L192.14 183.7l65.536 53.123 65.536-53.124L492.513 346.05c-2.648.994-5.461 1.49-8.44 1.49H30.783c-2.649 0-5.297-.496-7.945-1.49zm322.716-180.719L513.366 21.35c.993 2.98 1.489 6.124 1.489 9.434V316.76c0 2.978-.496 6.288-1.49 9.93z"/></symbol>
<symbol viewBox="0 0 640.0180053710938 520.3389892578125" aria-labelledby="dnsi-zocial-twitter-title" id="si-zocial-twitter"><title id="dnsi-zocial-twitter-title">icon twitter</title><path d="M0 461.54c10.42 1.014 20.826 1.548 31.22 1.548 61.048 0 115.528-18.732 163.387-56.17-28.424-.352-53.933-9.041-76.477-26.043-22.57-16.99-37.984-38.675-46.323-65.056 6.933 1.418 15.102 2.095 24.456 2.095 12.15 0 23.766-1.575 34.862-4.684-30.517-5.866-55.766-20.891-75.709-44.996-19.955-24.13-29.919-51.969-29.919-83.527v-1.574c18.395 10.42 38.31 15.805 59.826 16.13-18.016-11.798-32.338-27.304-42.915-46.57-10.575-19.24-15.87-40.13-15.87-62.675 0-23.597 6.088-45.607 18.212-66.095 32.6 40.586 72.418 72.938 119.431 97.055 47 24.092 97.368 37.53 151.158 40.327-2.432-11.448-3.655-21.516-3.655-30.18 0-36.085 12.84-66.954 38.505-92.62C375.868 12.839 406.893 0 443.342 0c37.79 0 69.7 13.88 95.73 41.64 30.167-6.257 57.926-17.015 83.255-32.261-9.718 31.558-28.815 55.845-57.238 72.847 25.327-3.109 50.304-10.055 74.929-20.813-16.651 26.017-38.336 48.742-65.056 68.151v17.198c0 34.992-5.125 70.128-15.35 105.355-10.211 35.214-25.848 68.853-46.83 100.972-20.996 32.065-46.05 60.619-75.189 85.569-29.126 24.977-64.08 44.853-104.849 59.592-40.755 14.752-84.555 22.089-131.398 22.089-72.483-.014-139.606-19.605-201.345-58.8z"/></symbol>
  </defs>
</svg>

# Rewriting History With Git

## Steven Hicks

<p>
  <svg class="icon">
    <use xlink:href="#si-zocial-twitter" />
  </svg>@pepopowitz
</p>

<p>
  <svg class="icon">
    <use xlink:href="#si-zocial-email" />
  </svg>steven.j.hicks@gmail.com
</p>

<p>
  <svg class="icon">
    <use xlink:href="#si-zocial-cloudapp" />
  </svg>stevenhicks.me/rewriting-history-with-git
</p>

Notes:

pre-game:

- STICKERS!

go-time:

- thanks to organizers
- thanks to you

---

Footer: false

<!-- .slide: data-background="/images/artsy.svg" data-background-size="750px" data-background-color="black" -->

Notes:

NYC, MKE

our mission is to expand the art market,

and we're doing that with a platform for collecting and discovering art.

---
Layout: module

# Context

---

Trail: Context

## Why are we here?

---

Trail: Context

## Goal for today

---

Trail: Context

## How we're going to get there

- we're going to use the console!!!
  - I used to be scared of it too

---

Trail: Context

## Setting the scene

---

Trail: Context, Setting The Scene

#### wtf is bill & ted's

---

Trail: Context, Setting The Scene

#### who tf are bill & ted

---

Trail: Context, Setting The Scene

#### why do we need to help them pass their history final

---

Trail: Context, Setting The Scene

#### how are we going to help them pass their history final

---

Trail: Context, Setting The Scene

seek this git log:

```
- form basis of utopian society (now)
- deliver history report (2 hrs ago)
- collect historical figures (4 hrs ago)
- acquire phone booth from rufus (12 hrs ago)
```

---
Layout: module

# What is Git?

---

Trail: What's Git?

## source control (duh)

---

Trail: What's Git?

## Distributed VCS

---

Trail: What's Git?,Distributed VCS

### vs centralized vcs

---

Trail: What's Git?,Distributed VCS

### why does this matter?

---

Trail: What's Git?

## How does git store things?

---

Trail: What's Git?,How does it store things?

### everything is an object

#### folders, files, branches, tags, commits, ...

#### they're related to each other buy trees somehow???

---

Trail: What's Git?,How does it store things?

### not as a diff!

#### as an entire snapshot of your code

- it optimizes how it stores them to avoid redundancy & save space

---

Trail: What's Git?,How does it store things?

### why does this matter?

#### enables git to quickly & easily identify differences/sameness between trees

#### enables git to merge code without conflict

---
Layout: module

# What is a Git commit?

---

Trail: What's a commit?

## a `commit` object + a `tree` object

---

Trail: What's a commit?

## each commit is represented by a unique identifier

- called a SHA

---

Trail: What's a commit?,SHAs

### SHA

- hash generated from the tree
- deterministically unique

---

Trail: What's a commit?,SHAs

### `git log` shows the SHAs

---

Trail: What's a commit?,SHAs

### note on git log

- this is the output by default
- through some flags, you can make it look like this
- (here's how)
- for the rest of this talk I'm going to show the git log in this format
  - and I'll call it `git loggg` to make it obvious this isn't the default behavior
  - note that you too can make your terminal recognize this command by using aliases

---

Trail: What's a commit?

## your working directory is always pointed at a specific commit/hash

---
Layout: module

# Stages of work

---

Trail: Stages of work

## Wheel! Of! Committing!

---

Trail: Stages of work,Wheel! Of! Committing!

### 1. unmodified

### 2. modified (& untracked)

### 3. staged

### 1. committed (same as unmodified, but pointing at a new commit)

---

Trail: Stages of work,Wheel! Of! Committing!

## how do we transition between stages?

### 1-2

### 2-3

### 3-1

### 2-1

Notes:

...

this is how we ADD changes....and if you're using git, you're likely pretty familiar with this. But we're here to rewrite history.

---
Footer: false

<!-- .slide: data-background="/images/title.jpg" class="title" -->

# **Thank you!**

## Steven Hicks

<p>
  <svg class="icon">
    <use xlink:href="#si-zocial-twitter" />
  </svg>@pepopowitz
</p>

<p>
  <svg class="icon">
    <use xlink:href="#si-zocial-email" />
  </svg>steven.j.hicks@gmail.com
</p>

<p>
  <svg class="icon">
    <use xlink:href="#si-zocial-cloudapp" />
  </svg>stevenhicks.me/rewriting-history-with-git
</p>

Notes:

- Thank you for your time!

- Questions afterward

- Enjoy the rest of \_\_\_

---

Wrapper: double-wide

Layout: long-list

Trail: Resources, Image Credits

##### [some image](some url)

---

Layout: long-list

Trail: Resources, Further Reading

##### [some article](some url)

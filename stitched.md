---
title: Rewriting History With Git - Steven J Hicks
theme: css/theme.css
revealOptions:
  transition: 'none'
  controls: false
  progress: false
  display: flex
  disableLayout: false
css: css/custom.css
scripts: scripts/reloadSvgBackgrounds.js
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

### Git is scary

<!-- .element: class="fragment" -->

Notes:

Trying new things is scary.

Trying new things _with Git_ is extra scary.

There are high stakes: if I mess up my Git history, I've lost all my work!

That would not only make me angry and sad, it would set me back a couple days and force me to redo stuff.

So it's pretty easy to justify playing it safe and sticking to the things we know how to do.

Commit, push, pull. Commit, push, pull. Commit, push, pull.

...

but There's so much more to Git than `commit`, `push`, `pull`

...

One of my favorite things to with git is rewrite history

And there are very very many ways to do that

---

Trail: Context

## Goals for today

### 1. Give you a **deeper understanding** of Git

### 2. Get you comfortable **rewriting history** with Git

Notes:

---
Layout: module

# A Deeper Understanding of Git

---
Trail: Deeper Understanding

# What's Git?

---

Trail: Deeper Understanding, What's Git?

## Source code management (SCM)

### Keeps a record of your changes

<!-- .element: class="fragment" -->

### Helps engineers collaborate on code

<!-- .element: class="fragment" -->

Notes:

the silly answer:

the url is git-scm.com

that's what the scm stands for

...

As your code changes over time, Git helps you keep a record of the changes.

When you need to know why a change was made, or who made it (so you can ask them nicely if they remember any details), you get information from your Git history.

...

When multiple engineers want to collaborate on a project, Git helps them work independently until they're ready to integrate their changes.

---

Trail: Deeper Understanding, What's Git?

## **Distributed** Source Control

### No single source of truth

<!-- .element: class="fragment" -->

### You choose who gets your changes

<!-- .element: class="fragment" -->

Notes:

as opposed to centralized

which have a single source of truth for the codebase, on a server somewhere.

when you commit to centralized source control, your changes are persisted immediately on the server

and they're available immediately to the rest of your team

...

with a distributed system like Git,

there's no single source of truth.

No server.

though most teams use a service like GitHub or GitLab to act as a centralized host.

...

When you commit changes, your work is only available to you, on your local system.

you can choose to push those changes anywhere -- or nowhere.

---

Trail: Deeper Understanding,What's Git?,Distributed VCS

## You have freedom to rewrite the history of your code

Notes:

The ability to work in a codebase isolated from the rest of your team

gives you the freedom to rewrite the history of your code.

When you don't have to worry about immediately updating the single source of truth,

you can write and rewrite your commits many times

before sharing them with the rest of your team.

---

Trail: Deeper Understanding

# What does Git store?

Notes:

how does it store your code & its history?

---

Trail: Deeper Understanding,What Does Git Store?

## Everything is an **object**

### folders, files, branches, tags, commits, ...

Notes:

If you were to build a source control system from scratch,

how would you define the data model?

_Folders_ contain more _folders_ and _files_; branches contain folders and files; I commit changes to folders and files;

Git abstracts all of these as "objects"

TODO: some sort of illustration here?

---

Trail: Deeper Understanding,What Does Git Store?

## TODO: objects are related to each other by trees somehow???

---

Trail: Deeper Understanding,What Does Git Store?

## An entire snapshot per commit

### Not a diff!

TODO: some sort of illustration here

Notes:

Git captures an entire snapshot of your codebase in every commit.

It's not a diff! It's the entire codebase, for every commit

it optimizes how it stores them to avoid redundancy & save space

---

Trail: Deeper Understanding,What Does Git Store?

## Why do we care?

### Enables Git to quickly identify actual differences

### Enables Git to merge code with fewer conflicts

Notes:

When two files are the same underlying _object_, Git can identify quickly that they haven't changed.

When two branches in a repository contain identical subtrees represented by the same _object_, Git recognizes that nothing has changed.

When a single file is changed, the majority of the tree stays the same, and Git can quickly identify the limbs that are different.

this enables it to generate the diffs you're used to seeing, quickly and efficiently

...

When you write and rewrite your commits, Git compares and traverses subtrees to determine the final state.

This is easier and faster than if it were scouring folders and files for differences.

Less user intervention is needed to resolve the final state.

---
Trail: Deeper Understanding

# What's a Git commit?

Notes:

represents a moment in time in your code

What changed?

What did it change from and what did it change to?

When did it change and who changed it?

---

Trail: Deeper Understanding,What's A Commit?

## a **`commit`** object + a **`tree`** object

Notes:

And recall that Git stores all information as objects.

When you create a Git commit, there are two objects written into Git's storage:

...

the commit contains meta information like "who made the change and when did they make it".

the tree represents a snapshot of the entire codebase at this moment.

...

Each commit in your Git history (or log) contains both of those objects.

Even if you change only a single line in a single file and commit it, Git doesn't just store that one line change —

it stores information about the change, and an entire snapshot of the codebase.

---

Trail: Deeper Understanding,What's A Commit?

## Each commit is represented by a **unique identifier** (SHA)

### The SHA is a hash generated from the tree

<!-- .element: class="fragment" -->

### It's deterministically unique

<!-- .element: class="fragment" -->

Notes:

When a commit is written to your Git log, Git generates an identifier for it

you'll often hear the identifier referred to as the "SHA"

because it's generated by the SHA-1 checksum algorithm

...

Which is an algorithm to generate a hash based on the exact tree of changes

and which happens to be deterministically unique

so any specific set of code generates a different value than another set that differs by even one single character.

---

Trail: Deeper Understanding,What's A Commit?,SHAs

TODO: show the log here with SHA's

Notes:

If you run the command `git log` in a directory managed by Git,

you can see the SHA of each commit —

it's the cryptic sequence of characters representing each commit.

You might have checked out a specific commit by its SHA before with a command like `git checkout SHA`

---

Trail: Deeper Understanding,What's A Commit?

## Notes on `git log`

---

Trail: Deeper Understanding,What's A Commit?,git log

IMAGE: this is the output by default

---

Trail: Deeper Understanding,What's A Commit?,git log

IMAGE: through some flags, you can make it look like this

---

Trail: Deeper Understanding,What's A Commit?,git log

TODO: - for the rest of this talk I'm going to show the git log in this format

Notes:

- and I'll call it `git loggy` to make it obvious this isn't the default behavior
- note that you too can make your terminal recognize this command by using aliases

---

Trail: Deeper Understanding,What's A Commit?

## Your working directory always points at a specific commit/hash

IMAGE: some illustration?

---
Layout: module

# Stages of Work

Notes:

stages can be represented by a game I like to call...

---

<!-- .slide: data-background="/images/wheelofgit.svg" -->

Trail: Stages of work

Notes:

the stages of working in git are like a wheel

you move through the stages by spinning the wheel

---

<!-- .slide: data-background="/images/wheel-1-static.svg" -->

Trail: Stages of work,Wheel! Of! Git!

Notes:

you have no local changes.

---

<!-- .slide: data-background="/images/wheel-1-2-animated.svg" -->

Trail: Stages of work,Wheel! Of! Git!

Notes:

once you change some files and save them,

the wheel spins forward one section

and we're now in the "modified" or "untracked" state

modified: a file already in the repository has been updated

untracked: a new file has been added that is not yet in the repository

---

<!-- .slide: data-background="/images/wheel-2-3-animated.svg" -->

Trail: Stages of work,Wheel! Of! Git!

Notes:

then we can move our changes to a "staging" area

this moves us forward to the `staged` sector of the wheel

---

<!-- .slide: data-background="/images/wheel-3-1-animated.svg" -->

Trail: Stages of work,Wheel! Of! Git!

Notes:

and then we commit those staged changes

and the wheel is back where it started,

in an "unmodified" position, but pointed at a different commit

---

Trail: Stages of work,Wheel! Of! Git!

## Transitioning states

---

Trail: Stages of work,Wheel! Of! Git!,Transitioning States

### 1-2

IMAGE: transitioning from 1 to 2

#### Save your changes

IMAGE: gst modified/untracked

Notes:

When you save them, Git automatically detects your changes.

If you've saved changes to an existing file, the changes enter the Modified state.

If you've saved changes to a new file, the file enters the Untracked state.

---

Trail: Stages of work,Wheel! Of! Git!,Transitioning States

### 2-3

IMAGE: transitioning from 2 to 3

#### `git add ./path-to-add`

IMAGE: gst staged

Notes:

`path-to-add` can be an individual filename,

a folder that contains multiple modified/untracked files,

or even `.` to represent adding _all_ changed files.

...

Once you've staged your changes, you can check your local working status with `git status`. The results will look like this:

---

Trail: Stages of work,Wheel! Of! Git!,Transitioning States

### 3-1 (forward)

IMAGE: transitioning from 3 to 1 (forward)

#### `git commit -m "This is my commit message"`

IMAGE: gst unmodified

Notes:

With our changes staged, we can write a commit to our Git history.

There are many flags and arguments you can use in the `git commit` command.

My favorite flavor is this one

...

We can see our new commit in our log, by checking the status:

and we're now back at stage 1 of the wheel!

Pointed at a particular commit, with no local changes.

---

Trail: Stages of work,Wheel! Of! Git!,Transitioning States

IMAGE: wheel showing multiple rotations/commits

Notes:

As we continue our work, we follow this wheel of...

making changes

saving them

staging them

committing them

And with each commit, we build a history of changes.

---

Trail: Stages of work,Wheel! Of! Git!,Transitioning States

### 2-1 (forward)

IMAGE: transitioning from 2 to 1 (forward)

#### `git commit -a -m "My commit message"`

Notes:

You might be comfortable enough with changes that you want to skip the staging area

it is possible to directly commit modified files.

The `git commit` command includes a `-a` argument that will add all Modified changes

...

for untracked you need to add them to staging area first

(but you can assign an alias to do this all in one command)

...

This used to be my default mode -- just go from modified/untracked to committed

because what's the point of staging?

But the staging area gives you control over what gets committed

---

Trail: Stages of work,Wheel! Of! Git!,Transitioning States

LineNumbers: 1-2|3-4

### Why use the staging area?

IMAGE: demonstrate two logical commits in my changes

```bash
git add ./calendar.js
git commit -m "Update calendar with new rules"
git add ./user-profile.js
git commit -m "Update user profile with new design"
```

Notes:

You can stage a subset of your changes

TODO: find a place to mention that you can have changes in both staged & unstaged states

And if you've made a bunch of changes that feel like they're logically two separate commits,

stage some of them and commit those, then commit the rest of the changes separately.

This suggests that different changes can be in different stages of the wheel

which is absolutely true!

...

this is how we ADD changes....and if you're using git, you're likely pretty familiar with this.

But you can also spin the wheel backward -- roll back a commit, unstage work, ...

And this is where we're going to start rewriting history.

---
Layout: module

# Rewriting History

Notes:

with a deeper understanding of git, we're ready for our second goal of the day:

becoming more comfortable with rewriting history

---

Trail: Rewriting History

## How we're going to get there

### Our tools

---

Trail: Rewriting History, Our Tools

### console

TODO: expand this

- console (today)
  - there's zero reason you can't do this with a gui
- git status
  - what's in my current working directory?
    - show example?
  - in a gui that might be listing files in different boxes
- git log
  - what it's in my commit history?
  - git loggy
  - in a gui it might show you a nice visual log
- git reflog
  - what actions have I taken in this repo?
    - show example
  - may or may not be accessible in your gui!

---

TODO: ditch this?

### With a phone booth

<!-- .element: class="fragment" -->

Notes:

I used to be scared of it too

...

that's right, we're going to time travel in a phone booth, like some of the greatest heroes in the history of mankind

---

Trail: Rewriting History, Setting The Scene

IMAGE: bill & ted in a phone booth

Notes:

I apologize for using a movie from 1989 iin this talk

but I am old and it's what I know

If there's an appropriate replacement made more recently, pretend that's what I'm talking about.

---

Layout: module

# **Spoiler Alert!!!**

---

Trail: Rewriting History, Setting The Scene

IMAGE: plot summary

Notes:

a quick plot summary for those who were not born until 10 years after this classic:

two high school students named bill & ted are in danger of flunking their history final,

which we find out would be catastrophic

as their awful garage band named wyld stallyns (spelled like that)

goes on to form the basis of a utopian society hundreds of years in the future.

to pass their final, a guy from that future society named rufus brings them a time-travelling phone booth

so they can learn about history

instead of learning about history, they steal historical figures and bring them back to their history final in 1989.

and hilarity ensues.

---

Trail: Context, Setting The Scene

## Help Bill & Ted pass their history final

IMAGE: future utopian society

---

Trail: Context, Setting The Scene

LineNumbers: 1,6|1,5|1,4|1,3|1,2

```text
> git loggy
e5e5e5e5e 5) form basis for future utopian society
d4d4d4d4d 4) deliver history report
c3c3c3c3c 3) find napoleon at the waterpark
b2b2b2b2b 2) collect historical figures
a1a1a1a1a 1) acquire phone booth at the circle k
```

IMAGE: these 4 things

Notes:

and this is how are we going to help them pass their history final

we're going to seek this git log

---
Layout: module

# Undoing Changes

## I made changes that **I haven't committed** and I want to undo them.

Notes:

haven't committed -- these are local changes that I have,

in an untracked, unstaged, or staged state

and as you might expect, our strategies here depend on

_which_ of those states your work is in

and where we are on the wheel! of! git!

---

Trail: Undoing changes

## Case: "I want to **unstage** staged changes to a file"

IMAGE: from staged work to unstaged on wheel of git

---

Trail: Undoing changes,Unstage staged changes

LineNumbers: 1|5

### Scenario

```bash
> git status
On branch main
Changes to be committed:
  (use "git restore --staged (file)..." to unstage)
        modified:   3_find_napoleon_at_waterpark.md
```

---

Trail: Undoing changes,Unstage staged changes

LineNumbers: 1|5-6

### Scenario

```diff
> git diff --staged

 - Ted's brother Deacon ditches Napoleon at bowling alley.
 - The boys leave the other figures at the mall.
-- Bill & Ted find Napoleon at a waterpark.
+- Bill & Ted leave Napoleon at a waterpark.
 - Ted's dad arrests the other figures for destroying the mall.
```

---

Trail: Undoing changes,Unstage staged changes

LineNumbers: 1|2,4,7

### Resolution

#### `git restore --staged ./path`

```bash
> git restore --staged .
> git status
On branch main
Changes not staged for commit:
  (use "git add (file)..." to update what will be committed)
  (use "git restore (file)..." to discard changes in working directory)
        modified:   3_find_napoleon_at_waterpark.md

no changes added to commit (use "git add" and/or "git commit -a")
```

---

### Real-life Examples

- decide against committing some work 🤷
<!-- .element: class="fragment" -->
- partial staging: stage all, then unstage unrelated things
<!-- .element: class="fragment" -->

Notes:

(2) sometimes an easier way to partially stage

---

Trail: Undoing changes

## Case: "I want to discard **unstaged** changes to a file"

IMAGE: unstaged work to no changes on wheel of git

---

Trail: Undoing changes,Discard unstaged changes

LineNumbers: 1|3,6|8

### Scenario

```bash
> git status
On branch main
Changes not staged for commit:
  (use "git add (file)..." to update what will be committed)
  (use "git restore (file)..." to discard changes in working directory)
        modified:   3_find_napoleon_at_waterpark.md

no changes added to commit (use "git add" and/or "git commit -a")
```

---

Trail: Undoing changes,Discard unstaged changes

LineNumbers: 1|3-7|11-12

### Scenario

```diff
> git diff

diff --git a/3_find_napoleon_at_waterpark.md b/3_find_napoleon_at_waterpark.md
index 2fe075c..adb9118 100644
--- a/3_find_napoleon_at_waterpark.md
+++ b/3_find_napoleon_at_waterpark.md
@@ -2,5 +2,5 @@

 - Ted's brother Deacon ditches Napoleon at bowling alley.
 - The boys leave the other figures at the mall.
-- Bill & Ted find Napoleon at a waterpark.
+- Bill & Ted leave Napoleon at a waterpark.
 - Ted's dad arrests the other figures for destroying the mall.
```

---

Trail: Undoing changes,Discard unstaged changes

LineNumbers: 1|2-4

### Resolution

#### `git restore ./path`

```bash
> git restore .
> git status
On branch main
nothing to commit, working tree clean
```

---

Trail: Undoing changes,Discard unstaged changes

### Real-life Examples

- accidentally type a character in a file and suddenly your app doesn't work anymore 😅
<!-- .element: class="fragment" -->
- leave a stray console.log 😬
<!-- .element: class="fragment" -->
- hack your app to make a certain flow happen temporarily 🪚
<!-- .element: class="fragment" -->
- decide against a change 🙅‍♀️
<!-- .element: class="fragment" -->

---

Trail: Undoing changes

## Case: "I want to discard **staged** changes to a file"

IMAGE: from staged changes to no changes on wheel

---

Trail: Undoing changes,Discard staged changes

### Resolution

#### `git restore --staged --worktree`

Notes:

- `--worktree` was assumed in our prior example (undo unstaged work)

---

Trail: Undoing changes,Discard staged changes

### Real-life Examples

- decide against committing some work 🤷
<!-- .element: class="fragment" -->

Notes:

maybe you want to switch to another branch & don't care about the work here

---

Trail: Undoing changes

## Case: "I want to discard changes to an **untracked** file"

IMAGE: from untracked file to no changes on wheel of git

---

Trail: Undoing changes,Discard untracked file

### Resolution

#### ` git clean ./path`

---

Trail: Undoing changes,Discard untracked file

### Notes

- probably need either `-i` or `-f` flag
  - `-i` is interactive - it asks you which files to reset
  - `-f` is force - just does all of them.
  - `-d` to include directories
  - if you've changed a git config setting, you might not

---

Trail: Undoing changes,Discard untracked file

### Real-life Examples

- decide against committing some work 🤷
<!-- .element: class="fragment" -->

---

Trail: Undoing changes

## Case: "I just want to discard all files!!!"

###### `git clean -df . && git restore --staged --worktree .`

<!-- .element: class="fragment" -->

###### `git config --global alias.discard "\!git clean -df . && git restore --staged --worktree ."`

<!-- .element: class="fragment" -->

Notes:

combine the previous few slides

and then create an alias for it to save yourself the trouble of typing all that.

---

Trail: Undoing changes

## Case: "I want to discard all changes **but save them for later**"

IMAGE: moving changes to a drawer somewhere labelled "stashes"

---

Trail: Undoing changes,Save changes for later

### Resolution

#### `git stash --include-untracked`

<!-- .element: class="fragment" -->

#### `git stash pop/apply`

<!-- .element: class="fragment" -->

Notes:

saves it to a storage area named "stashes"

...and when you want it back, `git stash pop/apply`

(pop removes it from the stashes queue, apply leaves it in the stashes queue.)

---

Trail: Undoing changes,Save changes for later

### Real-life Examples

- switch branches to look into something 🕵️‍♂️
<!-- .element: class="fragment" -->
- set aside a failed experiment 🧪
<!-- .element: class="fragment" -->

---
Layout: module

# Updating Commits

## I committed something but I want to change it.

---

Trail: Updating commits

IMAGE: updating a commit means updating the SHA

---

Trail: Updating commits ⚠️

## !!!Danger zone!!!!

IMAGE: DANGER ZONE

### Be cautious when commits have been pushed to others!

TODO: what can happen when updated commits are pushed?

---

Trail: Updating commits ⚠️

## I've updated a commit! Is it safe to push?

- Only if **coordinated with others** active on this branch

<!-- .element: class="fragment" -->

- **Establish team practices** around pushing updated commits

<!-- .element: class="fragment" -->

Notes:

---

Trail: Updating commits ⚠️,Coordinating with others

### Working alone?

You're clear.

---

Trail: Updating commits ⚠️,Coordinating with others

### Working with a pair?

It's fine.

Have them delete their local copy of the branch & re-pull it.

<!-- .element: class="fragment" -->

---

Trail: Updating commits ⚠️,Coordinating with others

### Working with someone who also made changes?

It can be done.

One of you pushes, the other gets their commits back onto the branch via merging/rebasing/cherry-picking

<!-- .element: class="fragment" -->

TODO: show them how to do this?

---

Trail: Updating commits ⚠️,Coordinating with others

### Working with several people?

**Establish team rules/guidance** & stick to it.

---

Trail: Updating commits ⚠️

## Why would I ever want to update existing commits??

---

Trail: Updating commits ⚠️,Why update?

TODO: build this out

- all commits should be functional (makes git bisect possible)
- more helpful for reviewers
  - commits tell a story
  - show a jon pr vs a pavlos pr
- remove confusing false starts or misleading commit messages

---

Trail: Updating commits ⚠️

## Case: "I want to update my last commit"

IMAGE: updating most recent commit

---

Trail: Updating commits ⚠️,Most recent commit

### Resolution

#### `git commit --amend`

Notes:

- amends the previous commit
- including SHA!
  - That SHA is a fingerprint of the code in its current state, so if that state changed, so did the SHA
- add/stage things before running the command,
  - or add the -a flag

---

Trail: Updating commits ⚠️,Most recent commit

### Real-life Examples

- improve a commit message 💪🏼
<!-- .element: class="fragment" -->
- add/update changes ➕
<!-- .element: class="fragment" -->
- remove a comment/debugging statement 🐛
<!-- .element: class="fragment" -->
- add a collaborator! 👥
<!-- .element: class="fragment" -->

---

Trail: Updating commits ⚠️,Most recent commit,Giving credit

TODO: show trailer

IMAGE: github to show collaborators

Notes:

- we should give credit to collaborators!

---

Trail: Updating commits ⚠️,Most recent commit,Giving credit

### [github.com/jonallured/pear](https://github.com/jonallured/pear)

```
TODO: show some pear commands
```

---

Trail: Updating commits ⚠️

## Case: "I want to update an older commit"

IMAGE: please hold for this to come later

---
Layout: module

# Undoing Commits

## I've committed horrible things and I want to undo them.

---

Trail: Undoing commits

## Case: "I want to undo a commit without rewriting history"

IMAGE: revert commit without rewriting history

Notes:

so effectively, I want a new commit that does the opposite of an old commit

adds what was removed, and removes what was added

the inverse of a previous commit

---

Trail: Undoing commits,Undo without rewriting history

### Resolution

#### `git revert a1a1a1a1`

IMAGE: log after a revert

Notes:

- this creates another commit with the inverse of those changes
- the original commit remains in the log forever!
- which is nice if you don't want to worry about this being a shared/public branch
- note that changes were only added to the end of the log, not rewritten

---

Trail: Undoing commits,Undo without rewriting history

### Real-life Examples

- "Rolling back" a questionable change that got deployed 🤔
<!-- .element: class="fragment" -->

---

Trail: Undoing commits

## Case: "I want to undo my most recent commit(s)"

IMAGE: undoing most recent commit(s)

Notes: this applies to the most recent N commits

---

Trail: Undoing commits,Undo most recent commits ⚠️

## !!!Danger zone!!!!

IMAGE: DANGER ZONE

Notes:

a revert commit didn't rewrite the log

but now we're going to rewrite the log

---

Trail: Undoing commits,Undo most recent commits ⚠️

### Resolution

#### `git reset a1a1a1a1`

IMAGE: wheel rolling back a few commits

Notes:

- target can be a SHA, or a branch name, or a label...anything git can use to identify a specific commit
- there will be some arguments to this command
- ...
- for starters, you _can_ give it a path if you want to reset specific files
- it will assume you just mean everything
- ...
- but also, we can tell Git what to do with the changes it resets

---

Trail: Undoing commits,Undo most recent commits ⚠️,git reset

### `git reset --soft a1a1a1a1`

IMAGE: results after soft reset

Notes:

- will leave changes that were undone in a **staged** state

- afterward you can do what you want with the changes -- stash them, etc.

---

Trail: Undoing commits,Undo most recent commits ⚠️,git reset

### `git reset --mixed a1a1a1a1`

IMAGE: results after mixed reset

Notes:

will leave changes that were undone in a **changed** state

---

Trail: Undoing commits,Undo most recent commits ⚠️,git reset

### `git reset --hard a1a1a1a1`

IMAGE: results after hard reset

Notes:

will revert changes that were undone!!

---

Trail: Undoing commits,Undo most recent commits ⚠️,git reset

### Real-life Examples

- accidentally committed on a branch you didn't mean to 😅
<!-- .element: class="fragment" -->
- too much in one commit and you want your log to tell a story 📕
<!-- .element: class="fragment" -->
- committed a secret but didn't push it up yet 😬
<!-- .element: class="fragment" -->

Notes:

- 1: you would reset, switch to a new branch, & commit
- 3: note that the commit itself doesn't get cleaned up right away, until git garbage collects it
  - and in order to be removed by gc, it needs to be removed from reflog
    - which by default doesn't happen for 30 days for unreachable commits
    - so if you need to completely wipe this commit from existence, you have to do a little bit more

---

Trail: Undoing commits

## Case: "Awwww 🤬 I committed secrets and I pushed them up HALP"

IMAGE: secrets in the log

Notes:

we can try to rewrite with reset, but here's the problem

---

Trail: Undoing commits,Spoiled secrets ⚠️

IMAGE: reflog showing secrets committed

Notes:

even if we do, and we don't see those secrets, the reflog still has that commit!

the reflog will get cleared out locally through garbage collection

so if you didn't push the commit with the secrets, and you reset, you're fine

but if you pushed up that commit, it's out there

and you need to take a couple drastic steps

---

Trail: Undoing commits,Spoiled secrets ⚠️

## !!!Danger zone!!!!

## IMAGE: DANGER ZONE

---

Trail: Undoing commits,Spoiled secrets ⚠️

### Resolution

#### 1. `git filter-branch`

#### 2. Cycle your credentials

Notes:

- https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things

---
Layout: module

# Moving Commits

## I want to move commits to a different branch.

---

Trail: Moving commits

## Case: "I want to copy specific commits into another branch"

IMAGE: moving a cherry-picked commit from one branch to another

---

Trail: Moving commits,Copy commits from another branch

### Resolution

#### `git cherry-pick a1a1a1a1`

IMAGE: cherry pick applied to the end

Notes:

this will select a commit from anywhere in your log, and apply it to the end of your current branch

---

Trail: Moving commits

## Case: "I want to move the head of my branch to another starting point"

IMAGE: moving a branch head

---

Trail: Moving commits,Moving branch head ⚠️

## !!!Danger zone!!!!

IMAGE: DANGER ZONE

Notes:

even though the contents of the commits we're moving haven't changed,

the code they're based on is different

so the SHAs are different

---

Trail: Moving commits,Moving branch head ⚠️

## Merging vs rebasing

IMAGE: merging
IMAGE: rebasing

Notes:

when we say "move the branch head" we mean rebasing

merging applies the other branch to the end of this one, as a new "merge commit"

rebasing is like winding the wheel of git back a few turns, then checking out a different commit, then letting the wheel spin back forward

---

Trail: Moving commits,Rebasing a branch ⚠️

### Resolution

- `git rebase some-identifier`

Notes:

- identifier can be a branch name, a SHA, a tag, a relative reference like HEAD~2....

---

Trail: Moving commits,Rebasing a branch ⚠️

### Real-life Examples

- new changes have been merged to main and I want my branch based on latest 🤗
<!-- .element: class="fragment" -->
- created a branch from the wrong commit/branch and I want to move it 🚛
<!-- .element: class="fragment" -->

---
Layout: module

# Rewriting Old Commits

## I did something a few commits ago that I want to rewrite.

Notes:

- not just "change" -- _rewrite_.
- If you just want to undo and don't care about rewriting history, you can use a revert commit

---

Trail: Rewriting old commits

## Interactive Rebasing

---

Trail: Rewriting old commits,Interactive rebasing

IMAGE: rebasing and watching the wheel replay on another head

Notes:

we talked about rebasing, as this thing we do to move a branch head

---

Trail: Rewriting old commits,Interactive rebasing

IMAGE: rebasing and watching the wheel replay on itself

Notes:

but there's no reason we couldn't do a rebase against the head we're already pointed at

but what would be the point of that?

---

Trail: Rewriting old commits,Interactive rebasing

IMAGE: rebasing and watching the wheel replay on itself with something other than "pick"

Notes:

well, what if we were to replay on the head we're already pointed at,

but do different things with the commits we're replaying?

---

Trail: Rewriting old commits,Interactive rebasing

IMAGE: rebasing and watching the wheel replay with a manifest

Notes:

and that's exactly what interactive rebasing is

- we replay our current branch onto a head, which one isn't important
- we give git a manifest specifying what to do with each commit in the branch
- and git rebases & applies the actions we specify

---

Trail: Rewriting old commits,Interactive rebasing

### Resolution

- `git rebase -i main`

IMAGE: an interactive rebase in terminal

Notes:

- in practice, it looks like this:

- note that the default is to "pick" each commit.

  - if you don't change any, it is the same as a plain non-interactive rebase

- note that you can abort from the rebase interactive screen by exiting without saving `:q!`
- to continue, save the file `:wq`

---

Trail: Rewriting old commits,Interactive rebasing ⚠️

## !!!Danger zone!!!!

IMAGE: DANGER ZONE

Notes:

the SHAs are changing again!

---

Trail: Rewriting old commits,Interactive rebasing ⚠️

## Case: "I want to reorder the commits in this branch"

IMAGE: reordering commits in an interactive rebase

---

Trail: Rewriting old commits,Interactive rebasing ⚠️,Reordering commits

### Resolution

#### `git rebase -i main`

#### swap lines

IMAGE: swapping lines in an interactive rebase

Notes:

find VIM commands for moving lines

---

Trail: Rewriting old commits,Interactive rebasing ⚠️,Reordering commits

### Real-life Examples

- I want my PR to tell a story 📖
<!-- .element: class="fragment" -->
- I want my PR to be a useful guide for someone doing something similar in the future 📝
<!-- .element: class="fragment" -->

Notes:

Even if you go from 7-6-8 to 6-7-8, and both end up with the code being the same at 8, you'll end up with a new commit for 8!

The SHA of 6 and 7 changed, so 8 does too!

---

Trail: Rewriting old commits,Interactive rebasing ⚠️

## Case: "I want to remove a commit from this branch"

IMAGE: dropping commits in an interactive rebase

---

Trail: Rewriting old commits,Interactive rebasing ⚠️,Removing commits

### Resolution

#### `git rebase -i`

#### `drop`/`d`

IMAGE: dropping commits in an interactive rebase

Notes:

---

Trail: Rewriting old commits,Interactive rebasing ⚠️,Removing commits

### Real-life Examples

- I made a quick fix and committed it in my branch but someone else did it better in another branch 🤗
<!-- .element: class="fragment" -->
- I made a commit that I just don't want anymore 🗑
<!-- .element: class="fragment" -->

Notes:

ability to drop through interactive rebase gives you freedom to mess around and try things out,

and not worry about people seeing your experiments

---

Trail: Rewriting old commits,Interactive rebasing ⚠️,Reordering commits

## Case: "I want to update a commit in this branch"

IMAGE: updating a commit in an interactive rebase

Notes:

remember that if it's the latest you can use `git commit --amend` without rebasing

---

Trail: Rewriting old commits,Interactive rebasing ⚠️,Reordering commits

### Resolution

#### `git rebase -i main`

#### `edit`/`e`

IMAGE: editing in an interactive rebase
Notes:

- make the changes
- `git commit --amend` (or make a new commit)
- `git rebase --continue`

- you can edit multiple commits while rebasing
- if you do multiple, you'll repeat the "make changes, amend, continue" loop until they're all complete

---

Trail: Rewriting old commits,Interactive rebasing ⚠️,Reordering commits

### Real-life Examples

- I want to give credit where credit is due! 🍐
<!-- .element: class="fragment" -->
- I accidentally included a comment or debugging statement in a previous commit 🐛
<!-- .element: class="fragment" -->

---

Trail: Rewriting old commits,Interactive rebasing ⚠️

## Case: "I want to combine some older commits into one"

IMAGE: squashing commits in an interactive rebase

---

Trail: Rewriting old commits,Interactive rebasing ⚠️,Combining commits

### Resolution

#### `git rebase -i main`

#### `squash`/`s` or `fixup`/`f`

Notes:

- diff between s and f is that squash will preserve the squashed commit messages as notez

- git will ask you to edit the message if you squash

- `git rebase --continue`

---

Trail: Rewriting old commits,Interactive rebasing ⚠️,Combining commits

### Real-life Examples

- I missed part of a previous commit until later 😮
<!-- .element: class="fragment" -->
- I want my PR to tell a story 📗
<!-- .element: class="fragment" -->
- I want my PR to be a useful guide for someone doing something similar in the future 📝
<!-- .element: class="fragment" -->

Notes:

---

TODO: figure out how to talk about conflicts

- need to deal with any conflicts along the way
  - make changes
  - commit them
  - `git rebase --continue`

TODO: maybe a complicated interactive rebase to show it all coming together?

---
Layout: module

# Epic Conclusion

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

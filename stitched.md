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

- and I'll call it `git loggg` to make it obvious this isn't the default behavior
- note that you too can make your terminal recognize this command by using aliases

---

Trail: Deeper Understanding,What's A Commit?

## Your working directory always points at a specific commit/hash

IMAGE: some illustration?

---
Layout: module

# Stages of Work

---

Trail: Stages of work

## Wheel! Of! Git!

IMAGE: illustration like wheel of fortune

Notes:

the stages of working in git are like a wheel

you move through the stages by spinning the wheel

---

Trail: Stages of work,Wheel! Of! Git!

### 1. Unmodified

IMAGE: wheel of committing 1 (make sure to show SHA so I can show a different one later)

Notes:

you have no local changes.

---

Trail: Stages of work,Wheel! Of! Git!

### 2. Modified (or Untracked)

IMAGE: wheel of committing 2

Notes:

once you change some files and save them,

the wheel spins forward one section

and we're now in the "modified" or "untracked" state

modified: a file already in the repository has been updated

untracked: a new file has been added that is not yet in the repository

---

Trail: Stages of work,Wheel! Of! Git!

### 3. Staged

IMAGE: wheel of committing 3

Notes:

then we can move our changes to a "staging" area

this moves us forward to the `staged` sector of the wheel

---

Trail: Stages of work,Wheel! Of! Git!

### 1. Committed

#### Same as unmodified, but now pointing at a new commit

IMAGE: wheel of committing 1 again

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
Layout: module

# Undoing Changes

## I made changes that I haven't committed and I want to undo them.

---

Trail: Undoing changes

## It depends

on where we are on the wheel! of! commits!

---

Trail: Undoing changes

## Case: "I want to discard unstaged changes to a file"

### Scenario

### Command

- `git restore`

  - `--worktree` is assumed

### Real-life Examples

---

Trail: Undoing changes

## Case: "I want to unstage staged changes to a file"

- `git restore --staged`

### Scenario

### Command

### Real-life Examples

---

Trail: Undoing changes

## Case: "I want to discard staged changes to a file"

### Scenario

### Command

- `git restore --staged --worktree`

### Real-life Examples

---

Trail: Undoing changes

## Case: "I want to discard changes to an untracked file"

### Scenario

### Command

- ` git clean`
- probably need either `-i` or `-f` flag
  - `-i` is interactive - it asks you which files to reset
  - `-f` is force - just does all of them.
  - `-d` to include directories

### Real-life Examples

---

Trail: Undoing changes

## Case: "I want to discard all changes!"

### Scenario

### Command

- `git clean -df && git restore --worktree --staged .`
- make an alias for it!
- or stash & forget about it :)

---

Trail: Undoing changes

## Case: "I want to discard all changes but save it for later"

### Scenario

### Command

- `git stash`

...and when you want it back, `git stash pop/apply`
(pop removes it from the stashes queue, apply leaves it in the stashes queue.)

### Real-life Examples

---
Layout: module

# Updating Commits

## I committed something but it was not quite right.

---

Trail: Updating commits

## !!!Danger zone!!!!

Be cautious when commits have been pushed to others!

- if they have started more work based on that commit, things get real bad!!!
- if they haven't started any work, they will probably want to delete the branch before re-fetching it.

---

Trail: Updating commits

## Case: "I want to update my last commit"

### Scenario

### Command

- `git commit --amend`
- add things before running the command, or add the -a flag
- amends the previous commit

### Real-life Examples

- update a commit message or body
- add/update changes
  - I accidentally included a comment or debugging statement in a previous commit
- add a collaborator
  - give credit where credit is due!
  - show footer
  - mention pear

---

Trail: Updating commits

## Case: "I want to update an older commit"

- we're going to get to this later

---
Layout: module

# Undoing Commits

## I committed things and I want to undo them.

---

Trail: Undoing commits

## !!!Danger zone!!!!

Be cautious when commits have been pushed to others!

- if they have started more work based on that commit, things get real bad!!!
- if they haven't started any work, they will still probably want to delete the branch before re-fetching it.

---

Trail: Updating commits

## Question: is it the most recent commit?

---

Trail: Updating commits,Most recent commit?

## YES

---

Trail: Updating commits,Most recent commit?,YES

## Case: "I want to undo my last commit and save the results"

### Scenario

### Command

- `git reset`
  - `--soft` or `--mixed` flags depend on what state you want the changes in (soft: staged or mixed: unstaged)

```
--mixed               reset HEAD and index
--soft                reset only HEAD
--hard                reset HEAD, index and working tree
```

- afterward you can do what you want with the changes -- stash them, etc.

### Real-life Examples

- you accidentally commit on a branch you didn't mean to
  - reset, switch to a new branch, & commit

---

Trail: Updating commits,Most recent commit?,YES

## Case: "I want to undo my last commit and never see it again"

### Scenario

### Command

- `git reset --hard HEAD~1`
  - details of what `HEAD~1` MEANS

### Real-life Examples

- I committed a secret **but didn't push it up yet**
  - note that the commit itself doesn't get cleaned up right away, until git garbage collects it
    - and in order to be removed by gc, it needs to be removed from reflog
      - which by default doesn't happen for 30 days for unreachable commits
      - so if you need to completely wipe this commit from existence, you have to do a little bit more

---

Trail: Updating commits,Most recent commit?

## NO

---

Trail: Updating commits,Most recent commit?,NO

## Case: "I want to revert a commit without rewriting history"

### Scenario

### Command

- `git revert SHA`
- this creates another commit with the inverse of those changes
- the original commit remains in the log forever!
  - which is nice if you don't want to worry about this being a shared/public branch

### Real-life Examples

- rolling back a change that got deployed, without having to "roll back".

---

Trail: Updating commits

## Case: "Awwww @#$!#$#@ I committed secrets and I pushed them up"

### Scenario

### Command

- https://sparkbox.com/foundry/remove_file_from_git_history_with_git_filter-branch
- cycle your credentials!!!!

### Real-life Examples

- https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things

---
Layout: module

# Replaying Changes

## I want to replay this branch onto a different starting point.

todo: is there a better way to say that before they know what replaying is?

---

Trail: Replaying changes

## What do you mean replaying?

### Merging vs rebasing

---

Trail: Replaying changes

## Case: "I want this branch to be based on a different starting point"

### Scenario

### Command

- `git rebase identifier`
- identifier can be a branch name, a SHA, a tag, a relative reference like HEAD~2....

### Real-life Examples

- New changes have been merged to main and I need to rebase my branch on the latest main commit
- I created a branch from the wrong commit/branch and I want to move it

---

TODO: rebasing is like winding the wheel of git back a few turns, then checking out a different commit, then letting the wheel spin back forward
Layout: module

# Replaying Changes With Modifications

## I did something a few commits ago that I want to change.

- and I want to rewrite it out of history (so a revert commit wasn't what you wanted)

---

Trail: Replaying changes With modifications

## Detour: Interactive Rebasing

- note that if you just "pick" everything it is the same as rebasing non-interactively
- note that when rewriting commits, the SHAs are changed!!!
  - be extra careful when pushing this!!!
- note that you can abort from the rebase interactive screen by exiting without saving (`:q!`)
- to continue, save the file (`:wq`)

---

Trail: Replaying changes With modifications

## Case: "I want to reorder the commits in this branch"

### Scenario

### Command

- `git rebase -i`; swap lines

### Real-life Examples

- I want my PR to tell a story
- I want my PR to be a useful guide for someone doing something similar in the future
- note that even if you go from 7-6-8 to 6-7-8, and both end up with the code being the same at 8, you'll end up with a new commit for 8!

---

Trail: Replaying changes With modifications

## Case: "I want to remove a commit from this branch"

### Scenario

### Command

- `git rebase -i`; `drop`/`d`

### Real-life Examples

- I made a quick fix and committed it in my branch but someone else did it better in another branch
- I was messing around and made a commit that I just don't want anymore

---

Trail: Replaying changes With modifications

## Case: "I want to update a commit in this branch"

- remember that if it's the latest you can use `git commit --amend` without rebasing

### Scenario

### Command

- `git rebase -i`; `edit`/`e`
- make the changes
- `git commit --amend` (or make a new commit)
- `git rebase --continue`

### Notes

- you can edit multiple commits while rebasing
- if you do multiple, you'll repeat the "make changes, amend, continue" loop until they're all complete

### Real-life Examples

- I want to give credit where credit is due! (pairing; mention pear)
- I accidentally included a comment or debugging statement in a previous commit

---

Trail: Replaying changes With modifications

## Case: "I want to combine some older commits into one"

### Scenario

### Command

- `git rebase -i`;
- `squash`/`s`
  - if I care about preserving the individual commit messages
  - `:wq` to start rebasing
  - edit "squashed" commit message (tells you what's all in this commit)
    - `:wq` to make this commit
- `fixup`/`f`
  - if I don't care about preserving the individual commit messages
  - `:wq` to start rebasing
- need to deal with any conflicts along the way
  - make changes
  - commit them
  - `git rebase --continue`

### Real-life Examples

- I missed part of a previous commit until later
- I want my PR to tell a story
- I want my PR to be a useful guide for someone doing something similar in the future

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
